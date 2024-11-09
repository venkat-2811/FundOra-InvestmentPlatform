from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np
from sklearn.preprocessing import StandardScaler
app = FastAPI()
# Load the trained model and scaler
model = joblib.load('models/investment_predictor.pkl')
scaler = joblib.load('models/scaler.pkl')

class ProjectData(BaseModel):
    category: str
    funding_goal: float
    founder_experience: int
    market_size: float
    competition_level: int
    team_size: int

class PredictionResponse(BaseModel):
    success_probability: float
    recommended_funding: float
    risk_level: str

@app.post("/predict", response_model=PredictionResponse)
async def predict_success(project: ProjectData):
    try:
        # Prepare features
        features = np.array([[
            project.funding_goal,
            project.founder_experience,
            project.market_size,
            project.competition_level,
            project.team_size
        ]])
        
        # Scale features
        scaled_features = scaler.transform(features)
        
        # Make prediction
        success_prob = model.predict_proba(scaled_features)[0][1]
        
        # Calculate recommended funding
        recommended_funding = calculate_recommended_funding(
            success_prob,
            project.funding_goal,
            project.market_size
        )
        
        # Determine risk level
        risk_level = get_risk_level(success_prob)
        
        return PredictionResponse(
            success_probability=float(success_prob),
            recommended_funding=recommended_funding,
            risk_level=risk_level
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def calculate_recommended_funding(success_prob: float, goal: float, market_size: float) -> float:
    base_recommendation = goal * success_prob
    market_factor = min(market_size / 1e9, 2)  # Cap market factor at 2x
    return base_recommendation * market_factor

def get_risk_level(success_prob: float) -> str:
    if success_prob >= 0.7:
        return "Low"
    elif success_prob >= 0.4:
        return "Medium"
    else:
        return "High"
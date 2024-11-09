import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || '05b8e38956e22accdf6d91a372d57fc91d316746dea12fd3426b87d2271f8f2',
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
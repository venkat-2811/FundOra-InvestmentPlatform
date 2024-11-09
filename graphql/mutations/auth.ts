import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(loginInput: $input) {
      access_token
      user {
        id
        email
        role
      }
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation Register($input: RegisterInput!) {
    register(registerInput: $input) {
      access_token
      user {
        id
        email
        role
      }
    }
  }
`;
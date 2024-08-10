import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class AuthService {
  private cognito: AWS.CognitoIdentityServiceProvider;

  constructor() {
    this.cognito = new AWS.CognitoIdentityServiceProvider({
      region: process.env.AWS_REGION,
    });
  }

  async signUp(email: string, password: string) {
    const params = {
      ClientId: process.env.COGNITO_APP_CLIENT_ID,
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: 'email',
          Value: email,
        },
      ],
    };

    return this.cognito.signUp(params).promise();
  }

  async confirmSignUp(email: string, code: string) {
    const params = {
      ClientId: process.env.COGNITO_APP_CLIENT_ID,
      ConfirmationCode: code,
      Username: email,
    };

    return this.cognito.confirmSignUp(params).promise();
  }

  async authenticate(email: string, password: string) {
    const params = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: process.env.COGNITO_APP_CLIENT_ID,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    };

    return this.cognito.initiateAuth(params).promise();
  }
}

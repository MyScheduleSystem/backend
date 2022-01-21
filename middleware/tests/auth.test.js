import httpMocks from 'node-mocks-http';
import faker from 'faker';
import jwt from 'jsonwebtoken';
import * as userRepository from '../../repository/userRepository.js';
import { isAuthenticate } from '../authentication.js';

jest.mock('jsonwebtoken');
jest.mock('../../repository/userRepository.js');

describe('Authorization Middleware', () => {
  it('returns 401 for the request without Authorization header', async () => {
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/me'
    });
    const response = httpMocks.createResponse();
    const next = jest.fn();

    await isAuthenticate(request, response, next);

    expect(response.statusCode).toBe(401);
    expect(response._getJSONData().message).toBe('Authentication Erorr...');
    expect(next).not.toBeCalled();
  });
});
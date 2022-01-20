import {} from 'express-async-errors';
import { config } from '../config.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../repository/userRepository.js';

function createJwtToken(id) { 
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSec,
  });
}

export async function login(request, response) {
  const { username, password } = request.body;
  const user = await userRepository.findByUsername(username);
  if(!user) { return response.status(401).json({ message: "Invalid username or passwrod" }); }
  const isPassword = await bcrypt.compare(password, user.password);
  if(!isPassword) { return response.status(401).json({ message: "Invalid username or password" }); }
  const token = createJwtToken(user.id);
  response.status(200).json({ token, username });
}

export async function signup(request, response) {
  const { username, name, password, email } = request.body;
  const user = await userRepository.findByUsername(username);
  if(user) { return response.status(409).json({ message: `{username} is already exist...` }); }
  const hashedPassword = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser(
    {
      username,
      name,
      password : hashedPassword,
      email,
    }
  );
  const token = createJwtToken(userId);
  response.status(200).json({ token, username });
}

export async function isMe(request, response) {
  const user = userRepository.findById(request.userId);
  if(!user) { return response.status(409).json({ message: 'Cannot find user...' }); }
  response.status(200).json({ token: request.token, username: user.username });
}
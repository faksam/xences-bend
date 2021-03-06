import request from 'supertest';
import app from '../app';

describe('Test Authentication', () => {
  it('Signup a new user with empty fields', async () => {
    const response = await request(app).post('/auth/signup')
    .send({ });
    expect(response.status).toBe(400);
  });

  it('Signup a new user with valid fields', async () => {
    const response = await request(app).post('/auth/signup')
    .send({
      fullname: 'Samuel Fakunle',
      email: 'fakunlesamuel@gmail.com',
      password: 'LifeIsARace',
      password_confirmation: 'LifeIsARace',
    });
    expect(response.status).toBe(201);
  });

  it('Signup a new user with existing email/data', async () => {
    const response = await request(app).post('/auth/signup')
    .send({
      fullname: 'Samuel Fakunle',
      email: 'fakunlesamuel@gmail.com',
      password: 'LifeIsARace',
      password_confirmation: 'LifeIsARace',
    });
    expect(response.status).toBe(409);
  });

  it('Login a user with empty fields', async () => {
    const response = await request(app).post('/auth/login')
    .send({});
    expect(response.status).toBe(400);
  });

  it('Login a user with valid fields', async () => {
    const response = await request(app).post('/auth/login')
    .send({
      email: 'fakunlesamuel@gmail.com',
      password: 'LifeIsARace',
    });
    expect(response.status).toBe(200);
  });

  it('Login a user with invalid fields', async () => {
    const response = await request(app).post('/auth/login')
    .send({
      email: 'fakunlesamuel@gmail.com',
      password: 'LifeIsARaceWrong',
    });
    expect(response.status).toBe(400);
  });
});

import request from 'supertest';
import app from '../app';

describe('Test Users', () => {
  it('Get a none existing user', async () => {
    const response = await request(app).get('/users/50');
    expect(response.status).toBe(404);
  });

  it('Create a new user', async () => {
    const response = await request(app).post('/users')
    .send({
      fullname: 'Samuel Fakunle',
      email: 'fakunlesamuel2@gmail.com',
      password: 'LifeIsARace',
      password_confirmation: 'LifeIsARace',
    });
    expect(response.status).toBe(201);
  });

  it('Search for a user by email', async () => {
    const response = await request(app).get('/users/search?email=fakunlesamuel2@gmail.com');
    expect(response.status).toBe(200);
  });

  it('Search for a none existing user by email', async () => {
    const response = await request(app).get('/users/search?email=fakunlesamJohn@gmail.com');
    expect(response.status).toBe(400);
  });

  it('Get all users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });

  it('Get a specific user', async () => {
    const response = await request(app).get('/users/1');
    expect(response.status).toBe(200);
  });

  it('Edit a specific user', async () => {
    const response = await request(app).put('/users/1')
    .send({
      fullname: 'Samuel Mayowa Fakunle',
    });
    expect(response.status).toBe(200);
  });

  it('Count all users', async () => {
    const response = await request(app).get('/users/count');
    expect(response.status).toBe(200);
  });

  it('Delete a specific user', async () => {
    const response = await request(app).delete('/users/1');
    expect(response.status).toBe(200);
  });
});

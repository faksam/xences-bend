import request from 'supertest';
import app from '../app';

describe('Test the root path', () => {
  test('Get a none existing user', async () => {
    const response = await request(app).get('/users/1');
    expect(response.status).toBe(404);
  });

  test('Create a new user', async () => {
    const response = await request(app).post('/users')
    .send({
      name: 'Samuel Fakunle'
    });
    expect(response.status).toBe(201);
  });

  test('Get all users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });

  test('Get a specific user', async () => {
    const response = await request(app).get('/users/1');
    expect(response.status).toBe(200);
  });

  test('Edit a specific user', async () => {
    const response = await request(app).put('/users/1')
    .send({
      name: 'Samuel Mayowa Fakunle'
    });
    expect(response.status).toBe(200);
  });

  test('Count all users', async () => {
    const response = await request(app).get('/users/count');
    expect(response.status).toBe(200);
  });

  test('Delete a specific user', async () => {
    const response = await request(app).delete('/users/1');
    expect(response.status).toBe(200);
  });
});

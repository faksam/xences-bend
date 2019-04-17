import request from 'supertest';
import app from '../app';

describe('Test Attributes', () => {

  it('Create a new attribute', async () => {
    const response = await request(app).post('/attributes')
    .send({
      name: 'Color',
    });
    expect(response.status).toBe(201);
  });

  it('Get all attributes', async () => {
    const response = await request(app).get('/attributes');
    expect(response.status).toBe(200);
  });

  it('Get a specific attribute', async () => {
    const response = await request(app).get('/attributes/1');
    expect(response.status).toBe(200);
  });

  it('Edit a specific attribute', async () => {
    const response = await request(app).put('/attributes/1')
    .send({
      name: 'Colours',
    });
    expect(response.status).toBe(200);
  });

  it('Count all attributes', async () => {
    const response = await request(app).get('/attributes/count');
    expect(response.status).toBe(200);
  });

  it('Delete a specific attribute', async () => {
    const response = await request(app).delete('/attributes/1');
    expect(response.status).toBe(200);
  });
});

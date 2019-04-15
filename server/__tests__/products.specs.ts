import request from 'supertest';
import app from '../app';

describe('Test Products', () => {

  it('Create a new product', async () => {
    const response = await request(app).post('/products')
    .send({
      name: 'Samuel Fakunle',
      price: '200000',
      gender: 'Male',
      brand: 'Nike',
      quantity: '12',
      description: 'Life is a race',
    });
    expect(response.status).toBe(201);
  });

  it('Get all products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
  });

  it('Get a specific product', async () => {
    const response = await request(app).get('/products/1');
    expect(response.status).toBe(200);
  });

  it('Edit a specific product', async () => {
    const response = await request(app).put('/products/1')
    .send({
      name: 'Samuel Mayowa Fakunle',
    });
    expect(response.status).toBe(200);
  });

  it('Count all products', async () => {
    const response = await request(app).get('/products/count');
    expect(response.status).toBe(200);
  });

  it('Delete a specific product', async () => {
    const response = await request(app).delete('/products/1');
    expect(response.status).toBe(200);
  });
});

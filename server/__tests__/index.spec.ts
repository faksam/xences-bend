import request from 'supertest';
import app from '../app';

describe('Test the root path', () => {
  it('Welcome to the xences', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to the xences application!!!');
  });
});

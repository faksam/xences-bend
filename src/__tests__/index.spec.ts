import request from 'supertest';
import app from '../../src/app';

describe('Test the root path', () => {
  test('Welcome to the xences', async () => {
    const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Welcome to the xences application!!!');
  });
});

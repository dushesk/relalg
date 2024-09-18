const request = require('supertest');
const app = require('../server'); // путь к вашему приложению Express

describe('GET /api/tasks', () => {
  it('should return a list of tasks with a 200 status', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('POST /api/tasks', () => {
  it('should create a new task', async () => {
    const newTask = { title: 'New Task', description: 'Task description' };
    const response = await request(app).post('/api/tasks').send(newTask);
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(newTask.title);
  });
});

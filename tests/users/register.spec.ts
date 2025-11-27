import request from 'supertest';
import app from '../../src/app';
import { sequelize } from '../../src/config/db';
// import { Sequelize } from 'sequelize'

describe('POST auth/register', () => {
    describe('Given all fields', () => {
        beforeAll(async () => {
            try {
                await sequelize.authenticate();

                //   await sequalize.sy
            } catch (error) {
                console.error('Database init error:', error);
                throw error; // stop tests if DB fails
            }
        });

        beforeEach(async () => {
            //database truncate //clean database before each test cases
            // await sequelize.drop();
            // await sequelize.truncate({ cascade: true });
            await sequelize.sync({ force: true });
        });

        afterAll(async () => {
            await sequelize.close();
        });

        it('should return 201 status code', async () => {
            const userData = {
                username: 'janna',
                email: 'jannakondeth5@gmail.com',
                password: 'janna123',
            };

            const response = await request(app).post('/auth/register').send(userData);

            expect(response.status).toBe(201);
        });
    });
});

import { SetupServer } from '@src/server';
import SuperTest from 'supertest';


beforeAll(() => {
    const server = new SetupServer();
    server.init();
    global.testRequest = SuperTest(server.getApp);
})
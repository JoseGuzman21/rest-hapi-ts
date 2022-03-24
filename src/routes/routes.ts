import { Server, Request, ResponseToolkit } from '@hapi/hapi';

export const routes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (req: Request, res: ResponseToolkit) => {
            return 'hello world';
        }
    });
}
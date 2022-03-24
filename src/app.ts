import { Server } from '@hapi/hapi';
import { routes } from './routes/routes';

export const init = async () => {
    const server = new Server({
        port: 5000,
        host: 'localhost'
    });

    routes(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(0)
})
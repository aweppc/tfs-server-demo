import Fastify from 'fastify';
import { routes } from './routes';

export const startServer = async () => {
    const server = Fastify();

    if (process.env.NODE_ENV !== 'production') {
        server.register(require('fastify-http-proxy'), {
            upstream: 'http://localhost:9000',
            prefix: '/assets',
            http2: false
        });
    }

    routes.forEach((routeConfig) => server.route(routeConfig));

    const port = await server.listen(3000, process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1');

    console.log(`server is running at ${port}`);
};

startServer();
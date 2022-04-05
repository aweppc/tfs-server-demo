import { FastifyReply, FastifyRequest, HTTPMethods } from 'fastify';


export type RouteConfig = {
    method: HTTPMethods | HTTPMethods[];
    url: string;
    handler: (req: FastifyRequest, res: FastifyReply) => void | Promise<unknown | void>;
}
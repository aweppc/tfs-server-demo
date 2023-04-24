import { RouteConfig } from './types';
import { appRoute } from './app';
import { assetsRoute } from './assets';

export const routes: RouteConfig[] = [
    appRoute,
    ...(process.env.NODE_ENV === 'production' ? [assetsRoute] : [])
];
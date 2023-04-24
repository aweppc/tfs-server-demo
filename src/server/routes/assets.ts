import fs from 'fs';
import { RouteConfig } from './types';

export const assetsRoute: RouteConfig = {
    method: 'GET',
    url: '/assets/:assetId',
    handler: (req, res) => {
        const { assetId } = req.params as Record<string, string>;
        const assetPath = assetId;
        if (!fs.existsSync(assetPath)) {
            throw new Error('not found');
        }
        const stream = fs.createReadStream(assetPath);
        res.send(stream);
    }
}
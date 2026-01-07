import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req: VercelRequest, res: VercelResponse) {
    try {
        const imagePath = join(process.cwd(), 'public', 'images', 'book-cover.png');
        const image = readFileSync(imagePath);

        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        res.send(image);
    } catch (error) {
        res.status(404).json({ error: 'Image not found' });
    }
}

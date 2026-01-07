import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Cache-Control', 'public, max-age=3600');

    res.json({
        title: "Transformação em Unidade",
        author: "Renata Rodrigues",
        description: "Descubra uma vida saudável, equilibrada e plena que Deus sonhou para você. Aprenda a emagrecer de dentro para fora e viva em harmonia.",
        price: {
            original: 97.00,
            current: 45.00,
            discount: "54%"
        },
        programLength: "21 dias",
        paymentLink: "https://pay.hotmart.com/E99478012S?off=80eip38b&_hi=eyJjaWQiOiIxNzEzOTc5MTA5MzMzNzc4MDU4NzQ1MDIyNjgxMjAwIiwiYmlkIjoiMTcxMzk3OTEwOTMzMzc3ODA1ODc0NTAyMjY4MTIwMCIsInNpZCI6ImE0NTc4NGFkZDE0NDQ3YjliOWM5NWFmMGY5OTc2NzlhIn0=.1746545485423&bid=1746545486402"
    });
}

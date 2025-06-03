import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the book cover image statically
  app.get('/api/book/cover', (req, res) => {
    res.sendFile('attached_assets/image_1746546856321.png', { root: process.cwd() });
  });

  // API endpoint to get book details
  app.get('/api/book/details', (req, res) => {
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
  });

  const httpServer = createServer(app);

  return httpServer;
}

import express, { Request, Response } from 'express';
import cors from 'cors';

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();
app.use(cors(options));
app.use(express.json());
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

app.get('/', (req: Request, res: Response) => {
    res.send({'res': 'Hello, TypeScript Express!'});
});
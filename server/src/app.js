import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import imagesRouter from './routes/images.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running ✅' });
});

app.use('/api/images', imagesRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

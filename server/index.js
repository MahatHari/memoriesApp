import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import appRouter from './routes/posts.js';

dotenv.config({ path: './.env' });

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

//ROUTEs
app.use('/posts', appRouter);

//mongodb atlas
const CONNECTION_URL = process.env.DATABASE;

const PORT = process.env.PORT || 8000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Port running on port :${PORT}`))
  )
  .catch((error) => console.log(error.message));

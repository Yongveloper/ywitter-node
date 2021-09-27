import express from 'express';
import cors from 'cors';
import tweetsRouter from './router/tweets.js';

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/tweets', tweetsRouter);

app.listen(PORT, () => console.log(`Server listening on port:${PORT}`));

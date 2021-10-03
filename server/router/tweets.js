import express from 'express';
import 'express-async-errors';
import * as tweetRepository from '../data/tweet.js';

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res) => {
  const { username } = req.query;
  const data = username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll();
  res.status(200).json(data);
});

// Get /tweets/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const tweet = tweetRepository.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// POST /tweets
router.post('/', (req, res) => {
  const { text, username, name } = req.body;
  const tweet = tweetRepository.create(text, username, name);
  res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const tweet = tweetRepository.update(id, text);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// DELETE /tweets/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  tweetRepository.remove(id);
  res.sendStatus(204);
});

export default router;

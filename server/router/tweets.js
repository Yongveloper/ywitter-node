import express from 'express';

const router = express.Router();

let tweets = [
  {
    id: '1',
    text: '테스트입니다',
    createdAt: Date.now().toString(),
    name: 'yong',
    username: 'yong',
    url: '',
  },
];

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res) => {
  const { username } = req.query;
  const data = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;
  res.status(200).json(data);
});

// Get /tweets/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// POST /tweets
router.post('/', (req, res) => {
  const { text, username, name } = req.body;
  const tweet = {
    id: Date.now().toString(),
    name,
    username,
    createdAt: new Date(),
    text,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// DELETE /tweets/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.sendStatus(204);
});

export default router;

import express from 'express';

const router = express.Router();

let tweets = [
  {
    id: 1,
    text: '테스트입니다',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'yong',
    username: 'yong',
    url: '',
  },
  {
    id: 2,
    text: '두번째 게시물 입니다',
    createdAt: '2021-05-19T04:20:57.000Z',
    name: 'yong',
    username: 'yong',
    url: '',
  },
  {
    id: 3,
    text: '밥밥',
    createdAt: '2021-05-20T04:20:57.000Z',
    name: 'bob',
    username: 'bob',
    url: '',
  },
];

router.get('/', (req, res) => {
  const { username } = req.query;
  if (username) {
    const userTweets = tweets.filter((tweet) => tweet.username === username);
    res.status(200).json(userTweets);
  } else {
    res.status(200).json(tweets);
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const specificTweets = tweets.find((tweet) => tweet.id === Number(id));
  if (specificTweets) {
    res.status(200).json(specificTweets);
  } else {
    res.status(404).send();
  }
});

router.post('/', (req, res) => {
  const { text, username, name } = req.body;
  const newTweet = {
    id: Date.now(),
    name,
    username,
    createdAt: new Date(),
    text,
    url: '',
  };
  tweets.push(newTweet);
  res.status(201).json(newTweet);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const newTweet = tweets.find((tweet) => tweet.id === Number(id));
  if (!newTweet) return res.status(404).send();
  newTweet.text = text;
  res.status(200).json(newTweet);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  tweets = tweets.filter((tweet) => tweet.id !== Number(id));
  res.status(204).send();
});

export default router;

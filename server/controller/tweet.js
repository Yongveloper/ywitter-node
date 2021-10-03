import * as tweetRepository from '../data/tweet.js';

export function getTweets(req, res) {
  const { username } = req.query;
  const data = username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll();
  res.status(200).json(data);
}

export function getTweet(req, res) {
  const { id } = req.params;
  const tweet = tweetRepository.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export function createTweet(req, res) {
  const { text, username, name } = req.body;
  const tweet = tweetRepository.create(text, username, name);
  res.status(201).json(tweet);
}

export function updateTweet(req, res) {
  const { id } = req.params;
  const { text } = req.body;
  const tweet = tweetRepository.update(id, text);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export function deleteTweet(req, res) {
  const { id } = req.params;
  tweetRepository.remove(id);
  res.sendStatus(204);
}

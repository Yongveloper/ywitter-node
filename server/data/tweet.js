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

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    name,
    username,
    createdAt: new Date(),
    text,
  };
  tweets = [tweet, ...tweets];
  return tweets;
}

export function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}

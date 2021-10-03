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

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
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

export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}

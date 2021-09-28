export default class TweetService {
  // tweets = [
  //   {
  //     id: 1,
  //     text: '드림코딩에서 강의 들으면 너무 좋으다',
  //     createdAt: '2021-05-09T04:20:57.000Z',
  //     name: 'Bob',
  //     username: 'bob',
  //     url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  //   },
  // ];

  async getTweets(username) {
    const response = username
      ? await fetch(`http://localhost:8080/tweets?username=${username}`)
      : await fetch('http://localhost:8080/tweets');
    const tweets = await response.json();
    return tweets;
  }

  async postTweet(text) {
    const response = await fetch('http://localhost:8080/tweets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'yong', username: 'yong', text }),
    });
    const tweet = await response.json();
    return tweet;
  }

  async deleteTweet(tweetId) {
    await fetch(`http://localhost:8080/tweets/${tweetId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tweetId }),
    });
  }

  async updateTweet(tweetId, text) {
    try {
      const response = await fetch(`http://localhost:8080/tweets/${tweetId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      const tweet = await response.json();
      return tweet;
    } catch (error) {
      console.error('해당 글을 찾을 수 없습니다.');
    }
  }
}

import express from 'express';

const router = express.Router();

const tweets = [
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
];

router.get('/', (req, res) => {
  res.status(200).json(tweets);
});

export default router;

import type {NextApiRequest, NextApiResponse} from 'next';
import {runApiMiddleware} from '../../../src/api/utils';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await runApiMiddleware(req, res, ['GET', 'HEAD']);

  const result = await fetch(
    `https://api.twitter.com/2/tweets/search/recent?query=from%3AS3Partners&tweet.fields=created_at`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_APP_ACCESS_TOKEN}`,
      },
    }
  )
    .then(res => res.json())
    .catch(error => {
      console.error(error);
      return {
        status: 'fail',
        data: [],
      };
    });
  res.json(result);
};

export default handler;

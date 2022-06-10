import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

type Body = {
  url: string;
};

const prisma = new PrismaClient();

function makeid(length: number) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.send({ message: 'Method not allowed!' });

  const { url } = req.body as Body;

  if (!url) {
    res.statusCode = 400;
    return res.send({ message: 'Please provide an URL!' });
  }

  const short = makeid(5);

  const data = await prisma.short.create({
    data: {
      url,
      short,
      short_url: `${req.headers.host}/api/${short}`
    }
  });

  if (!data) {
    res.statusCode = 500;
    return res.send({ message: 'Could not create a short for your url!' });
  }

  return res.json(data);
}

import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

type Query = {
  short: string;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') return res.send({ message: 'Method not allowed!' });

  const { short } = req.query as Query;

  const data = await prisma.short.findFirst({
    where: {
      short: {
        equals: short
      }
    }
  });

  if (!data) {
    res.statusCode = 404;
    return res.send({ message: 'Please provide an existent short query!' });
  }

  return res.redirect(data.url);
}

import { post } from './http';

type Short = {
  id: number;
  url: string;
  short: string;
  short_url: string;
  createdAt: Date;
};

export const createShort = async (url: string): Promise<Short> =>
  post('/api/create', { url });

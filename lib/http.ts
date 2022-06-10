interface Init {
  method: 'GET' | 'POST';
  body?: string;
}

const request = (endpoint: string, init?: Init): Request =>
  new Request(endpoint, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...init
  });

const http = async <T>(req: Request): Promise<T> => {
  const res = await fetch(req);
  const body: T = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  return body;
};

export const get = async <T>(endpoint: string): Promise<T> =>
  http<T>(
    request(endpoint, {
      method: 'GET'
    })
  );

export const post = async <D, I>(endpoint: string, body: I): Promise<D> =>
  http<D>(
    request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body)
    })
  );

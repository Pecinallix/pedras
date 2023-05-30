export const API_URL = 'http://pedrasapi.test';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/json/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

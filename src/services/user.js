import http from '@/utils/axios';

export function getUserInfo({ username }) {
  return http.get('/info', {
    params: {
      username
    }
  });
}

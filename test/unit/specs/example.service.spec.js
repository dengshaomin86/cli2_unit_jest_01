import { getUserInfo } from '@/services/user';
// jest.mock('axios');

describe('测试 service', () => {
  it('测试获取用户信息', async () => {
    const data = await getUserInfo({ username: 'test' });
    console.log(data);
    expect(data).toBe(null);
  });
});

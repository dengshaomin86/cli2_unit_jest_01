import qs from 'qs';
import axios from 'axios';
import router from '@/router';
import store from '@/store';
import CancelToken from './axiosCancelToken';
import { Message } from 'ant-design-vue';

const $axios = axios.create({
  baseURL: 'http://120.77.221.16/3002',
  withCredentials: true,
  timeout: 30000,
  headers: {
    'Cache-Control': 'no-cache' // 禁止请求缓存
  }
});

$axios.interceptors.request.use(
  config => {
    config.cancelToken = CancelToken.set();
    const _t = new Date().getTime();

    switch (config.method) {
      case 'post':
        config.data = qs.stringify({
          _t,
          ...qs.parse(config.data)
        });
        break;
      case 'get':
        config.params = {
          _t,
          ...config.params
        };
        break;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 添加响应拦截器
$axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    if (response.data.flag === false && response.data.auth === false) {
      CancelToken.cancel(); // 取消其他正在进行的请求
      Message.error(response.data.message);
      store.commit('setUserInfo');
      router.push(`/login?redirect=${router.currentRoute.fullPath}`);
      return Promise.reject(response);
    }
    CancelToken.remove(response); // 删除请求成功的 cancelToken
    return response;
  },
  error => {
    // 对响应错误做点什么
    console.dir(error);
    if (error.message) Message.error(error.message);
    return Promise.reject(error);
  }
);

window.axios = $axios;
export default $axios;

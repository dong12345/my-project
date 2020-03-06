import axios from 'axios';

export function request(config) {
  let baseURL = 'http://123.207.32.32:8000/api/wh';
  //let baseURL = 'http://106.54.54.237:8000/api/wh';

  let instance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
  });

  //请求拦截器
  instance.interceptors.request.use(
    config => {
      // console.log('拦截器拦截的请求配置为：', config);
      return config;
    },
    err => {
      // console.log('拦截器拦截的请求错误信息为：', err);
    }
  );

  //响应拦截器
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      // console.log('拦截器拦截的响应错误信息为：', err);
    }
  );

  return instance.request(config);
}

export function myApi(config) {
  let baseURL1 = 'http://localhost:5000/api';

  let instance = axios.create({
    baseURL: baseURL1,
    timeout: 5000,
  });

  //请求拦截器
  instance.interceptors.request.use(
    config => {
      // console.log('拦截器拦截的请求配置为：', config);
      return config;
    },
    err => {
      // console.log('拦截器拦截的请求错误信息为：', err);
    }
  );

  //响应拦截器
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      // console.log('拦截器拦截的响应错误信息为：', err);
    }
  );

  return instance.request(config);
}

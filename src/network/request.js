import axios from 'axios'

export function request(config) {

  let instance = axios.create({
    baseURL: 'http://httpbin.org/',
    timeout: 5000
  });

  //请求拦截器
  instance.interceptors.request.use(config => {
      console.log('拦截器拦截的请求配置为：', config);
      return config;
    },
    err => {
      console.log('拦截器拦截的请求错误信息为：', err);
    })

  //响应拦截器
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log('拦截器拦截的响应错误信息为：', err);

  })

  return instance.request(config);
}
import axios from 'axios'

import type { AxiosInstance } from 'axios'
import { RequestConfig } from './type'

class Request {
  instance: AxiosInstance

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use((config) => {
      return config;
    }, (err) => {
      return err
    })
    this.instance.interceptors.response.use((res) => {
      return res;
    }, (err) => {
      return err;
    })

    // 针对特定的Request实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailedFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailedFn
    )

  }

  request<T = any>(config: RequestConfig) {
    // 单次请求的成功拦截处理
    if(config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    // 返回 Promise
    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config).then((res) => {
        // 单次响应成功的拦截处理
        if(config.interceptors?.responseSuccessFn) {
          res = config.interceptors.responseSuccessFn(res)
        }
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  get<T = any>(config: RequestConfig) {
    return this.request({...config, method: 'GET'})
  }

  post<T = any>(config: RequestConfig) {
    return this.request({...config, method: 'POST'})
  }

  delete<T = any>(config: RequestConfig) {
    return this.request({...config, method: 'DELETE'})
  }

  patch<T = any>(config: RequestConfig) {
    return this.request({...config, method: 'PATCH'})
  }
}

export default Request;

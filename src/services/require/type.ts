import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface Interceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => any
  requestFailedFn?: (err: any) => any
  responseSuccessFn?: (res: T | any) => T | any
  responseFailedFn?: (err: any) => any
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: Interceptors<T>
}

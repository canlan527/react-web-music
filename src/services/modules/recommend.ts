import request from "..";

export function getBanner() {
  return request.get({
    url: '/banner'
  })
}
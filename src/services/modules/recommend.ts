import request from '..'

export function getBanner() {
  return request.get({
    url: '/banner',
  })
}

export function getHotRecommend(limit = 30) {
  return request.get({
    url: '/personalized',
    params: {
      limit,
    },
  })
}

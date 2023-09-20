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

export function getNewAlbum(limit = 20) {
  return request.get({
    url: '/album/list',
    params: {
      limit,
    },
  })
}

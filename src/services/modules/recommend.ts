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

export function getNewAlbum(limit = 27) {
  return request.get({
    url: '/album/list',
    params: {
      limit,
    },
  })
}

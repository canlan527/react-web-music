import request from '..'

// 获取最新新碟上架
export function getNewAlbum() {
  return request.get({
    url: '/album/newest',
  })
}

// 获取全部新碟
export function getAllNewAlbum({ area = 'all', limit = 35, offset = 0 }) {
  return request.get({
    url: '/album/new',
    params: {
      area,
      limit,
      offset,
    },
  })
}

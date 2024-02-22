import request from '..'

// 获取热门歌手数据
export function getSingerlist(offset = 0, limit = 100) {
  return request.get({
    url: '/top/artists',
    params: {
      offset,
      limit,
    },
  })
}

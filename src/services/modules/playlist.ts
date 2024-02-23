import request from '..'

// 获取歌单列表
export function getPlaylist({ offset = 1, limit = 28 }) {
  return request.get({
    url: '/top/playlist',
    params: {
      limit,
      offset,
    },
  })
}

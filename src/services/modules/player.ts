import request from '..'

// 获取歌曲详情
export function getSongDetail(ids: number) {
  return request.get({
    url: '/song/detail',
    params: {
      ids,
    },
  })
}

// 获取歌词数据
export function getSongLyric(id: number) {
  return request.get({
    url: '/lyric',
    params: {
      id,
    },
  })
}

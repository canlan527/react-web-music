import request from '..'

// 获取热门电台 offset 分页
export function getRadio({ limit = 28, offset = 0 }) {
  console.log()
  return request.get({
    url: '/dj/hot',
    params: {
      limit,
      offset,
    },
  })
}

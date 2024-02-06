export function formatterNumber(number: number | string) {
  number = Number(number)
  if (number > 10000) {
    return Math.ceil(number / 10000) + '万'
  } else {
    return number
  }
}

export function getImageSize(imgUrl: string, width: number, height: number = width) {
  return imgUrl + `?param=${width}x${height}`
}

export function formatterDuration(duration: number) {
  // duration ms  1s = 1000ms
  // 将毫秒转成秒
  const timeSeconds = duration / 1000
  const min = Math.floor(timeSeconds / 60)
  const sec = Math.floor(timeSeconds % 60)
  return `${parse0(min)}: ${parse0(sec)}`
}

export function parse0(number: number | string) {
  number = Number(number)
  return number < 10 ? '0' + number : number
}

/**
 * 构造轮播图列表
 * @param showlen 一页轮播图要展示的数据条数
 * @returns number
 */

export function ctrBannerList(showlen: number, data: any[]) {
  const banners = []
  const page = Math.ceil(data.length / showlen)
  for (let i = 0; i < page; i++) {
    banners.push(i)
  }
  return banners
}

/**
 * 生成一个随机数，并确保它与上一次的不同
 * @param playlist 列表
 * @param lastRandomNumber 上一次的随机数
 * @returns
 */
export function getRandomNumber(playlist: any[], lastRandomNumber: number) {
  let random = Math.floor(Math.random() * playlist.length)

  while (random === lastRandomNumber) {
    console.log(random, lastRandomNumber)
    random = Math.floor(Math.random() * playlist.length)
    if (random !== lastRandomNumber) {
      lastRandomNumber = random
    }
  }
  return random
}

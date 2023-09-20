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

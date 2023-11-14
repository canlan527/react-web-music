export interface ILyrics {
  time: number
  text: string
}
// 匹配时间[00:28.71]
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricStr: string) {
  const lyrics: ILyrics[] = []
  // 拿到每一行的歌词数据
  const lines: string[] = lyricStr.split('\n')
  // 对每一行进行解析，解析成对应的对象
  for (const line of lines) {
    // 处理时间
    const timeList = timeRegExp.exec(line)
    if (!timeList) continue
    const min = Number(timeList[1]) * 60 * 1000 // 将分钟转成毫秒
    const sec = Number(timeList[2]) * 1000 // 将秒转成毫秒
    // 分析毫秒是两位是还是三位数，如果是三位数直接相加，两位数则*10
    const ms = Number(timeList[3].length) === 2 ? Number(timeList[3]) * 10 : Number(timeList[3])
    const time = min + sec + ms
    // 获取文本:匹配到时间替换成空文本即可
    const text = line.replace(timeRegExp, '')
    // 将处理好的时间和文本推入数组并返回最终循环完的数组
    lyrics.push({ time, text })
  }
  return lyrics
}

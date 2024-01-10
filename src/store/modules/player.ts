import { getSongDetail, getSongLyric } from '@/services/modules/player'
import { ILyrics, parseLyric } from '@/utils/parse-lyric'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootType } from '..'

// 获取currentSong
export const fetchCurrentSongAction = createAsyncThunk<void, number, { state: RootType }>('currentSong', (id, { dispatch, getState }) => {
  // 准备播放某一首歌曲，分为两种情况
  // 1. 从列表尝试是否可以获取到这首歌: 拿到整个列表
  const playlist = getState().player.playsongList
  const findIndex = playlist.findIndex((item) => item.id === id)

  if (findIndex === -1) {
    // 没有找到相同的歌
    // 发送请求获取歌曲信息
    getSongDetail(id).then((res) => {
      const { data } = res
      // 获取歌曲
      const song = data.songs[0]
      // 拷贝一份playlist
      const newPlaysongList = [...playlist]
      newPlaysongList.push(song) // 将新获取的song推入新数组中
      // 放入state.currentSong中
      dispatch(changeCurrentSongAction(song))
      // 派发action，更新playlist数据
      dispatch(changePlaysongListAction(newPlaysongList))
      // 记录索引
      dispatch(changePlaysongIndexAction(newPlaysongList.length - 1))

    })
  } else {
    // 找到了相同的item
    const song = playlist[findIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaysongIndexAction(findIndex))
  }

  // 获取歌词信息
  getSongLyric(id).then((res) => {
    const { data } = res
    // 获取歌词字符串
    const lyricStr = data.lrc.lyric
    // 解析歌词
    const lyrics = parseLyric(lyricStr)
    dispatch(changeLyricsAction(lyrics))
  })
})

interface IPlayerState {
  currentSong: any
  lyrics: ILyrics[]
  lyricIndex: number
  playsongList: any[]
  playsongIndex: number
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playsongList: [],
  playsongIndex: -1,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaysongIndexAction(state, { payload }) {
      state.playsongIndex = payload
    },
    changePlaysongListAction(state, { payload }) {
      state.playsongList = payload
    },
  },
})
// 导出reducers
export const { changeCurrentSongAction, changeLyricsAction, changeLyricIndexAction, changePlaysongIndexAction, changePlaysongListAction } = playerSlice.actions

export default playerSlice.reducer

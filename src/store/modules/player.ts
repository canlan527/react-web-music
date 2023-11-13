import { getSongDetail, getSongLyric } from '@/services/modules/player'
import { parseLyric } from '@/utils/parse-lyric'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 获取currentSong
export const fetchCurrentSongAction = createAsyncThunk('currentSong', (id: number, { dispatch }) => {
  // 获取歌曲信息
  getSongDetail(id).then((res) => {
    const { data } = res
    // 获取歌曲
    const song = data.songs[0]
    // 放入state.currentSong中
    dispatch(changeCurrentSongAction(song))
  })
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
  lyrics: any
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
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
  },
})
// 导出reducers
export const { changeCurrentSongAction, changeLyricsAction } = playerSlice.actions

export default playerSlice.reducer

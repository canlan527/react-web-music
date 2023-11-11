import { getSongDetail } from '@/services/modules/player'
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
})

interface IPlayerState {
  currentSong: any
}

const initialState: IPlayerState = {
  currentSong: {},
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
  },
})
// 导出reducers
export const { changeCurrentSongAction } = playerSlice.actions

export default playerSlice.reducer

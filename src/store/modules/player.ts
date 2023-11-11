import { getSongDetail } from '@/services/modules/player'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 获取currentSong
export const fetchCurrentSongAction = createAsyncThunk('currentSong', (id:number, {dispatch}) => {
  // 获取歌曲信息
  getSongDetail(id).then(res => {
    console.log(res)
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
  reducers: {},
})

export default playerSlice.reducer

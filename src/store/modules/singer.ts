import { getSingerlist } from '@/services/modules/singer'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 获取歌手列表
export const fetchSingerlistAction = createAsyncThunk('singerlist', async (args, { dispatch }) => {
  // 调用接口
  const { data } = await getSingerlist()
  // 通过 dispatch 调用 reducer, 更改state数据
  dispatch(changeSingerlistAction(data.artists))
})

interface ISingerState {
  singerlist: any[]
  singer: any
}

const initialState: ISingerState = {
  singerlist: [],
  singer: {},
}

const singerSlice = createSlice({
  name: 'singer',
  initialState,
  reducers: {
    changeSingerlistAction(state, { payload }) {
      state.singerlist = payload
    },
  },
})

// 到处reducers
export const { changeSingerlistAction } = singerSlice.actions

export default singerSlice.reducer

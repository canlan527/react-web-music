import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner, getHotRecommend } from '@/services/modules/recommend'

export const fetchBannersDataAction = createAsyncThunk('banners', async () => {
  const { data } = await getBanner()
  return data
})

export const fetchHotDataAction = createAsyncThunk('hot', async (args, { dispatch }) => {
  const { data } = await getHotRecommend(8)
  return data
})

interface IRecommendState {
  banner: any[]
  hot: any[]
}

const initialState: IRecommendState = {
  banner: [],
  hot: [],
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBannersDataAction.fulfilled, (state, { payload }) => {
      state.banner = payload.banners
      console.log(state.banner)
    }),
      builder.addCase(fetchHotDataAction.fulfilled, (state, { payload }) => {
        state.hot = payload.result
        console.log(state.hot)
      })
  },
})

export default recommendSlice.reducer

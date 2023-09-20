import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner, getHotRecommend, getNewAlbum } from '@/services/modules/recommend'

export const fetchBannersDataAction = createAsyncThunk('banners', async () => {
  const { data } = await getBanner()
  return data
})

export const fetchHotDataAction = createAsyncThunk('hot', async (args, { dispatch }) => {
  const { data } = await getHotRecommend(8)
  return data
})

export const fetchNewAlbumAction = createAsyncThunk('new', async () => {
  const { data } = await getNewAlbum()
  return data
})

interface IRecommendState {
  banner: any[]
  hot: any[]
  newAlbum: any[]
}

const initialState: IRecommendState = {
  banner: [],
  hot: [],
  newAlbum: [],
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBannersDataAction.fulfilled, (state, { payload }) => {
      state.banner = payload.banners
      // console.log(state.banner)
    }),
      builder.addCase(fetchHotDataAction.fulfilled, (state, { payload }) => {
        state.hot = payload.result
        // console.log(state.hot)
      }),
      builder.addCase(fetchNewAlbumAction.fulfilled, (state, { payload }) => {
        state.newAlbum = payload.products
        console.log(state.newAlbum)
      })
  },
})

export default recommendSlice.reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner } from '@/services/modules/recommend'

export const fetchBannersDataAction = createAsyncThunk('banners', async () => {
  const { data } = await getBanner()
  return data
})

interface IRecommendState {
  banner: any[]
}

const initialState: IRecommendState = {
  banner: [],
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBannersDataAction.fulfilled, (state, { payload }) => {
      state.banner = payload.banners
      console.log(state.banner)
    })
  },
})

export default recommendSlice.reducer

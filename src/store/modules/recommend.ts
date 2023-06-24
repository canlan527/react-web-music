import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner } from '@/services/modules/recommend'

export const fetchBannersDataAction = createAsyncThunk('banners', async (args, { dispatch, getState }) => {
  const res = await getBanner()
  console.log(res.data)
  return res.data
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
})

export default recommendSlice.reducer

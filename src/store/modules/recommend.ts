import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner, getHotRecommend, getNewAlbum, getRankList } from '@/services/modules/recommend'

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

export const fetchRankListAction = createAsyncThunk('rank', async () => {
  const idList = [19723756, 3779629, 3778678, 2884035, 60198]
  const promiseFetchList: Promise<any>[] = []
  for (const id of idList) {
    promiseFetchList.push(getRankList(id))
  }
  return Promise.all(promiseFetchList).then((res) => {
    // map playlist
    const playlist = res.map((item) => item.data.playlist)
    return playlist
  })
})

interface IRecommendState {
  banner: any[]
  hot: any[]
  newAlbum: any[]
  rankList: any[]
}

const initialState: IRecommendState = {
  banner: [],
  hot: [],
  newAlbum: [],
  rankList: [],
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
        // console.log(state.newAlbum)
      }),
      builder.addCase(fetchRankListAction.fulfilled, (state, { payload }) => {
        state.rankList = payload
        console.log(state.rankList)
      })
  },
})

export default recommendSlice.reducer

import { getPlaylist } from '@/services/modules/playlist'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// thunk请求数据
export const fetchPlaylistAction = createAsyncThunk<void, number>('fetchPlaylist', async (page, { dispatch }) => {
  // page
  const limit = 28
  const offset = page === 0 ? 0 : (page - 1) * limit
  const { data } = await getPlaylist({ offset: offset })
  dispatch(changePlaylistAction(data.playlists))
})

// 接口
interface IPlaylistState {
  playlist: any[]
}

// state
const initialState: IPlaylistState = {
  playlist: [],
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    changePlaylistAction(state, { payload }) {
      state.playlist = payload
    },
  },
})

export const { changePlaylistAction } = playlistSlice.actions

export default playlistSlice.reducer

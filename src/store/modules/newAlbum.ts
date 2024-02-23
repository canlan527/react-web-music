import { getAllNewAlbum, getNewAlbum } from '@/services/modules/newAlbum'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootType } from '..'

// react-thunk state 的类型
interface IThunkState {
  state: RootType
}

// 获取新碟上架数据
export const fetchNewAlbumListAction = createAsyncThunk('newAlbumList', async (args, { dispatch }) => {
  const { data } = await getNewAlbum()
  dispatch(changeNewAlbumListAction(data.albums))
})

// 获取全部新碟
export const fetchAllNewAlbumListAction = createAsyncThunk<void, number, IThunkState>('allNewAlbumList', async (page, { dispatch, getState }) => {
  // page
  const limit = 35
  const offset = page !== 0 ? (page - 1) * limit : 0
  const { data } = await getAllNewAlbum({ offset: offset })
  // const oldlist = getState().newAlbum.newAlbumList
  // const newlist = [...oldlist, ...data.albums]
  // dispatch(changeNewAlbumListAction(newlist))

  // page

  dispatch(changeNewAlbumListAction(data.albums))
})

interface INewAlbum {
  newAlbumList: any[]
}

const initialState: INewAlbum = {
  newAlbumList: [],
}

const newAlbumSlice = createSlice({
  name: 'newAlbum',
  initialState,
  reducers: {
    changeNewAlbumListAction(state, { payload }) {
      state.newAlbumList = payload
    },
  },
})

export const { changeNewAlbumListAction } = newAlbumSlice.actions

export default newAlbumSlice.reducer

import { getRadio } from '@/services/modules/radio'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootType } from '..'

// IStateThunk
interface IStateThunk {
  state: RootType
}

// 获取radio数据
export const fetchRadioAction = createAsyncThunk<void, number, IStateThunk>('radiolist', async (page, { dispatch, getState }) => {
  // 获取limit
  // const limit = getState().radio.limit
  const limit = 28
  const offset = page !== 0 ? (page - 1) * limit : 0
  // 发送请求
  const { data } = await getRadio({ offset })
  // dispatch数据
  dispatch(changeRadiolistAction(data.djRadios))
})

// state接口
interface IRadioState {
  radiolist: any[]
  limit: number
}

// 初始数据
const initialState: IRadioState = {
  radiolist: [],
  limit: 28,
}

const radioSlice = createSlice({
  name: 'radio',
  initialState,
  reducers: {
    changeRadiolistAction(state, { payload }) {
      state.radiolist = payload
    },
  },
})

// 导出reducers
export const { changeRadiolistAction } = radioSlice.actions

export default radioSlice.reducer

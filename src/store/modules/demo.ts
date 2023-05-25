import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  counter: number
  direction: 'left' | 'right' | 'up' | 'down'
}
// 单独提取出来initialState，可以指定里面复杂变量的类型
const initialState: IState = {
  counter: 100,
  direction: 'left',
}

const DemoSlice = createSlice({
  initialState,
  name: 'Demo',
  reducers: {
    changeCounterAction(state, { payload }: PayloadAction<number>) {
      state.counter += payload
    },
  },
})

export const { changeCounterAction } = DemoSlice.actions

export default DemoSlice.reducer

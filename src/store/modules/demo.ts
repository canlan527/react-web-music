import { createSlice } from '@reduxjs/toolkit'

const DemoSlice = createSlice({
  initialState: {
    counter: 100,
  },
  name: 'Demo',
  reducers: {
    changeCounterAction(state, { payload }) {
      state.counter += payload
    },
  },
})

export const { changeCounterAction } = DemoSlice.actions

export default DemoSlice.reducer

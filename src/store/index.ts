import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from 'react-redux'
import DemoSlice from './modules/demo'
import recommendSlice from './modules/recommend'
import playerSlice from './modules/player'

const store = configureStore({
  reducer: {
    demo: DemoSlice,
    recommend: recommendSlice,
    player: playerSlice
  },
})
export type RootType = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const appShallowEqual = shallowEqual

export default store

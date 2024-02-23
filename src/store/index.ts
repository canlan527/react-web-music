import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from 'react-redux'
import DemoSlice from './modules/demo'
import recommendSlice from './modules/recommend'
import playerSlice from './modules/player'
import singerSlice from './modules/singer'
import newAlbumSlice from './modules/newAlbum'
import radioSlice from './modules/radio'
import playlistSlice from './modules/playlist'

const store = configureStore({
  reducer: {
    demo: DemoSlice,
    recommend: recommendSlice,
    player: playerSlice,
    singer: singerSlice,
    newAlbum: newAlbumSlice,
    radio: radioSlice,
    playlist: playlistSlice,
  },
})
export type RootType = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const appShallowEqual = shallowEqual

export default store

import type { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Focus = lazy(() => import('@/views/focus'))
const Mine = lazy(() => import('@/views/mine'))
// Discover子页面
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const RadioStation = lazy(() => import('@/views/discover/c-views/radio-station'))
const Singer = lazy(() => import('@/views/discover/c-views/singer'))
const NewAlbum = lazy(() => import('@/views/discover/c-views/new-album'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        element: <Recommend />,
      },
      {
        path: '/discover/ranking',
        element: <Ranking />,
      },
      {
        path: '/discover/songs',
        element: <Songs />,
      },
      {
        path: '/discover/radioStation',
        element: <RadioStation />,
      },
      {
        path: '/discover/singer',
        element: <Singer />,
      },
      {
        path: '/discover/newAlbum',
        element: <NewAlbum />,
      },
    ],
  },
  {
    path: '/focus',
    element: <Focus />,
  },
  {
    path: '/mine',
    element: <Mine />,
  },
]

export default routes

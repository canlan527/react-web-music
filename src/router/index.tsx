import type { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// demo 页面
import Demo from '@/views/demo'
import Home from '@/views/home'
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
    element: <Navigate to="/home/discover/recommend" />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home/discover',
        element: <Discover />,
        children: [
          {
            path: '/home/discover',
            element: <Navigate to="/home/discover/recommend" />,
          },
          {
            path: '/home/discover/recommend',
            element: <Recommend />,
          },
          {
            path: '/home/discover/ranking',
            element: <Ranking />,
          },
          {
            path: '/home/discover/songs',
            element: <Songs />,
          },
          {
            path: '/home/discover/radioStation',
            element: <RadioStation />,
          },
          {
            path: '/home/discover/singer',
            element: <Singer />,
          },
          {
            path: '/home/discover/newAlbum',
            element: <NewAlbum />,
          },
        ],
      },
      {
        path: '/home/focus',
        element: <Focus />,
      },
      {
        path: '/home/mine',
        element: <Mine />,
      },
    ],
  },
  {
    path: '/demo',
    element: <Demo />,
  },
]

export default routes

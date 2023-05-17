import type { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Focus = lazy(() => import('@/views/focus'))
const Mine = lazy(() => import('@/views/mine'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
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

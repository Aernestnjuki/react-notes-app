import React from 'react'
import MainLayout from './layout/MainLayout'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

const App = () => {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<NotesListPage />} />
        <Route path='/note/:id' element={<NotePage />} />
      </Route>
    )
  )

  return (
    <div className="container dark">
      <div className="app">
        <RouterProvider router={route}/>
      </div>
    </div>
  )
}

export default App

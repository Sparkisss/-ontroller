import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/UI/header/Header'
import MainPage from './pages/MainPage'
import AuthPage from './pages/AuthPage'
import InfoPage from './pages/InfoPage'
import './App.css'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/main',
    element: <MainPage/>,    
  },
  {
    path: '/info',
    element: <InfoPage/>,
    children: [
      {
        path: '/info/:id',
        element: <InfoPage/>
      }
    ]
  },
  {
    path: '/main/:id',
    element: <MainPage/>,    
  },
]);

function App() {

  return (    
    <>
      <Header/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

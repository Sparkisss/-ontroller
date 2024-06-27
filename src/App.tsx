// src/App.tsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';
import InfoPage from './pages/InfoPage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthPage />,
        errorElement: <NotFound />,
    },
    {
        path: '/main',
        element: <MainPage />,
        children: [
          {
            path: '/main/:id',
            element: <MainPage />,
          },
      ],
    },
    {
        path: '/info',
        element: <InfoPage />,
        children: [
            {
                path: '/info/:id',
                element: <InfoPage />,
            },
        ],
    },
]);

function App() {
    return (
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    );
}

export default App;


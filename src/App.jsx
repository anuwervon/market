import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import Layout from './layout/layout'
import SignUp from './pages/Sign Up/sign up'
import Products from './pages/products/products.'
import Info from './pages/info/info'
import Cart from './pages/cart/cart'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Account from './pages/account/account'

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <SignUp />,index:true },
                { path: '/home', element: <Home /> },
                { path: '/products', element: <Products /> },
                { path: '/info/:id', element: <Info /> },
                { path: '/cart', element: <Cart /> },
                { path: '/about', element: <About /> },
                { path: '/account', element: <Account /> },
                { path: '/contact', element: <Contact /> },
            ]
        }
    ])
    return <RouterProvider router={router} />
}

export default App
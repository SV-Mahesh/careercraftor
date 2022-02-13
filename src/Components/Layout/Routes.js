import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'

export default function Routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' component={Navbar} />
            </Routes>
        </BrowserRouter>
    )
}

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default WebsiteLayout
import React from 'react'
import { Header } from '.'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout

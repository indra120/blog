import React, { createContext, useState, useEffect } from 'react'
import { categories } from '../interfaces'
import { getCategories } from '../services'
import { Header } from '.'

export const Categories = createContext<categories>([])

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<categories>([])

  useEffect(() => {
    getCategories().then((category) => setCategories(category))
  }, [])
  
  return (
    <Categories.Provider value={categories}>
      <Header />
      {children}
    </Categories.Provider>
  )
}

export default Layout

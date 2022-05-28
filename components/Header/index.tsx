import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { getCategories } from '../../services'
import { categories } from '../../interfaces'
import style from './Header.module.scss'

const Header: React.FC = () => {
  const [categories, setCategories] = useState<categories>([])

  useEffect(() => {
    getCategories().then((category) => setCategories(category))
  }, [])

  return (
    <AppBar className={style['app-bar']}>
      <Container>
        <Toolbar>
          <Typography variant="h1" className={style['logo']}>
            <Link href="/">Ryzenix</Link>
          </Typography>

          <Box
            sx={{ display: { xs: 'none', md: 'flex' } }}
            className={style['nav-menu']}
          >
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

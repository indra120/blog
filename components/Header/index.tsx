import React, { useContext } from 'react'
import Link from 'next/link'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { Categories } from '../Layout'
import style from './Header.module.scss'

const Header: React.FC = () => {
  const categories = useContext(Categories)

  return (
    <>
      <AppBar className={style['app-bar']}>
        <Container>
          <Toolbar sx={{ px: '0px !important' }}>
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
      <Toolbar></Toolbar>
    </>
  )
}

export default Header

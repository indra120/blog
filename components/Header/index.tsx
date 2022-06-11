import React, { useContext, useState } from 'react'
import Link from 'next/link'
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { Categories } from '../Layout'
import style from './Header.module.scss'
import { Menu } from '@mui/icons-material'
import { MobileNavMenu } from '..'

const Header: React.FC = () => {
  const categories = useContext(Categories)
  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <AppBar className={style['app-bar']}>
        <Container>
          <Toolbar sx={{ px: '0px !important', justifyContent: 'center' }}>
            <IconButton
              color="inherit"
              sx={{ display: { md: 'none' }, position: 'absolute', left: '0' }}
              onClick={() => setDrawer((prev) => !prev)}
            >
              <Menu sx={{ fontSize: '2rem' }} />
            </IconButton>

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

      <Toolbar />

      <MobileNavMenu open={drawer} onClose={() => setDrawer(false)} />
    </>
  )
}

export default Header

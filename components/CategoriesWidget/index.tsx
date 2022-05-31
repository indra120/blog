import { Card, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useContext } from 'react'
import { ActionButton } from '..'
import { Categories } from '../Layout'
import style from './CategoriesWidget.module.scss'

const CategoriesWidget = () => {
  const categories = useContext(Categories)

  return (
    <Card className={style['card']}>
      <Typography variant="h3" className={style['widget-title']}>
        Categories
      </Typography>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <ActionButton Icon={false} className={style['link']}>
            {category.name}
          </ActionButton>
        </Link>
      ))}
    </Card>
  )
}

export default CategoriesWidget

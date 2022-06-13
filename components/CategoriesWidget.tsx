import { Card, Typography } from '@mui/material'
import Link from 'next/link'
import { FC, useContext } from 'react'
import { ActionButton } from '.'
import { Categories } from './Layout'

const CategoriesWidget: FC = () => {
  const categories = useContext(Categories)

  return (
    <Card className="categories-widget">
      <Typography variant="h3" className="widget-title">
        Categories
      </Typography>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <ActionButton Icon={false} className="link">
            {category.name}
          </ActionButton>
        </Link>
      ))}
    </Card>
  )
}

export default CategoriesWidget

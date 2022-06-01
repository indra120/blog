import { Grid } from '@mui/material'
import React from 'react'
import StickyBox from 'react-sticky-box'
import { CategoriesWidget, RecommendationWidget } from '../components'
import { recommendationWidget } from '../interfaces'

const Sidebar:React.FC<recommendationWidget> = ({categories,slug}) => {
  return (
    <StickyBox offsetTop={96}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <RecommendationWidget categories={categories} slug={slug} />
        </Grid>
        <Grid item>
          <CategoriesWidget />
        </Grid>
      </Grid>
    </StickyBox>
  )
}

export default Sidebar

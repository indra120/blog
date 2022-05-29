import { Box, Button } from '@mui/material'
import React from 'react'
import style from './ActionButton.module.scss'

const ActionButton: React.FC<{ children: React.ReactNode; Icon: any }> = ({
  children,
  Icon,
  ...props
}) => (
  <Button variant="contained" className={style['action-button']} {...props}>
    {children}
    <Box className={style['icon-box']}>
      <Icon />
    </Box>
  </Button>
)

export default ActionButton

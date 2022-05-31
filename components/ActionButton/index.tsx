import { Box, Button } from '@mui/material'
import React from 'react'
import style from './ActionButton.module.scss'

const ActionButton: React.FC<{
  children: React.ReactNode
  className: string
  Icon: any
}> = ({ children, className, Icon, ...props }) => (
  <Button
    variant="contained"
    className={`${style['action-button']} ${className}`}
    sx={{ p: `${Icon ? '6px 7.5px 6px 15px' : '6px 7.5px'}` }}
    {...props}
  >
    {children}
    {Icon && (
      <Box className={style['icon-box']}>
        <Icon />
      </Box>
    )}
  </Button>
)

export default ActionButton

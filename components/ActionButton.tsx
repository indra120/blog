import { Box, Button } from '@mui/material'
import { FC } from 'react'

const ActionButton: FC<{
  children: React.ReactNode
  className?: string
  Icon: any
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}> = ({ children, className, Icon, onClick }) => (
  <Button
    variant="contained"
    className={`action-button ${className}`}
    sx={{ p: `${Icon ? '6px 7.5px 6px 15px' : '6px 7.5px'}` }}
    onClick={onClick}
  >
    {children}
    {Icon && (
      <Box className="icon-box">
        <Icon />
      </Box>
    )}
  </Button>
)

export default ActionButton

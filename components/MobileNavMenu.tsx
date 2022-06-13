import { Box, Drawer, List, ListItem, ListItemButton } from '@mui/material'
import Link from 'next/link'
import { FC, useContext } from 'react'
import { Categories } from './Layout'

const MobileNavMenu: FC<{ onClose: () => void; open: boolean }> = ({
  onClose,
  open,
}) => {
  const categories = useContext(Categories)

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      sx={{ '.MuiPaper-root': { top: '4rem' } }}
    >
      <Box>
        <List>
          {categories.map((category) => (
            <ListItem key={category.slug}>
              <ListItemButton
                sx={{
                  a: {
                    fontSize: '1.125rem',
                    color: '#f57342',
                    display: 'block',
                    mx: 'auto',
                  },
                }}
              >
                <Link href={`/category/${category.slug}`}>{category.name}</Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default MobileNavMenu

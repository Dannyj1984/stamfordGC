import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = `${window.innerWidth / 2}px`;
const navItems = [
    {title: 'Golf', path: '/golf'},
    {title: 'Course', path: '/course'},
    {title: 'Functions', path: '/functions'},
    {title: 'Weddings', path: '/weddings'},
    {title: 'Contact', path: '/contact'}
];


export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{display: 'flex', flexDirection:'column'}}>
        <img src='/img/stamford.png' alt='logo' height={80} width={80} style={{alignSelf:'center'}}/>
      <Divider />
      <List sx={{alignSelf:'center'}}>
        {navItems.map(({title, path}) => (
          <ListItem 
          component={NavLink}
          to={path}
          key={path}
          sx={ {
            color: 'text.secondary',
            textDecoration: 'none',
            typography: 'h4',
                '&:hover': {
                    color : 'grey.500'
                },
                '&.active': {
                    color: 'text.secondary'
                }
        }}
          >{title}</ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height: '15vh' }}>
      <AppBar component="nav" sx={{backgroundColor: 'orange'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton>
            <ListItem component={NavLink} to='/'>
                <img src='/img/stamford.png' alt='logo' height={80} width={80}/> 
            </ListItem>
          </IconButton>
          
          <Box sx={{ display: { xs:'none', sm: 'none', md: 'flex' } }}>
            {navItems.map(({title, path}) => (
              <ListItem 
              component={NavLink}
              to={path}
              key={path}
              sx={ {
                color: 'white', 
                fontSize:'35px', 
                justifyContent:'space-between',
                typography: 'h4',
                '&:hover': {
                    color : 'grey.500'
                },
                '&.active': {
                    color: 'text.secondary'
                }
              }}
              >{title}</ListItem>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sx: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
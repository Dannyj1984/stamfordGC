import { Box, Button, Divider, List, ListItem, Paper, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useState } from "react";
import { Container } from "@mui/system";

const navItems = [
    {title: 'Green Fees', path: '/fees'},
    {title: 'Membership', path: '/membership'},
    {title: 'Societies', path: '/societies'},
    {title: 'Special Offers', path: '/offers'},
    {title: 'Opens', path: '/opens'},
    {title: 'Course Information', path: '/course'}
];
    

export default function GolfPage() {

    const [showLinks, setShowLinks] = useState(false);
    const [mobile, setMobile] = useState(false);

    function resizeListener() {
        if (window.innerWidth <= 900) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    window.addEventListener('resize', resizeListener);

    const imgStyle = {
        background: `url(/img/course4.jpg) no-repeat`,
        backgroundSize: '100% 100%',
        maxHeight: '400px'
    }

    const showLinksFunc = () => {
        setShowLinks(!showLinks)
    }
    return (
        <>
        <Box component='img' style={imgStyle} sx={{height:'40vh', width:'100%', objectFit: 'fill'}}>
        </Box>
        {!mobile &&
        <Box sx={{ display: { xs:'none', sm: 'none', md: 'flex' } }}>
        {navItems.map(({title, path}) => (
          <ListItem 
          component={NavLink}
          to={path}
          key={path}
          sx={ {
            color: 'black',  
            justifyContent:'space-around',
            typography: 'h6',
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
        }
        {mobile &&
        <Box component='nav' sx={{height: '5vh'}}>
            <Button 
                onClick={showLinksFunc} 
                variant="outlined" 
                sx={{width:'100%', 
                backgroundColor: 'lightgrey', 
                color:'black'}}>Visitors
                <span 
                    style={{paddingLeft:'10px'}}
                >
                    <ArrowDropDownCircleIcon />
                </span>
            </Button>
        </Box>}
        {showLinks &&
        <Box >
            <Container>
                <List>
                    <ListItem component={NavLink} color='text.secondary' to='/fees' sx={{textDecoration:'none', color: 'black'}}>Green fees</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/membership' sx={{textDecoration:'none', color: 'black'}}>Membership</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/societies' sx={{textDecoration:'none', color: 'black'}}>Societies</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/course' sx={{textDecoration:'none', color: 'black'}}>Course Information</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/opens' sx={{textDecoration:'none', color: 'black'}}>Opens</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/offers' sx={{textDecoration:'none', color: 'black'}}>Special Offers</ListItem>
                </List> 
            </Container>
        </Box>   
        }
        <Paper elevation={4} sx={{height: '85vh'}}>
            
        </Paper>
        <Divider />
        <Paper elevation={4} sx={{height: '85vh'}}>
            
        </Paper>
        </>
    )
}
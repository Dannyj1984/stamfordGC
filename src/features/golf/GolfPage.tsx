import { Box, Button, Divider, List, ListItem, Paper, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useState } from "react";
import { Container } from "@mui/system";
import MembershipTable from "./MembershipTable";

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

    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();

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
        <Paper elevation={4} sx={{ height: '30vh', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingTop:'3rem'}}>
            <img src="/img/stamford.webp" alt="logo" width={80} height={80}/>
            <Typography variant='h5'>We offer a warm welcome to visiting parties of any size</Typography>
        </Paper>
        <Divider />
        <Paper  elevation={4} sx={{backgroundColor:'#ebebeb', height: '85vh', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center'}}>
            <Typography variant='h4'>Green Fees</Typography>
            <Paper elevation={4} sx={{width: '90%', marginTop: '10px', padding:'10px'}}>
                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start', backgroundColor:'white', alignItems:'center'}}>
                    <Typography variant="h6">Winter 2022/23 Green Fees</Typography>
                    <Typography sx={{fontSize:'1rem'}}>1st Nov - 31st March</Typography>
                </Box>
                <Divider />
                <Box sx={{backgroundColor:'white'}}>
                    <Typography >Monday - £20 per round (Clubhouse not open)</Typography>
                    <Typography >Tuesday - Friday £29 per round</Typography>
                    <Typography >Saturday - £30 per round (After 1:30pm)</Typography>
                    <Typography >Sunday - £30 per round (After 10am)</Typography>
                </Box>
            </Paper>

            <Paper sx={{width: '90%', marginTop: '10px', padding:'10px'}}>
                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start', backgroundColor:'white', alignItems:'center'}}>
                    <Typography variant="h6">Summer 2023 Green Fees</Typography>
                </Box>
                <Divider />
                <Box sx={{backgroundColor:'white'}}>
                    <Typography >Monday - £25 per round (Clubhouse not open)</Typography>
                    <Typography >Tuesday - Friday £35 per round</Typography>
                    <Typography >Saturday - £40 per round (After 1:30pm)</Typography>
                    <Typography >Sunday - £40 per round (After 10am)</Typography>
                </Box>
            </Paper>
            <ListItem 
                sx={{justifyContent:'center'}}
                component={NavLink} 
                to={{pathname: `https://stamford.hub.clubv1.com/visitors/TeeSheet?date=${year}-${month+1}-${day}`}} target="_blank">
                    <Button variant="contained">Online Booking</Button>
                </ListItem>
            
        </Paper>
        <Paper  elevation={4} sx={{backgroundColor:'#c8d8ce',  display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingBottom: '20px'}}>
            <Typography variant='h4'>Membership</Typography>

            <Paper sx={{width: '90%', marginTop: '10px', padding:'10px'}}>
                <Typography variant="h6">Benefits:</Typography>
                <Typography>We run a full program of competitions. Our main competition day is Saturday which has a full summer program including medal rounds and our Majors. We also have competitions on Sunday morning, as well as a weekly Wednesday competition throughout the summer. Our competition start sheet allows new members to quickly meet others. Tee bookings are made in 30 minute time slots, with a draw being made to to decide on the groups.</Typography>
                <br />
                <Typography>We have a strong seniors section with dedicated competitions times twice a week and we have a Tuesday morning roll up which is open to all members.</Typography>
                <br />
                <Typography>Our lady members also have competitions during the week.</Typography>
                <br />
                <Typography>We have a friendly membership and our pro Mark will be happy to assist in finding you a pairing.</Typography>
                <br />
                <Typography>From January 2023, Stamford Golf Club share a Reciprocal agreement for our members at other courses. Including Chorlton, Disley and Bury Conditions apply* <br />
We are encouraging participation in golf for people of all ages and abilities. We have membership packages that are designed to suite your needs.</Typography>
                <br />
                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start', backgroundColor:'white', alignItems:'center'}}>
                    <Typography variant="h5">Membership Fees 2023</Typography>
                    <Typography variant="body1">Membership runs from 1st April - 31st March each year</Typography>

                </Box>
                <Divider />
                <MembershipTable />
            </Paper>
        </Paper>
        </>
    )
}
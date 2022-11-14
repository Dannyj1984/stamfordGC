import { Box, Button, Divider, List, ListItem, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@mui/system";
import MembershipTable from "./MembershipTable";
import ScrollToTop from "../../app/layout/ScrollToTop";
    

export default function GolfPage() {

    const [showLinks, setShowLinks] = useState(false);
    const [mobile, setMobile] = useState(false);
    const fees = useRef(null);
    const membership = useRef(null);
    const societies = useRef(null);
    const offers = useRef(null);
    const course = useRef(null);
    const opens = useRef(null);

    const scrollToSection = (elementRef: any) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 110,
            behavior: 'smooth'
        })
    }


    function resizeListener() {
        if (window.innerWidth <= 900) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    window.addEventListener('resize', resizeListener);

    function setScreenSize() {
        if(window.innerWidth <= 900) setMobile(true)
    }

    useEffect(() => {
        setScreenSize();
    }, [])

    const imgStyle = {
        background: `url(/img/course4.jpg) no-repeat`,
        backgroundSize: 'cover',
        maxHeight: 'auto',
        backgroundPosition: '25% 65%'
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
        <ScrollToTop />
        <Box component='img' style={imgStyle} sx={{height:'40vh', width:'100%', objectFit: 'fill'}}>
        </Box>
        {!mobile &&
        <Container >
            <List sx={{display: 'flex', flexDirection:'row'}}>
                <ListItem  color='text.secondary' onClick={() => scrollToSection(fees)} sx={{
                    textDecoration:'none', 
                    color: 'black', 
                    justifyContent:'space-around',
                    cursor:'pointer',
                    typography: 'h6',
                        '&:hover': {
                            color : 'grey.500'
                        },
                        '&.active': {
                            color: 'text.secondary'
                        }
            }}>Green fees</ListItem>
                <ListItem  color='text.secondary' onClick={() => scrollToSection(membership)} sx={{textDecoration:'none', color: 'black',justifyContent:'space-around',cursor:'pointer',
                    typography: 'h6',
                        '&:hover': {
                            color : 'grey.500'
                        },
                        '&.active': {
                            color: 'text.secondary'
                        }}}>Membership</ListItem>
                <ListItem  color='text.secondary' onClick={() => scrollToSection(societies)} sx={{textDecoration:'none', color: 'black',justifyContent:'space-around', cursor:'pointer',
                    typography: 'h6',
                        '&:hover': {
                            color : 'grey.500'
                        },
                        '&.active': {
                            color: 'text.secondary'
                        }}}>Societies</ListItem>
                <ListItem  color='text.secondary' onClick={() => scrollToSection(offers)}  sx={{textDecoration:'none', color: 'black',justifyContent:'space-around',cursor:'pointer',
                    typography: 'h6',
                        '&:hover': {
                            color : 'grey.500'
                        },
                        '&.active': {
                            color: 'text.secondary'
                        }}}>Special Offers</ListItem>
                <ListItem  color='text.secondary' onClick={() => scrollToSection(opens)}  sx={{textDecoration:'none', color: 'black',justifyContent:'space-around', cursor:'pointer',
                    typography: 'h6',
                        '&:hover': {
                            color : 'grey.500'
                        },
                        '&.active': {
                            color: 'text.secondary'
                        }}}>Opens</ListItem>
                <ListItem  color='text.secondary' onClick={() => scrollToSection(course)}  sx={{textDecoration:'none', color: 'black',justifyContent:'space-around', cursor:'pointer',
                    typography: 'h6',
                        '&:hover': {
                            color : 'grey.500'
                        },
                        '&.active': {
                            color: 'text.secondary'
                        }}}>Course Information</ListItem>
            </List> 
        </Container>
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
                    <ListItem  color='text.secondary' onClick={() => scrollToSection(fees)} sx={{textDecoration:'none', color: 'black'}}>Green fees</ListItem>
                    <ListItem  color='text.secondary' onClick={() => scrollToSection(membership)} sx={{textDecoration:'none', color: 'black'}}>Membership</ListItem>
                    <ListItem  color='text.secondary' onClick={() => scrollToSection(societies)} sx={{textDecoration:'none', color: 'black'}}>Societies</ListItem>
                    <ListItem  color='text.secondary' onClick={() => scrollToSection(offers)}  sx={{textDecoration:'none', color: 'black'}}>Special Offers</ListItem>
                    <ListItem  color='text.secondary' onClick={() => scrollToSection(opens)}  sx={{textDecoration:'none', color: 'black'}}>Opens</ListItem>
                    <ListItem  color='text.secondary' onClick={() => scrollToSection(course)}  sx={{textDecoration:'none', color: 'black'}}>Course Info</ListItem>
                </List> 
            </Container>
        </Box>   
        }
        <Paper elevation={4} sx={{ height: '50vh', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingTop:'3rem', paddingLeft:'2em'}}>
            <img src="/img/stamford.webp" alt="logo" width={80} height={80}/>
            <Typography variant='h5' sx={{whiteSpace:'pre-line', paddingTop: '20px'}}>{`We offer a warm welcome to visiting parties of any size \n
            Bookings can be made via the online booking system or via the pro shop`}</Typography>
        </Paper>
        <Divider />

        {/* fees */}
        <div ref={fees}>
            <Paper  elevation={4} sx={{backgroundColor:'#ebebeb', height: '70vh', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center'}}>
                <Typography variant='h4'>Green Fees</Typography>
                <Paper elevation={4} sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
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
                <Paper sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
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
        </div>
        
        {/* Membership */}
        <div ref={membership}>
        <Paper  elevation={4} sx={{backgroundColor:'#c8d8ce',  display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingBottom: '20px'}}>
            <Typography variant='h4'>Membership</Typography>

            <Paper sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
                <Typography variant="subtitle2">To apply for membership please complete the <a href="/docs/application-form.doc" download>application form</a> and return to the pro shop</Typography>
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
        </div>
        <div ref={societies}>
        <Paper  elevation={4} sx={{backgroundColor:'#ebebeb',  display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingBottom: '20px'}}>
            <Typography variant='h4'>Societies</Typography>

            <Paper sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
                <Typography variant="h6">Bookings:</Typography>
                <Typography>Please see our ClubV1 booking page to book a tee time. Visitors are welcome at Stamford golf club every day of the week. Saturday morning is our member's competition day. Visitors are welcome in the afternoon and available tee times will be on ClubV1</Typography>
                <br />
                <Typography>If you have booked a tee time for one player, please be aware that other players may join you. If you have booked a tee time for a guest, you must have paid for him or her.</Typography>
                <br />
                <Typography>Please note - bookings which are cancelled on the day of play will not receive a refund.</Typography>
                
                <Divider />
            </Paper>
        </Paper>
        </div>
        <div ref={offers}>
        <Paper  elevation={4} sx={{backgroundColor:'#c8d8ce',  display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingBottom: '20px'}}>
            <Typography variant='h4'>Special Offers</Typography>

            <Paper sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
                <Typography variant="h6">Offers:</Typography>
                <Typography>Please see our ClubV1 booking page to book a tee time. Visitors are welcome at Stamford golf club every day of the week. Saturday morning is our member's competition day. Visitors are welcome in the afternoon and available tee times will be on ClubV1</Typography>
                <br />
                <Typography>If you have booked a tee time for one player, please be aware that other players may join you. If you have booked a tee time for a guest, you must have paid for him or her.</Typography>
                <br />
                <Typography>Please note - bookings which are cancelled on the day of play will not receive a refund.</Typography>
                
                <Divider />
            </Paper>
        </Paper>
        </div>
        <div ref={opens}>
        <Paper  elevation={4} sx={{backgroundColor:'#ebebeb',  display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingBottom: '20px'}}>
            <Typography variant='h4'>Opens</Typography>

            <Paper sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
                <Typography variant="h6">Opens:</Typography>
                <Typography>Please see our ClubV1 booking page to book a tee time. Visitors are welcome at Stamford golf club every day of the week. Saturday morning is our member's competition day. Visitors are welcome in the afternoon and available tee times will be on ClubV1</Typography>
                <br />
                <Typography>If you have booked a tee time for one player, please be aware that other players may join you. If you have booked a tee time for a guest, you must have paid for him or her.</Typography>
                <br />
                <Typography>Please note - bookings which are cancelled on the day of play will not receive a refund.</Typography>
                
                <Divider />
            </Paper>
        </Paper>
        </div>
        <div ref={course}>
        <Paper  elevation={4} sx={{backgroundColor:'#c8d8ce',  display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingBottom: '20px'}}>
            <Typography variant='h4'>Course Information</Typography>

            <Paper sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
                <Typography variant="h6">Course Information:</Typography>
                <Typography>Please see our ClubV1 booking page to book a tee time. Visitors are welcome at Stamford golf club every day of the week. Saturday morning is our member's competition day. Visitors are welcome in the afternoon and available tee times will be on ClubV1</Typography>
                <br />
                <Typography>If you have booked a tee time for one player, please be aware that other players may join you. If you have booked a tee time for a guest, you must have paid for him or her.</Typography>
                <br />
                <Typography>Please note - bookings which are cancelled on the day of play will not receive a refund.</Typography>
                
                <Divider />
            </Paper>
        </Paper>
        </div>
        </>
    )
}
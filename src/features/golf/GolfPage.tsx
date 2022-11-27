import { Box, Button, Divider, List, ListItem, Modal, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useEffect, useRef, useState } from "react";
import { Container } from "@mui/system";
import MembershipTable from "./MembershipTable";
import ScrollToTop from "../../app/layout/ScrollToTop";
import './golf.css';
import ScoreCardModal from "../course/ScoreCardModal";
    

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
            top: elementRef.current.offsetTop - 205,
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
        <Container className='mini-nav-bar' >
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
        <Box className='mini-nav-bar' component='nav' sx={{height: '5vh'}}>
            <Button 
                onClick={showLinksFunc} 
                variant="outlined" 
                sx={{width:'100%', 
                backgroundColor: 'lightgrey', 
                color:'black'}}>Visitors
                <span 
                    style={{paddingLeft:'10px'}}
                >
                    {!showLinks &&
                        <ArrowCircleDownIcon />
                    }
                    {showLinks &&
                        <ArrowCircleUpIcon />
                    }
                    
                </span>
            </Button>
        </Box>}
        {showLinks &&
        <Box sx={{position:' sticky', top:'151px', paddingTop: '10px', zIndex: 1, backgroundColor: 'lightgrey'}}>
            
                <List sx={{backgroundColor: 'lightgrey'}}>
                    <ListItem  color='text.secondary' onClick={() => scrollToSection(fees)} sx={{textDecoration:'none', color: 'black'}}>Green fees</ListItem>
                    <ListItem  color='text.secondary' onClick={() => scrollToSection(membership)} sx={{textDecoration:'none', color: 'black'}}>Membership</ListItem>
                    <ListItem  color='text.secondary' onClick={() => scrollToSection(societies)} sx={{textDecoration:'none', color: 'black'}}>Societies</ListItem>
                    <ListItem  color='text.secondary' onClick={() => scrollToSection(offers)}  sx={{textDecoration:'none', color: 'black'}}>Special Offers</ListItem>
                    <ListItem  color='text.secondary' onClick={() => scrollToSection(opens)}  sx={{textDecoration:'none', color: 'black'}}>Opens</ListItem>
                    <ListItem  color='text.secondary' onClick={() => scrollToSection(course)}  sx={{textDecoration:'none', color: 'black'}}>Course Info</ListItem>
                </List> 
        </Box>   
        }
        <Paper elevation={4} sx={{ display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', py:'3rem'}}>
            <img src="/img/stamford.webp" alt="logo" width={80} height={80}/>
            <Typography variant='h5' sx={{whiteSpace:'pre-line', paddingTop: '20px'}}>{`We offer a warm welcome to visiting parties of any size \n
            Bookings can be made via the online booking system or via the pro shop`}</Typography>
        </Paper>
        <Divider />

        {/* fees */}
        <div ref={fees}>
            <Paper  elevation={4} sx={{backgroundColor:'#ebebeb', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingTop: '10px'}}>
                <Typography variant='h2'>Green Fees</Typography>
                <Typography sx={{fontSize:'1rem'}}>*Offers are available for group bookings, please contact the pro shop</Typography>
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start',  alignItems:'center', px: 4, backgroundColor: 'blanchedalmond'}}>
                        <Typography variant="h4">Winter 2022/23 Green Fees</Typography>
                        <Typography sx={{fontSize:'1rem'}}>1st Nov - 31st March</Typography>
                    </Box>
                    <Divider />
                    <Box >
                        <Typography >Monday - £15 per round (Clubhouse not open)</Typography>
                        <Typography >Tuesday - Friday £15 per round</Typography>
                        <Typography >Saturday - £15 per round (After 1:30pm)</Typography>
                        <Typography >Sunday - £15 per round (After 10am)</Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start',  alignItems:'center', marginTop:'20px', px: 4, backgroundColor: 'blanchedalmond'}}>
                        <Typography variant="h4">Summer 2023 Green Fees</Typography>
                        <Typography sx={{fontSize:'1rem'}}>1st April - 31st October</Typography>
                    </Box>
                    <Divider variant='fullWidth' />
                    <Box >
                        <Typography >Monday - £25 per round (Clubhouse not open)</Typography>
                        <Typography >Tuesday - Friday £35 per round</Typography>
                        <Typography >Saturday - £40 per round (After 1:30pm)</Typography>
                        <Typography >Sunday - £40 per round (After 10am)</Typography>
                    </Box>
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
        <Paper  elevation={4} sx={{backgroundColor:'#c8d8ce',  display:'flex', paddingTop: '10px', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingBottom: '20px'}}>
            <Typography variant='h4'>Membership</Typography>

            <Box sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
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
            </Box>
        </Paper>
        </div>
        <div ref={societies}>
        <Paper  elevation={4} sx={{backgroundColor:'#ebebeb',  display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingBottom: '20px'}}>
            <Typography variant='h4'>Societies</Typography>

            <Box sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
                <Typography variant="h6">Bookings:</Typography>
                <Typography>Please see our ClubV1 booking page to book a tee time. Visitors are welcome at Stamford golf club every day of the week. Saturday morning is our member's competition day. Visitors are welcome in the afternoon and available tee times will be on ClubV1</Typography>
                <br />
                <Typography>If you have booked a tee time for one player, please be aware that other players may join you. If you have booked a tee time for a guest, you must have paid for him or her.</Typography>
                <br />
                <Typography>Please note - bookings which are cancelled on the day of play will not receive a refund.</Typography>
                
                <Divider />
            </Box>
        </Paper>
        </div>
        <div ref={offers}>
        <Paper  elevation={4} sx={{backgroundColor:'#c8d8ce',  display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingBottom: '20px'}}>
            <Typography variant='h4'>Special Offers</Typography>

            <Box sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
                <Typography variant="h6">Offers:</Typography>
                <Typography>Please see our ClubV1 booking page to book a tee time. Visitors are welcome at Stamford golf club every day of the week. Saturday morning is our member's competition day. Visitors are welcome in the afternoon and available tee times will be on ClubV1</Typography>
                <br />
                <Typography>If you have booked a tee time for one player, please be aware that other players may join you. If you have booked a tee time for a guest, you must have paid for him or her.</Typography>
                <br />
                <Typography>Please note - bookings which are cancelled on the day of play will not receive a refund.</Typography>
                
                <Divider />
            </Box>
        </Paper>
        </div>
        <div ref={opens}>
        <Paper  elevation={4} sx={{backgroundColor:'#ebebeb',  display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingBottom: '20px'}}>
            <Typography variant='h4'>Opens</Typography>

            <Box sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
                <Typography variant="h6">Opens:</Typography>
                <Typography>Please see our ClubV1 booking page to book a tee time. Visitors are welcome at Stamford golf club every day of the week. Saturday morning is our member's competition day. Visitors are welcome in the afternoon and available tee times will be on ClubV1</Typography>
                <br />
                <Typography>If you have booked a tee time for one player, please be aware that other players may join you. If you have booked a tee time for a guest, you must have paid for him or her.</Typography>
                <br />
                <Typography>Please note - bookings which are cancelled on the day of play will not receive a refund.</Typography>
                
                <Divider />
            </Box>
        </Paper>
        </div>
        <div ref={course}>
        <Paper  elevation={4} sx={{backgroundColor:'#c8d8ce',  display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingBottom: '20px'}}>
            <Typography variant='h4'>Course Information</Typography>

            <Box sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
                <Typography variant="h6">Course Information:</Typography>
                <Typography>Please see our ClubV1 booking page to book a tee time. Visitors are welcome at Stamford golf club every day of the week. Saturday morning is our member's competition day. Visitors are welcome in the afternoon and available tee times will be on ClubV1</Typography>
                <br />
                <Typography>If you have booked a tee time for one player, please be aware that other players may join you. If you have booked a tee time for a guest, you must have paid for him or her.</Typography>
                <br />
                <Typography>Please note - bookings which are cancelled on the day of play will not receive a refund.</Typography>
                
                <Divider />
            </Box>
        </Paper>
        </div>
        </>
    )
}
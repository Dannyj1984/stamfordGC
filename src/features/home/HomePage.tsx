import { Box, Divider, Paper, Typography } from "@mui/material";
import { useState } from "react";
import GolfCourse from "@mui/icons-material/GolfCourse";
import { Container } from "@mui/system";


export default function HomePage() {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    function resizeListener() {
        setInnerWidth(window.innerWidth);
    }

    window.addEventListener('resize', resizeListener);

    

    function getImage(innerWidth: number) {
        if (innerWidth > 500) return "url(/img/course4.jpg) no-repeat center center fixed"
        if (innerWidth <=500) return "url(/img/course3.jpg) no-repeat center center fixed"
        return "url(/img/course4.jpg) no-repeat center center fixed"
    }

    function getFontSize(innerWidth: number) {
        if (innerWidth > 500) return "70px"
        if (innerWidth <=500) return "40px"
        return "70px"
    }

    function getMargin(innerWidth: number) {
        if (innerWidth > 500) return "22vh"
        if (innerWidth <=500) return "10vh"
        return "40vh"
    }

    const style = {
        background: getImage(innerWidth),
        height: '100%'
    }

    const fontSize = {
        fontSize: getFontSize(innerWidth)
    }

    const margin = {
        marginTop: getMargin(innerWidth),
        width: '100%',
        paddingBottom: '5vh',
        marginBottom: '20vh',
        paddingLeft: '20px',
        paddingRight: '20px'
    }

    return (
        <>
        <Box style={style} sx={{height: '1000vh'}}>
            <Typography style={fontSize} align="center" sx={{color: 'white', paddingTop:'20px'}}>Welcome to Stamford Golf Club</Typography>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <span><GolfCourse sx={{color:"white", fontSize:'60px'}} /></span>
            </div>
            <Container>
                <div style={{display: 'flex', justifyContent:'center'}}>
                <Paper elevation={2} style={margin} sx={{opacity:'0.8'}}>
                    <div style={{display: 'flex', justifyContent:'center', paddingTop: '10px'}}>
                        <img src='/img/stamford.png' alt='logo' height={120} width={120}/>
                    </div>
                        <Typography variant='h5' color='text.secondary' sx={{ paddingBottom:'10px'}}>
                            Located at the foot of the pennines in Stalybridge, Stamford golf course offers fantastic views of the surrounding area.
                        </Typography>
                        <Typography variant='h6' color='text.secondary' sx={{ paddingTop:'20px'}}>
                            The challenging course layout is a test for golfers of all standards. The course has benefited from extensive work on the greens allowing us to play the full course all year round.
                        </Typography>

                        <Typography variant='h6' color='text.secondary' sx={{ paddingTop:'20px'}}>
                            For general enquiries please contact the Admin Manager on <a href='tel:01457 832126'>01457 832126</a> email <a href="mailto:admin@stamfordgolfclub.co.uk">admin@stamfordgolfclub.co.uk</a>
                        </Typography>
                </Paper>
            </div>
            </Container>
            
            <Divider />
        </Box>
        </>
    )
}
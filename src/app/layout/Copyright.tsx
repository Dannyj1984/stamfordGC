import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";



export default function Footer() {

    const [mobile, setMobile] = useState(false);


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
        background: `url(/img/clubhouse.jpeg) no-repeat`,
        backgroundSize: '100% 100%',
        maxHeight: 'auto'
    }

return (
    <>
        <Box style={imgStyle} 
            sx={{
                height: mobile ? `50vh` : '100vh', 
                width:'100%', 
                objectFit: 'cover', 
                display:'flex',
                justifyContent:'center'}}
            >
            
            <Typography 
                sx={{
                    backgroundColor: 'transparent', 
                    textAlign:' center',
                    whiteSpace: 'pre-line',
                    alignSelf:'flex-end'
                }}
            >
        {`Stamford Golf Club,  Huddersfield Road,  Stalybridge,  Cheshire, SK15 3PY 
                Copyright Stamford golf club ${new Date().getFullYear()}`}
            </Typography>
        </Box>
        
    </>
    
)
}
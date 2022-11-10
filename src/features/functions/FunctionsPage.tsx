import { Box, Typography } from "@mui/material";
import { useState } from "react";



export default function FunctionsPage() {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    function resizeListener() {
        setInnerWidth(window.innerWidth);
    }

    window.addEventListener('resize', resizeListener);

    function getTextSize(innerWidth: number) {
        if (innerWidth > 500) return "h3"
        if (innerWidth <=500) return "h5"
        return "h2"
    }


    return (
            <Box  sx={{width:'100%', display:'flex', justifyContent: 'space-between', alignContent:'center'}}>
                <Typography variant={getTextSize(innerWidth)} sx={{height: '100vh'}}>Functions page</Typography>
                <Typography variant={getTextSize(innerWidth)} sx={{height: '100vh'}}>Functions page</Typography>
            </Box>
    )   
}
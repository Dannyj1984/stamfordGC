import { Typography, Link, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



export default function MiniHeader() {
    const [showStatus, setShowStatus] = useState(false);

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

    const setStatus = () => {
        setShowStatus(!showStatus);
    }

    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();

    return (
        <>

        <Box sx={{display:'flex', backgroundColor: 'white', alignItems: 'center', justifyContent:'space-between', padding: '10px'}}>
            <Typography sx={{justifyContent:'flex-start', color:'orange', fontSize:mobile? '1rem' : '1.5rem'}}>
                Call us <Link sx={{textDecoration: 'none'}} href="tel:01457 832126">01457 832126</Link>
            </Typography>
            
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <ListItem sx={{color:'orange', fontSize:mobile? '1rem' : '1.5rem'}} component={NavLink} to={{pathname: `https://stamford.hub.clubv1.com/visitors/TeeSheet?date=${year}-${month+1}-${day}`}} target="_blank">{'visitor booking'.toUpperCase()}</ListItem>
              <ListItem onClick={setStatus} sx={{color:'orange', cursor:'pointer', fontSize:mobile ? '1rem' : '1.5rem'}}>{'Course status'.toUpperCase()}<span style={{
                top:'1px', marginLeft: '6px', marginRight: '5px', display:'inline-block', backgroundColor: '#00ff0c',
                boxShadow: '0 0 1px 2px #00ff0c', position:'relative', width:'10px', height: '10px', borderRadius:'50%'
              }}></span></ListItem>
            </Box>
            
        </Box>

        <Dialog
        open={showStatus}
        onClose={setStatus}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Course status"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Course fully open, winter mats in use on the fairway, no winter greens`}
          </DialogContentText>
          <DialogContentText>
            {`Last updated  ${day}-${month + 1}-${year} `}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
        </>
        
         
    )
}
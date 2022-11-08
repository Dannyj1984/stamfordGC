import { Typography, Link, Button, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";



export default function MiniHeader() {
    const [showStatus, setShowStatus] = useState(false);

    const setStatus = () => {
        setShowStatus(!showStatus);
    }

    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();

    return (
        <>
        <Box sx={{display:'flex', justifyContent:'space-between', backgroundColor: 'lightgrey', padding: '10px'}}>
                <Typography variant="h6">
                    Call us <Link href="tel:01457 832126">01457 832126</Link>
                </Typography>
                <Button onClick={setStatus} variant="contained">Course status</Button>
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
            {`Course fully open, winter mats in use on the fairway, no winter greens ${day}-${month + 1}-${year}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
        </>
        
         
    )
}
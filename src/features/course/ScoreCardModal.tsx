import { Button, Box } from "@mui/material"
import { useState } from "react";
import './course.css';


export default function ScoreCardModal() {
  const [display, setDisplay] = useState('none');

  const handleOpen = () => {
    if( display === 'none'){
      setDisplay('block');
    } else {
      setDisplay('none');
    }
    
  }

  const style = {
    position: 'relative',
    left: '2%',
    width: 360,
    height: 517,
    backgroundImage: 'url(./img/scorecard.png)',
    border: '2px solid #000',
    boxShadow: 24,
    display: {display},
    p: 4,
  };
  return (
    <>
    <Button variant='outlined' onClick={handleOpen}>{display === 'none' ? 'Score card' : 'Close'}</Button>
          <Box sx={style}>
              
          </Box>
    </>
  )
  
}
import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import ScoreCardModal from "./ScoreCardModal";

const holeDetailsInfo = [
  {
    id: 1,
    length: 400,
    par: 4,
    si: 7,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole4.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'
  },
  {
    id: 2,
    length: 420,
    par: 4,
    si: 1,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole5.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 3,
    length: 270,
    par: 4,
    si: 13,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole6.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 4,
    length: 400,
    par: 4,
    si: 9,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole4.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 5,
    length: 420,
    par: 4,
    si: 11,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole5.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 6,
    length: 270,
    par: 4,
    si: 18,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole6.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 7,
    length: 400,
    par: 4,
    si: 3,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole4.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 8,
    length: 420,
    par: 4,
    si: 15,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole5.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 9,
    length: 270,
    par: 4,
    si: 5,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole6.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 10,
    length: 400,
    par: 4,
    si: 14,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole4.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 11,
    length: 420,
    par: 4,
    si: 6,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole5.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 12,
    length: 270,
    par: 4,
    si: 4,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole6.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 13,
    length: 400,
    par: 4,
    si: 16,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole4.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 14,
    length: 420,
    par: 4,
    si: 10,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole5.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 15,
    length: 270,
    par: 4,
    si: 17,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole6.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 16,
    length: 400,
    par: 4,
    si: 12,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole4.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 17,
    length: 420,
    par: 4,
    si: 2,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole5.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 18,
    length: 270,
    par: 4,
    si: 7,
    video: '/videos/hole1.mp4',
    picUrl: '/img/hole6.webp',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
]

export default function CoursePage() {
  const [hole, setHole] = useState(1);

  const [holeDetails, setHoleDetails] = useState(holeDetailsInfo[0])

  const updateHole = (hole: number) => {
    setHole(hole);
    setHoleDetails(holeDetailsInfo[hole -1])
  }

  return (
    <>
      <Container>
      <ScoreCardModal />
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '1px solid grey'}}>
          <Grid container xs={12} sx={{flexWrap:'wrap'}}>
            <Grid item>
              <Button sx={{paddingLeft:'-10px'}} onClick={() => updateHole(1)}><Typography variant='h5'>1</Typography></Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(2)}><Typography variant='h5'>2</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(3)}><Typography variant='h5'>3</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(4)}><Typography variant='h5'>4</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(5)}><Typography variant='h5'>5</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(6)}><Typography variant='h5'>6</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(7)}><Typography variant='h5'>7</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(8)}><Typography variant='h5'>8</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(9)}><Typography variant='h5'>9</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(10)}><Typography variant='h5'>10</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(11)}><Typography variant='h5'>11</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(12)}><Typography variant='h5'>12</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(13)}><Typography variant='h5'>13</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(14)}><Typography variant='h5'>14</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(15)}><Typography variant='h5'>15</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(16)}><Typography variant='h5'>16</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(17)}><Typography variant='h5'>17</Typography></Button>
            </Grid>
            <Grid item>
              <Button  onClick={() => updateHole(18)}><Typography variant='h5'>18</Typography></Button>
            </Grid>
          </Grid>
        </Box>
        <Grid container  sx={{display: 'flex', flexDirection: 'row'}}>
          <Grid item sm={6} xs={12}>
            <Typography variant='h4' style={{padding: '10px'}}>Hole {hole}</Typography>
            <Typography variant='h6' style={{padding: '10px'}}>Length : {holeDetails.length}</Typography>
            <Typography variant='h6' style={{padding: '10px'}}>Par : {holeDetails.par}</Typography>
            <Typography variant="h6" style={{padding: '10px'}}>Stroke Index : {holeDetails.si}</Typography>
            <Typography variant='h6' style={{padding: '10px'}}>Hole details : {holeDetails.proInfo}</Typography>
          </Grid>
          <Grid item sm={6} xs={12} sx={{ padding: '20px'}}>
            <img src={holeDetails.picUrl} alt="hole" style={{maxWidth: '100%', maxHeight: '100%', backgroundSize: 'cover'}}/>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
            <Typography variant='h4'>{`Hole ${hole} flyover`}</Typography>
            <video width="100%" height="80%" controls>
              <source src={holeDetails.video} type="video/mp4"/>
              Sorry, your browser doesn't support embedded videos.
            </video>
          </Grid>
        </Grid>
      </Container>
      
    </>
    
    
  )
}
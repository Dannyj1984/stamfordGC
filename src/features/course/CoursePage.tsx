import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";

const holeDetailsInfo = [
  {
    id: 1,
    length: 400,
    par: 4,
    si: 7,
    video: 'https://m.youtube.com/watch?v=exuBxno6kbU&t=149s',
    picUrl: 'course3.jpg',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'
  },
  {
    id: 2,
    length: 420,
    par: 4,
    si: 1,
    picUrl: 'course4.jpg',
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 3,
    length: 270,
    par: 4,
    si: 13,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 4,
    length: 400,
    par: 4,
    si: 9,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 5,
    length: 420,
    par: 4,
    si: 11,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 6,
    length: 270,
    par: 4,
    si: 18,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 7,
    length: 400,
    par: 4,
    si: 3,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 8,
    length: 420,
    par: 4,
    si: 15,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 9,
    length: 270,
    par: 4,
    si: 5,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 10,
    length: 400,
    par: 4,
    si: 14,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 11,
    length: 420,
    par: 4,
    si: 6,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 12,
    length: 270,
    par: 4,
    si: 4,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 13,
    length: 400,
    par: 4,
    si: 16,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 14,
    length: 420,
    par: 4,
    si: 10,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 15,
    length: 270,
    par: 4,
    si: 17,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 16,
    length: 400,
    par: 4,
    si: 12,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 17,
    length: 420,
    par: 4,
    si: 2,
    proInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse assumenda praesentium modi tempora fugiat laudantium, quod eligendi ab minus. Labore quis ex autem id atque possimus vel a corporis.'

  },
  {
    id: 18,
    length: 270,
    par: 4,
    si: 7,
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

  const imgStyle = {
    background: `url(/img/${holeDetails.picUrl}) no-repeat`,
    backgroundSize: '100% 100%',  
    height: '100%',
    width: '100%'
}

  return (
    <>
      <Container>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h2">Hole {hole}</Typography>
          <Grid container>
            <Grid item>
              <Button onClick={() => updateHole(1)}>1</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(2)}>2</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(3)}>3</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(4)}>4</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(5)}>5</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(6)}>6</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(7)}>7</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(8)}>8</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(9)}>9</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(10)}>10</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(11)}>11</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(12)}>12</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(13)}>13</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(14)}>14</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(15)}>15</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(16)}>16</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(17)}>17</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => updateHole(18)}>18</Button>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Grid container  sx={{display: 'flex', flexDirection: 'row'}}>
          <Grid item sm={6} xs={12}>
            <Typography variant='h6' style={{padding: '20px'}}>Hole details : {holeDetails.proInfo}</Typography>
            <Typography variant='h6' style={{padding: '20px'}}>Hole : {holeDetails.id}</Typography>
            <Typography variant='h6' style={{padding: '20px'}}>Length : {holeDetails.length}</Typography>
            <Typography variant='h6' style={{padding: '20px'}}>Par : {holeDetails.par}</Typography>
            <Typography variant="h6" style={{padding: '20px'}}>Stroke Index : {holeDetails.si}</Typography>
          </Grid>
          <Grid item sm={6} xs={12} sx={{height: '100vh', padding: '20px'}}>
          <Box component='img' style={imgStyle} sx={{objectFit: 'cover'}}>
          </Box>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
            <Typography variant='h3'>Hole Flyover</Typography>
            <video width="80%" height="80%" controls>
              <source src={holeDetails.video} type="video/mp4"/>
            Sorry, your browser doesn't support embedded videos.
          </video>
          </Grid>
        </Grid>
      </Container>
      
    </>
    
    
  )
}
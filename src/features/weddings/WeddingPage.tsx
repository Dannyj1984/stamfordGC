import { Box, Grid, Paper, Typography } from "@mui/material";
import ScrollToTop from "../../app/layout/ScrollToTop";
import Carousel from 'react-material-ui-carousel'

interface ImageProps {
  key: number,
  item: {
    pic1Url: string,
    pic2Url: string,
    pic3Url: string,
  }
  
}


export default function WeddingPage() {

    // const [mobile, setMobile] = useState(false);


    // function resizeListener() {
    //     if (window.innerWidth <= 900) {
    //         setMobile(true);
    //     } else {
    //         setMobile(false);
    //     }
    // }

    // window.addEventListener('resize', resizeListener);

    // function setScreenSize() {
    //     if(window.innerWidth <= 900) setMobile(true)
    // }

    // useEffect(() => {
    //     setScreenSize();
    // }, [])

    const imgStyle = {
        background: `url(/img/function1.webp) no-repeat`,
        backgroundSize: '100% 100%'
    }

    var items = [
      {
        pic1Url: '/img/wedding/1.webp',
        pic2Url: '/img/wedding/2.webp',
        pic3Url: '/img/wedding/3.webp'
      },
      {
        pic1Url: '/img/wedding/4.webp',
        pic2Url: '/img/wedding/5.webp',
        pic3Url: '/img/wedding/6.webp'
      },
      {
        pic1Url: '/img/wedding/7.webp',
        pic2Url: '/img/wedding/8.webp',
        pic3Url: '/img/wedding/9.webp'
      },
      {
        pic1Url: '/img/wedding/10.webp',
        pic2Url: '/img/wedding/11.webp',
        pic3Url: '/img/wedding/1.webp'
      }
  ]

    return (
        <>
        <ScrollToTop />
        <Box component='img' style={imgStyle} sx={{height:'40vh', width:'100%', objectFit: 'fill'}}>
        </Box>
        <Paper elevation={4} sx={{ height: '50vh', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingTop:'3rem', paddingLeft:'2em'}}>
            <img src="/img/stamford.webp" alt="logo" width={80} height={80}/>
            <Typography variant='h5' sx={{whiteSpace:'pre-line', paddingTop: '20px'}}>{`Let the Stamford golf club catering and events team look after your special day`}</Typography>
        </Paper>
        <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center', mx: '10px'}}>
          <Typography variant='h4'>Wedding Gallery</Typography>
        <Carousel
          autoPlay 
          interval={4000}
          animation='slide'
          navButtonsAlwaysVisible
          sx={{width: '100%', alignItems:'center'}}
        >
            {
                items.map( (item, i) => 
                <Item 
                  key={i} 
                  item={item} 
                /> 
              )
            }
        </Carousel>
        </Box>
        
        </>
    )   
}


function Item(props: ImageProps)
{
    return (
      <Grid container sx={{justifyContent:'center', px:'5px'}}>
        <img src={props.item.pic1Url} alt="party" style={{width: 'auto', maxHeight: '75vh', padding: '5px'}} />
        <img src={props.item.pic2Url} alt="party" style={{width: 'auto', maxHeight: '75vh', padding: '5px'}} />
        <img src={props.item.pic3Url} alt="party" style={{width: 'auto', maxHeight: '75vh', padding: '5px'}} />

      </Grid>
        
    )
}
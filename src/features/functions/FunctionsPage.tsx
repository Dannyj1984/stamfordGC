import { Box, Divider, Paper, Typography } from "@mui/material";
import ScrollToTop from "../../app/layout/ScrollToTop";



export default function FunctionsPage() {

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

    return (
        <>
        <ScrollToTop />
        <Box component='img' style={imgStyle} sx={{height:'40vh', width:'100%', objectFit: 'fill'}}>
        </Box>
        <Paper elevation={4} sx={{ height: '50vh', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', paddingTop:'3rem', paddingLeft:'2em'}}>
            <img src="/img/stamford.webp" alt="logo" width={80} height={80}/>
            <Typography variant='h5' sx={{whiteSpace:'pre-line', paddingTop: '20px'}}>{`We offer a warm welcome to visiting parties of any size \n
            Bookings can be made via the online booking system or via the pro shop`}</Typography>
        </Paper>
        <Divider />

            <Paper  elevation={4} sx={{backgroundColor:'#ebebeb', height: '70vh', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center'}}>
                <Typography variant='h4'>Functions</Typography>
                <Paper elevation={4} sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start', backgroundColor:'white', alignItems:'center'}}>
                        <Typography variant="h6">Winter 2022/23 Green Fees</Typography>
                        <Typography sx={{fontSize:'1rem'}}>1st Nov - 31st March</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{backgroundColor:'white'}}>
                        <Typography >Monday - £20 per round (Clubhouse not open)</Typography>
                        <Typography >Tuesday - Friday £29 per round</Typography>
                        <Typography >Saturday - £30 per round (After 1:30pm)</Typography>
                        <Typography >Sunday - £30 per round (After 10am)</Typography>
                    </Box>
                </Paper>
                <Paper sx={{width: '70%', marginTop: '10px', padding:'10px'}}>
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start', backgroundColor:'white', alignItems:'center'}}>
                        <Typography variant="h6">Summer 2023 Green Fees</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{backgroundColor:'white'}}>
                        <Typography >Monday - £25 per round (Clubhouse not open)</Typography>
                        <Typography >Tuesday - Friday £35 per round</Typography>
                        <Typography >Saturday - £40 per round (After 1:30pm)</Typography>
                        <Typography >Sunday - £40 per round (After 10am)</Typography>
                    </Box>
                </Paper>
            </Paper>
        
        
        </>
    )   
}
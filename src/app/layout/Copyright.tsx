import { Typography } from "@mui/material";



export default function Footer() {

return (
    <Typography 
        sx={{
            backgroundColor: 'darkgrey', 
            textAlign:'center'
        }}
    >
Stamford Golf Club <br></br> Huddersfield Road <br></br> Stalybridge <br></br> Cheshire<br></br> SK15 3PY <br></br>
Telephone: 01457 832126 <br></br>
        Copyright Stamford golf club {new Date().getFullYear()}
    </Typography>
)
}
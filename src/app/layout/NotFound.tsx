import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return(
     <Typography variant='h1'> Oops page not found <Link to='/'>Back Home</Link></Typography>
  )
}
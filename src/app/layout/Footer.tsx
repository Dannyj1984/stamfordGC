import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';


export default function Footer() {

return (
    <Box sx={{ width:"100%", mt: "15px", backgroundColor: '#E4F3FD'}}>
        <Grid container spacing={2} sx={{padding:'15px'}}>
            <Grid item xs={12} sm={3}>
                <Typography variant='h6'>Golf</Typography>
                <List>
                    <ListItem component={NavLink} color='text.secondary' to='/fees' sx={{textDecoration:'none', color: 'black'}}>Green fees</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/course' sx={{textDecoration:'none', color: 'black'}}>Course info</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/membership' sx={{textDecoration:'none', color: 'black'}}>Membership</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/societies' sx={{textDecoration:'none', color: 'black'}}>Societies</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/offers' sx={{textDecoration:'none', color: 'black'}}>Special offers</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/opens' sx={{textDecoration:'none', color: 'black'}}>Opens</ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography variant='h6'>Functions</Typography>
                <List>
                    <ListItem component={NavLink} color='text.secondary' to='/venuehire' sx={{textDecoration:'none', color: 'black'}}>Venue hire</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/catering' sx={{textDecoration:'none', color: 'black'}}>Catering</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/carvery' sx={{textDecoration:'none', color: 'black'}}>Sunday carvery</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/upcoming' sx={{textDecoration:'none', color: 'black'}}>What's on</ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography variant='h6'>Weddings</Typography>
                <List>
                    <ListItem component={NavLink} color='text.secondary' to='/wedings' sx={{textDecoration:'none', color: 'black'}}>Weddings</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/wedding-gallery' sx={{textDecoration:'none', color: 'black'}}>Gallery</ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography variant='h6'>About</Typography>
                <List>
                    <ListItem component={NavLink} color='text.secondary' to='/history' sx={{textDecoration:'none', color: 'black'}}>History</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/dresscode' sx={{textDecoration:'none', color: 'black'}}>Dress code</ListItem>
                    <ListItem component={NavLink} color='text.primary' to='/privacy' sx={{textDecoration:'none', color: 'black'}}>Privacy policy</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/safeguarding' sx={{textDecoration:'none', color: 'black'}}>Safeguarding - adults and children</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/health-safety' sx={{textDecoration:'none', color: 'black'}}>Health & safety</ListItem>
                    <ListItem component={NavLink} color='text.secondary' to='/location' sx={{textDecoration:'none', color: 'black'}}>How to find us</ListItem>
                </List>
            </Grid>
            
        </Grid>

        
    </Box>
)
}
import { Box, Button, Checkbox, Container, Divider, FormControlLabel, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import './contact.css'
import SimpleMap from "./SimpleMap";

    const contactUsers = [
        {
            id: 0,
            value: 'General Enquiries',
            email: 'secretary@stamfordgolfclub.co.uk'
        },
        {
            id: 1,
            value: 'Professional',
            email: 'professional@stamfordgolfclub.co.uk'
        },
        {
            id: 2,
            value: 'Functions & Catering',
            email: 'stewardess@stamfordgolfclub.co.uk'
        },
    ]

export default function ContactPage() {

    const [user, setUsers] = useState('General Enquiries');
    const [email, setEmail] = useState('secretary@stamfordgolfclub.co.uk');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState<number | null>(null)
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const user = contactUsers.filter(a => a.value === event.target.value);
        if (user.length > 0) {
            setUsers(contactUsers[user[0].id].value);
            setEmail(contactUsers[user[0].id].email);
        } 
        
    };

    const handleChangeEmail =  (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(event.target.value)
    }

    const handleChangeName =  (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleChangeMessage =  (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }

    const handleChangePhone =  (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value !== null) {
            setPhone(parseInt(event.target.value))
        }
        
    }

    const handleSubmit = () => {
        const newMessage = {
            staffEmail: email,
            name: name,
            email: userEmail,
            phone: phone,
            message: message
        }

        console.log(newMessage)
        
    }

    const imgStyle = {
        background: `url(/img/clubhouse.jpeg) no-repeat`,
        backgroundSize: 'cover',
        maxHeight: 'auto',
        backgroundPosition: '100% 45%'
    }

    console.log(email)

    return (
        <>
            <Box component='img' style={imgStyle} sx={{height:'40vh', width:'100%', objectFit: 'fill'}}>
            </Box>
            <Container>
                <Grid container spacing={2} flex='true' sx={ { paddingTop:'5vh' } }>
                    <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column', paddingRight:'16px' }}>
                        <Typography variant='h3' sx={{textAlign: 'center'}}>Contact us<Divider flexItem={true} variant='fullWidth'/></Typography>
                        <Box
                            className='contact-form'
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1 }, 
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                id="select user"
                                select
                                fullWidth
                                label="Select contact"
                                value={user}
                                onChange={handleChange}
                                >
                                {contactUsers.map((option) => (
                                    <MenuItem key={option.id} value={option.value}>
                                    {option.value}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                            
                            <TextField
                                label="Full Name"
                                id="name"
                                fullWidth
                                value={name}
                                sx={{ m: 1 }}
                                onChange={handleChangeName}
                            />
                            <TextField
                                label="Email"
                                id="email"
                                fullWidth
                                value={userEmail}
                                type='email'
                                sx={{ m: 1 }}
                                onChange={handleChangeEmail}
                            />
                            <TextField
                                label="Phone number"
                                id="phone"
                                fullWidth
                                value={phone}
                                type='number'
                                sx={{ m: 1 }}
                                onChange={handleChangePhone}
                                helperText="Please provide your phone number if you would like a return phone call"
                            />
                            <TextField
                                label="Message"
                                id="message"
                                fullWidth
                                multiline
                                rows={6}
                                value={message}
                                sx={{ m: 1 }}
                                onChange={handleChangeMessage}
                            />
                            
                            <Button variant="outlined" sx={{width: '100%', marginLeft: '8px', mb: '10px'}} onClick={handleSubmit}>Submit</Button>
                            <Typography variant='body2' sx={{paddingLeft:'10px'}}>By submitting this form you agree to us contacting you regarding this particular enquiry.</Typography>
                            <FormControlLabel 
                                sx={{paddingLeft:'10px', fontWeight:'200'}} 
                                control={<Checkbox required id='consent-checkbox' /> } 
                                label={<Typography variant='body2'>Click here if you would like to receive information on future offers and events</Typography>}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h3' sx={{px: 5, textAlign:'center'}} >Find us <Divider flexItem={true} variant='fullWidth'/></Typography>
                        <Typography variant='body2' sx={{px: 5, textAlign:'center'}} >Stamford Golf Club, Huddersfield Road, Stalybridge, SK15 3PY </Typography>
                        {/* <Map location={location} zoom={12}/>              */}
                        <SimpleMap />
                    </Grid>
                </Grid>
            </Container>
            
        </>
        
    )
}
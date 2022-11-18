import { Box, Button, Container, Divider, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";

    const contactUsers = [
        {
            id: 0,
            value: 'Administrator',
            email: 'secretary@stamfordgolfclub.co.uk'
        },
        {
            id: 1,
            value: 'Professional',
            email: 'professional@stamfordgolfclub.co.uk'
        },
        {
            id: 2,
            value: 'Stewardess',
            email: 'stewardess@stamfordgolfclub.co.uk'
        },
    ]

export default function ContactPage() {

    const [user, setUsers] = useState('Administrator');
    const [email, setEmail] = useState('secretary@stamfordgolfclub.co.uk');
    const [name, setName] = useState('');
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

    const handleSubmit = () => {
        // const newMessage = {
        //     staffEmail: email,
        //     name: name,
        //     email: userEmail,
        //     message: message
        // }
    }

    const imgStyle = {
        background: `url(/img/clubhouse.jpeg) no-repeat`,
        backgroundSize: 'cover',
        maxHeight: 'auto',
        backgroundPosition: '100% 45%'
    }

    return (
        <>
            <Box component='img' style={imgStyle} sx={{height:'40vh', width:'100%', objectFit: 'fill'}}>
            </Box>
            <Container>
                <Grid container spacing={2} flex='true' sx={ { paddingTop:'5vh' } }>
                    <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h3'>Contact us <Divider flexItem={true} variant='middle'/></Typography>
                        <Box
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
                                helperText="Please choose the person you wish to contact"
                                >
                                {contactUsers.map((option) => (
                                    <MenuItem key={option.id} value={option.value}>
                                    {option.value}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                            {email}
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
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h3' sx={{ alignItems: 'center' }}>Find us <Divider flexItem={true} variant='middle'/></Typography>
                                    
                    </Grid>
                </Grid>
            </Container>
            
        </>
        
    )
}
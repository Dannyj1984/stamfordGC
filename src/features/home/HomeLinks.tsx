import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { ListItem, useMediaQuery } from '@mui/material';

const images = [
  {
    url: '/img/clubhouse.jpeg',
    title: 'Membership',
    width: '25%',
    path: '/membership'
  },
  {
    url: '/img/wedding.jpeg',
    title: 'Weddings',
    width: '25%',
    path: '/weddings'
  },
  {
    url: '/img/function.jpeg',
    title: 'Functions',
    width: '25%',
    path: '/functions'
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const day = date.getDate();

export default function HomeLinks() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      <ListItem component={NavLink} to={{pathname: `https://stamford.hub.clubv1.com/visitors/TeeSheet?date=${year}-${month+1}-${day}`}} target="_blank" sx={{
            width: matches ? '100%' : '25%',
            padding: '0px'
          }}>
        <ImageButton
          focusRipple
          style={{
            width: '100%',
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(/img/18.jpeg)` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              Ready to book?
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        </ListItem>
      {images.map((image) => (
        <ListItem component={NavLink} key={image.title} to={image.path} sx={{
            width: matches ? '100%' : '25%',
            padding: '0px'
          }}>
        <ImageButton
          focusRipple
          style={{
            width: '100%',
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        </ListItem>
        
      ))}
    </Box>
  );
}

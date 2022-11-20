import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import { Box } from '@mui/material';

interface Props {
  location: {
    address: string,
    lng: number,
    lat: number
  },
  zoom: number
}


const LocationPin = ({ address }: Props["location"]) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" style={{ fontSize: '60px' }} />
    <p className="pin-text">{address}</p>
  </div>
)

export default function Map({ location, zoom }: Props) {
  return (
    <Box sx={{padding:'20px'}}> 
      <div className="map">
          <h2 className="map-h2">Come visit us </h2>
      
          <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}`
              }}
              defaultCenter={location}
              defaultZoom={zoom}
            >
              <LocationPin
                lat={location.lat}
                lng={location.lng}
                address={location.address}
              />
            </GoogleMapReact>
          </div>
        </div>
    </Box>
    
  )
    

}
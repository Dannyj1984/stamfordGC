
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
// import './map.css'

interface Props {
  location: {
    address: string,
    lng: number,
    lat: number
  }
}

  const LocationPin = ({ address }: Props["location"]) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" style={{ fontSize: '60px' }} />
      <p className="pin-text">{address}</p>
    </div>
  )

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 53.5090,
      lng: -2.0350
    },
    zoom: 16
  };


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}`
              }}
        center={defaultProps.center}
        defaultCenter={defaultProps.center}
        defaultZoom={13}
      >
      <LocationPin
        lat={defaultProps.center.lat}
        lng={defaultProps.center.lng}
        address='Stamford golf club'
      />
      </GoogleMapReact>
      
    </div>
  );
}
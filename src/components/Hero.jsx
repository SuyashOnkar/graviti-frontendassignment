import { useMemo, useState } from 'react';
import './Hero.css';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import SearchBox from './SearchBox';
import SearchBtn from './SearchBtn';

export default function Hero() {
  const center = useMemo(() => ({ lat: 20, lng: 77 }), []);
  const options = useMemo(() => ({ disableDefaultUI: true, clickableIcons: false }), []);

  const [directions, setDirections] = useState();

  return (
    <>
      <GoogleMap
        zoom={6}
        center={center}
        options={options}
        mapContainerClassName="gmap"></GoogleMap>

      <SearchBox />
      <SearchBtn setDirections={setDirections} />
    </>
  );
}

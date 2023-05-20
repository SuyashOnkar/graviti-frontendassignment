import { useMemo, useState } from 'react';
import './Hero.css';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import SearchBox from './SearchBox';
import SearchBtn from './SearchBtn';
import Display from './Display';

export default function Hero() {
  const center = useMemo(() => ({ lat: 20, lng: 77 }), []);
  const options = useMemo(() => ({ disableDefaultUI: true, clickableIcons: false }), []);

  const [directions, setDirections] = useState();

  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();

  //   if (directions) distance = directions.routes[0].legs[0].distance.text;

  return (
    <>
      <GoogleMap
        zoom={6}
        center={center}
        options={options}
        mapContainerClassName="gmap">
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
      {/* Search Box for Setting Origin */}
      <SearchBox
        setLocation={setOrigin}
        name={'origin'}
      />
      {/* Search Box for setting destination */}
      <SearchBox
        setLocation={setDestination}
        name={'destination'}
      />

      <SearchBtn
        setDirections={setDirections}
        origin={origin}
        destination={destination}
      />

      <Display />

      {directions && (
        <Display
          origin={origin}
          destination={destination}
          distance={directions.routes[0].legs[0].distance.text}
        />
      )}
    </>
  );
}

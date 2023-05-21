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
  const [waypoints, setWaypoints] = useState([]);

  function addWaypoints(waypoint) {
    setWaypoints([...waypoints, { location: waypoint, stopover: true }]);
  }

  console.log(waypoints);

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
      <div className="searchDiv">
        <SearchBox
          setLocation={setOrigin}
          name={'Origin'}
        />
        <SearchBox
          setLocation={addWaypoints}
          name={'Stop'}
        />
        <SearchBox
          setLocation={setDestination}
          name={'Destination'}
        />
      </div>

      <SearchBtn
        setDirections={setDirections}
        origin={origin}
        destination={destination}
        waypoints={waypoints}
      />

      {directions ? (
        <Display
          origin={origin}
          destination={destination}
          distance={directions.routes[0].legs[0].distance.text}
        />
      ) : (
        <Display />
      )}
    </>
  );
}

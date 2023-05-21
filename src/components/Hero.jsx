import { useEffect, useMemo, useState } from 'react';
import './Hero.css';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import SearchBox from './SearchBox';
import SearchBtn from './SearchBtn';
import Display from './Display';
import AddStopBtn from './AddStopBtn';

export default function Hero() {
  const center = useMemo(() => ({ lat: 20, lng: 77 }), []);
  const options = useMemo(
    () => ({ disableDefaultUI: true, clickableIcons: false, zoomControl: false }),
    []
  );

  const [directions, setDirections] = useState();

  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [waypoints, setWaypoints] = useState([]);

  const [distance, setDistance] = useState(0);

  const [totalStops, setTotalStops] = useState(0);

  function calculateDistance() {
    console.log(directions);
    let sum = 0;
    directions.routes[0].legs.map((e) => {
      sum += e.distance.value;
    });
    setDistance(sum);
  }

  useEffect(() => {
    if (directions) {
      calculateDistance();
    }
  }, [directions]);

  // function addWaypoints(waypoint) {
  //   setWaypoints([...waypoints, { location: waypoint, stopover: true }]);
  // }

  function addWaypoints(waypoint) {
    setWaypoints([{ location: waypoint, stopover: true }]);
  }

  console.log(waypoints);

  return (
    <>
      <GoogleMap
        zoom={6}
        center={center}
        options={options}
        mapContainerClassName="gmap">
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
      <div
        className="searchDiv"
        id="searchDiv">
        <SearchBox
          setLocation={setOrigin}
          name={'Origin'}
        />
        <SearchBox
          setLocation={addWaypoints}
          name={'Stop'}
        />

        <AddStopBtn />

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
          distance={`${(distance / 1000).toFixed(0)} km`}
        />
      ) : (
        <Display />
      )}
      <footer></footer>
    </>
  );
}

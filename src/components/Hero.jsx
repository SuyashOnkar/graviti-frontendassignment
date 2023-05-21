import { useEffect, useMemo, useState } from 'react';
import './Hero.css';
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
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
  const [eta, setEta] = useState(0);

  const [totalStops, setTotalStops] = useState([
    <SearchBox
      setLocation={addWaypoints}
      name="Stop"
      key={crypto.randomUUID()}
    />,
  ]);

  function setTotalStopsFn() {
    setTotalStops([
      ...totalStops,
      <SearchBox
        setLocation={addWaypoints}
        name="Stop"
        key={crypto.randomUUID()}
      />,
    ]);
  }

  function addWaypoints(waypoint) {
    setWaypoints([...waypoints, { location: waypoint, stopover: true }]);
  }
  console.log(waypoints);

  function calculateDistance() {
    let sum = 0;
    directions.routes[0].legs.map((e) => {
      sum += e.distance.value;
    });
    setDistance(sum);
  }

  function calculateEta() {
    let sum = 0;

    directions.routes[0].legs.map((e) => {
      sum += e.duration.value;
    });

    const totalMinutes = Math.floor(sum / 60);

    const seconds = sum % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    setEta({ hours, minutes, seconds });
  }

  useEffect(() => {
    if (directions) {
      calculateDistance();
      calculateEta();
    }
  }, [directions]);

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
          name="Origin"
        />
        {totalStops}

        <AddStopBtn
          totalStops={totalStops}
          setTotalStopsFn={setTotalStopsFn}
        />

        <SearchBox
          setLocation={setDestination}
          name="Destination"
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
          eta={eta}
        />
      ) : (
        <Display />
      )}
      <footer />
    </>
  );
}

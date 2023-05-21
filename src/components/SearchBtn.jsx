import { useState } from 'react';
import './SearchBtn.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function SearchBtn({ setDirections, origin, destination, waypoints }) {
  const [travelMode, setTravelMode] = useState({
    value: google.maps.TravelMode.DRIVING,
    label: 'Driving',
  });

  function fetchDirections() {
    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: origin,
        waypoints: waypoints,
        optimizeWaypoints: true,
        destination: destination,
        travelMode: travelMode.value,
        provideRouteAlternatives: true,
      },
      (result, status) => {
        if (status === 'OK' && result) {
          console.log(result);
          setDirections(result);
        }
      }
    );
  }

  const options = [
    { value: google.maps.TravelMode.DRIVING, label: 'Driving' },
    { value: google.maps.TravelMode.BICYCLING, label: 'Bicycling' },
    { value: google.maps.TravelMode.TRANSIT, label: 'Transit' },
    { value: google.maps.TravelMode.WALKING, label: 'Walking' },
  ];

  function onSelect(e) {
    setTravelMode(e);
  }

  return (
    <div className="calculateDiv">
      <div className="searchBtnDiv">
        <button onClick={fetchDirections}>Calculate</button>
      </div>
      <div className="choose-transit-div">
        <Dropdown
          options={options}
          onChange={onSelect}
          value={travelMode.label}
          placeholder="Select an option"
          className="dropdown"
        />
      </div>
    </div>
  );
}

import './SearchBtn.css';

export default function SearchBtn({ setDirections, origin, destination }) {
  function fetchDirections() {
    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === 'OK' && result) {
          console.log(result);
          setDirections(result);
        }
      }
    );
  }

  return (
    <div className="searchBtnDiv">
      <button onClick={fetchDirections}>Calculate</button>
    </div>
  );
}

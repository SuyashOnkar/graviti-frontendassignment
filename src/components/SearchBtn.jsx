import './SearchBtn.css';

export default function SearchBtn({ setDirections }) {
  function fetchDirections() {
    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: 'Delhi',
        destination: 'Mumbai',
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

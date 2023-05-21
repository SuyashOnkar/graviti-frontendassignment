import './AddStopBtn.css';

export default function AddStopBtn({ totalStops, setTotalStops }) {
  function handleClick() {
    setTotalStops([...totalStops, totalStops[0]]);
  }
  return (
    <div
      className="addStopBtn-div"
      id="addStopBtn">
      <div
        className="container"
        onClick={handleClick}>
        <div className="addStop-icon" />
        <div className="addStop-text">Add another stop</div>
      </div>
    </div>
  );
}

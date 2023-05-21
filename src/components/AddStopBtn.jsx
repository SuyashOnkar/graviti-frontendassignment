import './AddStopBtn.css';
export default function AddStopBtn({ totalStops, setTotalStops }) {
  function handleClick() {
    console.log('HI!');
    setTotalStops(totalStops + 1);
  }
  return (
    <div
      className="addStopBtn-div"
      id="addStopBtn">
      <div
        className="container"
        onClick={handleClick}>
        <div className="addStop-icon"></div>
        <div className="addStop-text">Add another stop</div>
      </div>
    </div>
  );
}
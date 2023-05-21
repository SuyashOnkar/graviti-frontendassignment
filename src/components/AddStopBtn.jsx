import './AddStopBtn.css';

export default function AddStopBtn({ totalStops, setTotalStopsFn }) {
  return (
    <div
      className="addStopBtn-div"
      id="addStopBtn">
      <div
        className="container"
        onClick={setTotalStopsFn}>
        <div className="addStop-icon" />
        <div className="addStop-text">Add another stop</div>
      </div>
    </div>
  );
}

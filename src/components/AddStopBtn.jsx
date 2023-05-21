import './AddStopBtn.css';
import SearchBox from './SearchBox';

export default function AddStopBtn({ totalStops, setTotalStops }) {
  function handleClick() {
    console.log('HI!');
    setTotalStops([...totalStops, totalStops[0]]);
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

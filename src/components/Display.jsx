import './Display.css';

export default function Display({ origin, destination, distance }) {
  console.log(distance);
  return (
    <div className="display-div">
      <div className="display-distance">
        <p>
          <b>Distance</b>
        </p>
        <h1>{distance ? distance : '0 Km'}</h1>
      </div>
      <div className="display-text">
        {distance && (
          <p>
            The distance between <b>{origin}</b> and <b>{destination}</b> via the seleted route is{' '}
            <b>{distance}</b>.
          </p>
        )}
      </div>
    </div>
  );
}

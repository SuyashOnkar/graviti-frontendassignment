import './App.css';
import DistanceBox from './components/DistanceBox';
import InputBox from './components/InputBox';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <TextBox />
        <div className="hero">
          <InputBox label={'Origin'} />
          <InputBox label={'Stop'} />
          <InputBox label={'Destination'} />
        </div>
        <DistanceBox />
      </div>
    </>
  );
}

export default App;

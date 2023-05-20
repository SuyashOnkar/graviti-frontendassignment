import {} from 'react';
import './reset.css';
import './App.css';
import Navbar from './components/Navbar';
import HeroText from './components/HeroText';
import Hero from './components/Hero';
import { useLoadScript } from '@react-google-maps/api';

function App() {
  return (
    <>
      <Navbar />
      <HeroText />
      <LoadMapsApi />
    </>
  );
}

function LoadMapsApi() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Hero />;
}

export default App;

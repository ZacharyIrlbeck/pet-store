import PetMarketplace from './components/PetMarkteplace';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner'
import './App.css';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Outlet />
    </div>
  );
}

export default App;

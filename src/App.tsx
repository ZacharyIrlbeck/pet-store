import PetMarketplace from './components/PetMarkteplace';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <PetMarketplace />
    </div>
  );
}

export default App;

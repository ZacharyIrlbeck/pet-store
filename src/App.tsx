import Header from './components/Header';
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

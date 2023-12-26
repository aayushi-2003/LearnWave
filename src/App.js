import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Scholarship from './Scholarship';
import { Features } from './Features';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Features/>
      <Scholarship/>
    </div>
  );
}

export default App;

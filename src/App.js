import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Scholarship from './Scholarship';
import {Features} from './Features';
import Courses from './Courses';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <Courses/> */}
      <Features/>
      <Scholarship/>
    </div>
  );
}

export default App;

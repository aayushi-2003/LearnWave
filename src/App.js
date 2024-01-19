import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Scholarship from './Scholarship';
import {Features} from './Features';
import Courses from './Courses';
import Mentors from './Mentors';
import Footer from './Footer';
import Testimonials from './Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Courses/>
      <Mentors/>
      <Features/>
      <Testimonials/>
      <Scholarship/>
      <Footer/>
    </div>
  );
}

export default App;

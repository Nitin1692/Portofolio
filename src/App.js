import Navbar from './components/Navbar';
import Intro from './helpers/Intro'
import './App.css';
import Loader from './components/Loader';
import Abouts from './components/Abouts'
import Project from './components/Project';
import { SliderData } from './helpers/SliderData';
import Experience from './components/Experience'



function App() {
  return (
    <div className="App">
          <Loader />
          <Navbar />
          <Intro /> 
          <Abouts />
          <Project slides={SliderData} />
          <Experience />
    </div>
  );
}

export default App;

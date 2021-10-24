import './App.css';
import Paralex from './components/paralex';
import Projects from'./components/projects';
import Technologies from './components/technologies'
import Footer from './components/footer'

function App() {

  return (
    <div className="App">
      <Paralex />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;

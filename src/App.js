import Navbar from "./components/navbar/Navbar";
import Intro from './components/intro/Intro'
import Skils from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <div className="App">

      <Navbar />
      <Intro />
      <Skils />
      <Works />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

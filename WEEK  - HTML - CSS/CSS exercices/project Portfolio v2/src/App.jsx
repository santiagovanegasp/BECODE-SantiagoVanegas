import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  const { darkMode, mousePosition } = useTheme();

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
      {darkMode && (
        <div
          className="flashlight"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
      )}
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
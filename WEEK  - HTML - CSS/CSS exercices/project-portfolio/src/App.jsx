import { useState, useEffect } from 'react';
import { useTheme } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import ThemeProvider from './components/ThemeProvider';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Using requestAnimationFrame for smooth animation
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      <AppContent mousePosition={mousePosition} />
    </ThemeProvider>
  );
}

// Separate component to use the theme context inside ThemeProvider
function AppContent({ mousePosition }) {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-primary transition-colors duration-300">
      {theme === 'dark' && (
        <div
          className="flashlight"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
      )}
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <Projects />
        <About />
        <Technologies />
        <Contact />
      </main>
    </div>
  );
}

export default App;
import { useTheme } from './ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa';
import { AnimatedHamburgerButton } from './MobileMenu';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-primary shadow-md dark:shadow-[0_4px_6px_rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-grow">
          <h1 className="text-2xl font-bold dark:text-white">Santiagodev</h1>
          </div>
          <div><AnimatedHamburgerButton/></div>
          {/* <div className='mr-16'>
          <ul className='flex justify-between space-x-8  '>
            <li className=''>
              <a href="#projects" >Projects</a>
            </li>
            <li>
              <a href="#AboutMe">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          </div> */}
          <div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          </div>
          
          
        </div>
      </div>
    </nav>
  );
}


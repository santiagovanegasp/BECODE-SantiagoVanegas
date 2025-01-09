import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, } from 'react-icons/fa';
import { TbBrandFiverr } from "react-icons/tb";
// import { FaFiverr } from '@fortawesome/free-brands-svg-icons'; // Importa el ícono de Fiverr

const Hero = () => {
  const roles = ['Developer', 'Designer', 'Creator'];
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              I am{' '}
              <span className="text-primary-light dark:text-primary-dark">
                <TypeAnimation
                  sequence={[
                    'Santiago',
                    1000,
                    ...roles.flatMap(role => [role, 1000])
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-lg mb-6">
            Dedicated to the development of minimalist and functional websites and web applications that offer exceptional user experiences. I turn ideas into compelling digital solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/santiagovanegasp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-light dark:hover:text-primary-dark"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/-santiagovanegas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-light dark:hover:text-primary-dark"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.fiverr.com/tiagowebsites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-light dark:hover:text-primary-dark"
              >
                <TbBrandFiverr />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden">
              {/* testing photo */}
              <div className="w-full h-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-lg">
                {/* <img src="./public/images/profile.avif" alt="" /> */}
                <img src="./public/images/perfil.png" alt="" />
                {/* <img src="/images/profile.avif" alt="" /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



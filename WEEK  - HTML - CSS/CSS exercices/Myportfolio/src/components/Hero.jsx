import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 dark:text-white">
            I am{' '}
            <TypeAnimation
              sequence={[
                'Santiago',
                2000,
                'a Developer',
                2000,
                'a Designer',
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-blue-600 dark:text-blue-400"
            />
          </h1>
          <p className="text-xl mb-6 dark:text-gray-300">
            Passionate about creating beautiful and functional web experiences
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-2xl hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
              <FaGithub />
            </a>
            <a href="#" className="text-2xl hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="#" className="text-2xl hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
              <FaTwitter />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-64 h-64 mx-auto rounded-full bg-gray-300 dark:bg-gray-700">
            {/* Add your photo here */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg mb-6">
          I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences.I am currently training in technologies such as React and Node.js. I have worked on various training projects as well as real-world projects, including e-commerce platforms and corporate websites as a freelancer.
          </p>
          <p className="text-lg">
          Throughout my professional experience, I have developed key skills such as assertive communication, attention to detail, teamwork, planning, and leadership. I am now seeking an internship/job opportunity where I can continue learning and add value through my dedication and passion for growing in the tech industry.
          </p>
          <br />
          <p className="text-lg">
          I am open to connecting and exploring collaboration opportunities in the field of web development!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
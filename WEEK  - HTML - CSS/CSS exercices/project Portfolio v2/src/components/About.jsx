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
          Hello! I'm Santiago, a passionate full-stack web developer currently transitioning into the tech industry through my professional reconversion at <a href="https://becode.org/" target="_blank">@BeCode </a> in Brussels. I have a keen eye for design and a strong enthusiasm for creating seamless user experiences.I am actively training in technologies like React and Node.js, and I have worked on various projects, including training exercises and real-world applications such as e-commerce platforms and corporate websites as a freelancer.    
          </p>
          <p className="text-lg mb-6">
          Over the course of my professional journey, I have honed valuable skills such as assertive communication, attention to detail, teamwork, planning, and leadership. I am now seeking an internship or job opportunity where I can continue learning, contribute my skills, and grow further in the tech industry.  
          </p>
        
          <p className="text-lg">
          I am looking for remote or on-site job that offer visa sponsorship.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
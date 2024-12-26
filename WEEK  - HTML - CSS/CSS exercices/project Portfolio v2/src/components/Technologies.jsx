import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaSass } from 'react-icons/fa';

const Technologies = () => {
  const technologies = [
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3Alt, name: 'CSS3' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaReact, name: 'React' },
    { icon: FaNode, name: 'Node.js' },
    { icon: FaSass, name: 'Sass' },
  ];

  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Technologies I Work With</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map(({ icon: Icon, name }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Icon className="tech-icon" />
              <span className="mt-2 text-sm">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
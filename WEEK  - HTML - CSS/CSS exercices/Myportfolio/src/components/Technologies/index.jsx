import { motion } from 'framer-motion';
import TechIcon from './TechIcon';
import { technologiesData } from '../../data/technologies';

export default function Technologies() {
  return (
    <section id="technologies" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">Technologies</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologiesData.map((tech) => (
            <TechIcon key={tech.name} {...tech} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="project-card cursor-pointer"
      onClick={() => onClick(project)}
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
      <div className="flex gap-2 mt-4">
        {project.technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm dark:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-tertiary p-8 rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="float-right text-2xl dark:text-white"
        >
          ×
        </button>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.fullDescription}</p>
        <div className="flex gap-4 mb-4">
          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Live Demo
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
}
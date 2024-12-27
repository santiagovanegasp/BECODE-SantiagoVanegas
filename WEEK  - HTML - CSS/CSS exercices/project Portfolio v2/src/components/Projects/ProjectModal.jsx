import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-8 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl mx-auto p-5 my-4 relative">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 z-10"
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>

        <div className="mb-3">
          <h3 className="text-xl font-bold pr-8">{project.title}</h3>
        </div>

        <div className="relative aspect-video mb-4">
          <img
            src={project.images[currentImage]}
            alt={`${project.title} ${currentImage + 1}`}
            className="w-full h-full object-cover rounded"
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 
                     bg-black bg-opacity-50 p-1.5 rounded-full hover:bg-opacity-75"
          >
            <FaArrowLeft className="text-white w-4 h-4" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 
                     bg-black bg-opacity-50 p-1.5 rounded-full hover:bg-opacity-75"
          >
            <FaArrowRight className="text-white w-4 h-4" />
          </button>
        </div>

        <div>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
            {project.longDescription}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 bg-primary-light/10 dark:bg-primary-dark/10 
                         text-primary-light dark:text-[rgb(228,204,251)] rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-light dark:bg-primary-dark 
                       text-white rounded text-sm hover:opacity-90 transition-opacity"
            >
              <FaExternalLinkAlt className="w-3 h-3" /> Live Demo
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 dark:bg-gray-700 
             text-white rounded text-sm hover:opacity-90 transition-opacity"
              >
                <FaGithub className="w-3 h-3" /> GitHub
              </a>
            )}
            {/* <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 dark:bg-gray-700 
                       text-white rounded text-sm hover:opacity-90 transition-opacity"
            >
              <FaGithub className="w-3 h-3" /> GitHub
            </a> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectModal;

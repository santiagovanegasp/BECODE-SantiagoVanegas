// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import ProjectModal from './ProjectModal';

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: 'Project 1',
//       description: 'Description of project 1',
//       images: ['/project1-1.jpg', '/project1-2.jpg', '/project1-3.jpg'],
//       technologies: ['React', 'Node.js', 'MongoDB'],
//     },
//     // Add more projects here
//   ];

//   return (
//     <section id="projects" className="py-20">
//       <h2 className="section-title">My Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//         {projects.map((project) => (
//           <motion.div
//             key={project.id}
//             whileHover={{ scale: 1.05 }}
//             className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
//             onClick={() => setSelectedProject(project)}
//           >
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//               <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//       {selectedProject && (
//         <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
//       )}
//     </section>
//   );
// };

// export default Projects;
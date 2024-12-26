// import { useState } from 'react';
// import ProjectCard from './ProjectCard';
// import ProjectModal from './ProjectModal';



// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: "React Form",
//       shortDescription: "A responsive form validation using react , no libraries",
//       longDescription: "A responsive form validation using react and CSS effects  , no libraries. ",
//       mainImage: "/projects/form1.jpg",
//       images: [
//         "/projects/form1.jpg",
//         "/projects/form2.png",
//         "/projects/form3.png"
//       ],
//       technologies: ["React.js", "CSS"],
//       liveDemo: "https://santiagovanegasp.github.io/react-form/",
//       github: "https://github.com/yourusername/ecommerce"
//     },
//     {
//       id: 2,
//       title: "Be Movies",
//       shortDescription: "Collaborative Project using TMDB API",
//       longDescription: " A collaborative project using The Movie Data Base API , using a code base of html and css from another colleague, we had to add javascript functionalities and adapt to his code. ",
//       mainImage: "/projects/bemovies1.png",
//       images: [
//         "/projects/bemovies1.png",
//         "/projects/bemovies2.png",
//         "/projects/bemovies3.png"
//       ],
//       technologies: ["Javascript", "CSS", "API REST"],
//       liveDemo: "https://example.com/taskapp",
//       github: "https://github.com/yourusername/taskapp"
//     },
//     {
//       id: 3,
//       title: "Clasic Landing page",
//       shortDescription: "A clasic landing Page Pixel perfect",
//       longDescription: "starting from a given design, I developed this landing page meeting the requirements of the design. ",
//       mainImage: "/projects/landingpage.png",
//       images: [
//         "/projects/landingpage.png",
//         "/projects/landingpage2.png"
//       ],
//       technologies: ["Html", "CSS",],
//       liveDemo: "https://example.com/weather",
//       github: "https://github.com/yourusername/weather"
//     },
    
//   ];

  

//   return (
//     <section id="projects" className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="section-title">My Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               onClick={() => setSelectedProject(project)}
//             />
//           ))}
//         </div>
//       </div>
//       {selectedProject && (
//         <ProjectModal 
//           project={selectedProject} 
//           onClose={() => setSelectedProject(null)} 
//         />
//       )}
//     </section>
//   );
// };

// export default Projects;

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Corporate website",
      shortDescription: "I created a web site for a friend, making the whole process",
      longDescription: "I built this site for a friend who needed to renovate his previous website, for this project I had to do the whole process, from taking pictures and videos of some of his projects, creating the texts for the page optimized for SEO, to the design of the website. At my friend's request I kept elements from his previous site.",
      mainImage: "/projects/jardiniers1.png",
      images: [
        "/projects/oldjardiniers.png",
        "/projects/jardiniers1.png",
        "/projects/jardiniers2.png",
        "/projects/jardiniers3.png"
      ],
      technologies: ["Wordpress","CSS","Javascript","Video editing"],
      liveDemo: "https://jardinierspositifs.com/",
      github: ""
    },
    {
      id: 2,
      title: "Orange Hackaton",
      shortDescription: "A collaboration between Orange 🟠 & BeCode.org 🔵 ",
      longDescription: 'We were introduced to several private APIs from Orange to test their use and create projects where they could be applied. We formed a group of four people and successfully developed a web application in which we used three Orange APIs and the Google Maps API to create a community assistance project "Good Neighbours.',
      mainImage: "/projects/orangmain.png",
      images: [
        "/projects/orangmain.png",
        "/projects/orange1.png",
        "/projects/orange2.png",
        "/projects/orange3.png"
      ],
      technologies: ["HTML","CSS","Javascript"],
      liveDemo: "https://santiagovanegasp.github.io/goodorange/",
      github: "https://www.canva.com/design/DAGXA20tEyc/Ve0QFC0k62XC3ExfyskoEg/edit?utm_content=DAGXA20tEyc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      id: 3,
      title: "React Form",
      shortDescription: "A responsive form validation using react , no libraries",
      longDescription: "A responsive form validation using react and CSS effects  , no libraries. ",
      mainImage: "/projects/form1.jpg",
      images: [
        "/projects/form1.jpg",
        "/projects/form2.png",
        "/projects/form3.png"
      ],
      technologies: ["React.js", "CSS"],
      liveDemo: "https://santiagovanegasp.github.io/react-form/",
      github: "https://github.com/yourusername/ecommerce"
    },
    {
      id: 4,
      title: "Be Movies",
      shortDescription: "Collaborative Project using TMDB API",
      longDescription: " A collaborative project using The Movie Data Base API , using a code base of html and css from another colleague, we had to add javascript functionalities and adapt to his code. ",
      mainImage: "/projects/bemovies1.png",
      images: [
        "/projects/bemovies1.png",
        "/projects/bemovies2.png",
        "/projects/bemovies3.png"
      ],
      technologies: ["Javascript", "CSS", "API REST"],
      liveDemo: "https://example.com/taskapp",
      github: "https://github.com/yourusername/taskapp"
    },
    {
      id: 5,
      title: "Clasic Landing page",
      shortDescription: "A clasic landing Page Pixel perfect",
      longDescription: "starting from a given design, I developed this landing page meeting the requirements of the design. ",
      mainImage: "/projects/landingpage.png",
      images: [
        "/projects/landingpage.png",
        "/projects/landingpage2.png"
      ],
      technologies: ["Html", "CSS",],
      liveDemo: "https://example.com/weather",
      github: "https://github.com/yourusername/weather"
    },
    {
      id: 6,
      title: "Marketing agency",
      shortDescription: "I created a brand to offer freelance services.",
      longDescription: "I created a brand from scratch in order to offer freelance services in brussels, belgium. This was one of my first projects using only wordpress and css.",
      mainImage: "/projects/Ohhlala1.png",
      images: [
        "/projects/Ohhlala1.png",
        "/projects/ohhlala2.png",
        "/projects/ohhlala3.png"
      ],
      technologies: ["WordPress", "CSS"],
      liveDemo: "https://santiagovanegasp.github.io/react-form/",
      github: ""
    },
    // ... otros proyectos
  ];

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.2 
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section 
      id="projects" 
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Some Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </motion.section>
  );
};

export default Projects;

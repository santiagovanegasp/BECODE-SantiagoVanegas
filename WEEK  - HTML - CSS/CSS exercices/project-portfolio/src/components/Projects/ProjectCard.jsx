// import Slider from 'react-slick';
// import { motion } from 'framer-motion';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // Flechas personalizadas
// function NextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600 z-10"
//       onClick={onClick}
//     >
//       ▶
//     </div>
//   );
// }

// function PrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600 z-10"
//       onClick={onClick}
//     >
//       ◀
//     </div>
//   );
// }

// export default function ProjectCard({ project, onClick }) {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // nextArrow: <NextArrow />,
//     // prevArrow: <PrevArrow />,
//     arrows: true,
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="project-card cursor-pointer"
//       onClick={() => onClick(project)}
//     >
//       <Slider {...sliderSettings} className="relative w-full h-48 mb-4">
//         {project.images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`${project.title} - Image ${index + 1}`}
//             className="w-full h-48 object-cover rounded-lg"
//           />
//         ))}
//       </Slider>
//       <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
//       <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
//       <div className="flex gap-2 mt-4">
//         {project.technologies.map((tech, index) => (
//           <span
//             key={index}
//             className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm dark:text-white"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//     </motion.div>
//   );
// }


//_____________________

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
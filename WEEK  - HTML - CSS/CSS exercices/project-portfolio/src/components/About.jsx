import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate full-stack developer with a keen eye for design and a love for creating
            seamless user experiences.I am currently training in technologies such as  React and Node.js. I have worked on various training projects as well as real-world projects, including e-commerce platforms and corporate websites as a freelancer.

            <br />
            <br />

            Throughout my professional experience, I have developed key skills such as assertive communication, attention to detail, teamwork, planning, and leadership. I am now seeking an internship/job opportunity where I can continue learning and add value through my dedication and passion for growing in the tech industry.
            <br />
            <br />

            I am open to connecting and exploring collaboration opportunities in the field of web development!
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {/* When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing my knowledge through technical writing and mentoring. */}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
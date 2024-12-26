import { motion } from 'framer-motion';

export default function TechIcon({ icon: Icon, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
        <Icon className="w-8 h-8 text-gray-800 dark:text-white" />
      </div>
      <span className="text-sm dark:text-white">{name}</span>
    </motion.div>
  );
}
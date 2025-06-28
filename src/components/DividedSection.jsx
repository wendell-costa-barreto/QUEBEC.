import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DividedSection({
  src,
  alt,
  title,
  subtitle,
  buttonText,
  link,
}) {
  return (
    <motion.div
      className="w-full h-[80vh] flex justify-center items-center relative z-0 overflow-hidden mt-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="w-[45%] h-[80%] flex justify-center items-center relative"
        variants={itemVariants}
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-bl-2xl rounded-l-2xl rounded-tl-2xl"
          variants={itemVariants}
        />
      </motion.div>
      <motion.div
        className="w-[45%] h-[80%] flex flex-col justify-center items-start *:ml-[8%] gap-14 bg-gray-400/10 rounded-br-2xl rounded-r-2xl rounded-tr-2xl"
        variants={itemVariants}
      >
        <motion.h1
          className="text-4xl font-bold max-w-[80%]"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        <motion.p className="text-xl max-w-[80%]" variants={itemVariants}>
          {subtitle}
        </motion.p>
        <motion.button
          className="*:stroke-2 font-bold flex items-center gap-2 hover:bg-black hover:text-white rounded-md px-6 py-3 bg-transparent text-black border-2 cursor-pointer border-black transition duration-500 ease-in-out"
          variants={itemVariants}
        >
          <a href={link}> {buttonText}</a>
          <ArrowRight />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

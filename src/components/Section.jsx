import { motion } from "framer-motion";

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

export default function Section({
  src,
  alt,
  title,
  subtitle,
  buttonText,
  link,
}) {
  return (
    <>
      <motion.div
        className="w-full h-[95vh] flex justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="w-[80%] h-[80%] flex justify-center items-center relative rounded-2xl"
          variants={itemVariants}
        >
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-2xl"
          />
          <motion.div
            className="absolute w-full h-full bg-black/55 rounded-2xl "
            variants={itemVariants}
          ></motion.div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full gap-9 flex flex-col justify-center items-center z-50"
            variants={itemVariants}
          >
            <motion.h1
              className="text-6xl font-bold text-white"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-2xl font-semibold text-white max-w-[69%]"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            <motion.button
              className="bg-transparent text-white border border-white hover:bg-white text-2xl hover:text-black px-14 py-5 rounded-md font-bold"
              variants={itemVariants}
            >
              <a href={link}>{buttonText}</a>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

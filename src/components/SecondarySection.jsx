import { motion } from "framer-motion";

const SecondarySection = ({ title, subtitle, cta, image, isInverted }) => {
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

  return (
    <motion.div
      className="h-[80vh] w-[80%] flex items-center justify-center mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
    >
      <motion.div
        className={`w-full h-full flex items-center justify-center ${
          isInverted ? "flex-row-reverse" : "flex-row"
        }`}
        variants={itemVariants}
      >
        <motion.div
          className="w-1/2 h-full flex flex-col justify-center px-16"
          variants={itemVariants}
        >
          <motion.img
            src={image}
            alt=""
            className="w-full h-[85%] object-cover"
            variants={itemVariants}
          />
        </motion.div>
        <motion.div
          className="w-1/2 h-full flex flex-col justify-center gap-[10%] px-16 text-justify"
          variants={itemVariants}
        >
          <motion.h2 className="text-4xl font-bold" variants={itemVariants}>
            {title}
          </motion.h2>
          <motion.p className="text-xl" variants={itemVariants}>
            {subtitle}
          </motion.p>
          <motion.button
            className="w-1/3 mt-[-3.5%] cursor-pointer hover:bg-black py-4 px-8 rounded-lg text-black transition duration-500 ease-in-out border-2 border-black hover:text-white font-bold"
            variants={itemVariants}
          >
            {cta}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SecondarySection;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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

export default function Slider({ title, subtitle, images }) {
  return (
    <>
      <motion.div
        className="h-[10vh] w-full mb-20 mt-[2%]"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="h-full w-[80%] mx-auto flex flex-col justify-start items-start"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col justify-start items-start mt-[5%] gap-2 ml-[-2%]"
            variants={itemVariants}
          >
            <h1 className="text-5xl font-bold autoshow">{title}</h1>
            <p className="autoshow">{subtitle}</p>
          </motion.div>
          <p className="text-blue-400 hidden">reiciendis</p>
          <p className="text-yellow-400 hidden">reiciendis</p>
          <p className="text-orange-400 hidden">reiciendis</p>
          <p className="text-pink-400 hidden">reiciendis</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full h-[70vh] flex justify-center items-center mt-[-2%]"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-[90%]"
          loop={true}
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            0: { slidesPerView: 1, spaceBetween: 10 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide className="h-full" key={index}>
              <a href={image.link} className="block h-full w-full">
                <motion.div
                  className="h-[80%] mt-[20%] w-full flex items-start justify-start flex-col hover:scale-101 transition duration-300 ease-in-out cursor-pointer hover:*:text-black hover:*:*:border-black"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="rounded-tr-lg rounded-tl-lg max-h-[69%] min-h-[69%] w-full object-cover"
                  />
                  <h1 className="text-3xl font-bold mt-4 mb-2">
                    {image.title}
                  </h1>
                  <p className="text-lg font-light">{image.description}</p>
                  <div className="text-lg mt-3 flex gap-2 items-center text-blue-800/80 font-bold hover:text-black hover:underline hover:*:border-black transition duration-200 ease-in-out">
                    <ArrowRight
                      strokeWidth={3}
                      size={25}
                      className="mb-[-1.5px] rounded-full border-2 border-blue-800/80 p-1"
                    />
                    {image.linkText}
                  </div>
                </motion.div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
}

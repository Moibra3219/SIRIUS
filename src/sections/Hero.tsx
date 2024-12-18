"use client";
import { Button } from "@/components/Button";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
    // Text animation variants

  const textVariants: Variants = { 
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center justify-center overflow-hidden relative"
      style={{
        background: "rgb(41, 95, 152)", // Solid gradient background
        backgroundPositionY,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(41,95,152,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"></div>
      {/* Start Planet */}
      <motion.div 
        className="absolute size-64 md:size-96 bg-white-500 border border-white/20  -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,black,black_37.7%,rgb(14,0,))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(41,95,152)] rounded-full"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      ></motion.div>
      {/* End Planet */}
      {/* Rings */}
      {/* Start Ring 1 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute size-[344px] md:size-[580px] border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="absolute size-2 bg-white top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute size-2 bg-white top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute size-5 border border-white top-1/2 left-full -translate-x-1/2 -translate-y-1/2 rounded-full inline-flex justify-center items-center">
          <div className="size-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute size-[444px] md:size-[780px] border border-dashed border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      ></motion.div>
      {/* End Ring 2 */}
      {/* Start Ring 3 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute size-[544px] md:size-[980px] border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="absolute size-2 bg-white top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute size-2 bg-white top-1/2 left-full -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </motion.div>
      {/* End Ring 3 */}
      <div className="container relative mt-16">
      <motion.h1 
          className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter text-center text-white"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          SIRIUS
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-white mt-5 text-center max-w-xl mx-auto"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Elevate your visibility effortlessly with SIRIUS, where smart
          technology meets marketing tools.
        </motion.p>
        <div className="flex justify-center mt-5">
        <Link href="#contact">
              <Button>Join waitlist</Button>
            </Link>
        </div>
      </div>
    </motion.section>
  );
};

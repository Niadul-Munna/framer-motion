import React from "react";
import { motion } from "motion/react";
import { anticipate } from "motion";

export default function App() {
  return (
    <div>
      <motion.div
        className="box"
        animate={{
          x: [0, 1000, 500, 1000, 0],
          y: [0, 50, 50, 500, 0],
          rotate: 360,
        }}
        transition={{
          duration: 3,
          delay: 1,
          ease: "anticipate",
        }}
      ></motion.div>
    </div>
  );
}

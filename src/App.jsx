import React from "react";
import { motion } from "motion/react";
import { anticipate } from "motion";

export default function App() {
  return (
    <div>
      <motion.div
        className="box"
        animate={{
          x: [0, 500, 500, 1000, 1000],
          y: [0, 0, 400, 400, 0],
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

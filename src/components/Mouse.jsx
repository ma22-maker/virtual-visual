import React, { useState } from "react";
import { motion } from "framer-motion";
// import "../styles/styles.css"
import useMousePosition from "../helper/useMousePosition";

function Mouse() {
    const [cursorSize, setCursorSize] = useState(40);
    const [cursorVariant, setCursorVariant] = useState("default");
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();
//   const size = isHovered ? 50 : 40;
//   const cursorVariant = isHovered ? "text" : "default";

  const variants = {
    default: {
      x: x - cursorSize / 2,
      y: y - cursorSize / 2,
    },
    text: {
      height: 200,
      width: 200,
      x: x - 75,
      y: y - 75,
      backgroundColor: "#eae9e8",
      mixBlendMode: "difference",
    },
  };

    const textEnter = () => {
      setIsHovered(true);
      setCursorSize(0);
      setCursorVariant("text");
    };

    const textLeave = () => {
      setIsHovered(false);
      setCursorSize(20);
      setCursorVariant("default");
    };

  return (
    <>
      <div className=" App">
        <div
          className="relative font-semibold text-6xl text-black"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          cedfcefrefrefrfgrvredewd3edfe3frefrfr frerfrefrefrf
        </div>

        <motion.div
          className="cursor z-50"
          variants={variants}
          animate={cursorVariant}
        >
          <svg width={cursorSize} height={cursorSize}>
            {/* Add your cursor SVG content here */}
          </svg>
        </motion.div>
      </div>
    </>
  );
}

export default Mouse;

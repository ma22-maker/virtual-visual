import React, { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

const parentVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-4rem" },
};

const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-2rem" },
};

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  function update(latest, prev) {
    if (latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    }
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  const handleClickScroll = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <motion.nav
      variants={parentVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
        staggerChildren: 0.05,
      }}
      className="z-40 w-auto md:w-full fixed flex m-2 justify-center"
    >
      <div className=" shadow-lg flex bg-slate-500 rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10   px-3 py-5 items-center justify-between  max-[320px]:gap-3 gap-12 md:gap-40 ">
        <motion.div
        id="home-button"
          variants={childVariants}
          transition={{
            ease: [0.1, 0.25, 0.3, 1],
            duration: 0.9,
          }}
          className=" font-eikothin  max-[425px]:text-[10px]  text-sm mx-2 sm:mx-10 tracking-widest cursor-pointer"
        >
          DEEPTHIMAI KANDULA
        </motion.div>
        <div className="flex items-center gap-2 sm:gap-5  mx-3 sm:mx-10">
          <motion.div
          id="work-button"
            onClick={handleClickScroll}
            variants={childVariants}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 0.9,
            }}
            className="font-montrealbook text-sm  max-[425px]:text-[10px] cursor-pointer"
          >
            Work
          </motion.div>
          <motion.a
            variants={childVariants}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 0.9,
            }}
             href="mailto:deepthimai.kandula@gmail.com?body=Hey There!"
            className=" font-montrealbook text-sm  max-[425px]:text-[10px]"
          >
            Email Me
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;

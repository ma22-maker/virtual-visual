import React, { useEffect } from "react";
import Navbar from "./Nav";
import Lenis from "lenis";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Zoom from "./Picture";

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      <Navbar />
      <Section1 droponeprogress={scrollYProgress} />
      <Section2 droptwoprogress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ droponeprogress }) => {
  const scale = useTransform(droponeprogress, [0, 1], [1, 0.8]);
  const rotate = useTransform(droponeprogress, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{ scale, rotate }}
      id="home-section"
      className="main sticky top-0 h-screen bg-[#ede8e4]  
        "
    >
      <div className=" relative body flex flex-col gap-4 pt-36 px-10 md:px-20">
        <div className="grid grid-col-12 grid-rows-2 gap-4">
          <div className="col-start-1 col-end-4   md:row-start-1  md:col-start-2  md:row-end-2  md:col-end-4">
            <div className="flex flex-row justify-center items-center gap-1">
              <svg
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="7" height="8" fill="black" />
              </svg>

              <p className="  font-montrealthin text-[10px]  ">
                Working at{" "}
                <a
                  href="https://www.bounteous.com/"
                  target="_blank"
                  className="underline underline-offset-2"
                >
                  Bounteous
                </a>
              </p>
            </div>
          </div>
          <div className="col-start-4 col-end-8  md:row-start-1 md:col-start-4  md:row-end-2  md:col-end-6">
            <div className="flex flex-row justify-center items-center gap-1">
              <svg
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="7" height="8" fill="black" />
              </svg>

              <p className="  font-montrealthin text-[10px]   ">
                Based in India
              </p>
            </div>
          </div>
          <div className=" md:row-start-1 md:col-start-6  md:row-end-2  md:col-end-12">
            <p className="flex flex-row items-center justify-center gap-2 ">
              <a
                className="  font-montrealthin text-xs hover:underline hover:underline-offset-2"
                href="https://github.com/ma22-maker"
                target="_blank"
              >
                Github <span className="font-extralight m-1"> |</span>
              </a>
              <a
                className="  font-montrealthin text-xs hover:underline hover:underline-offset-2"
                href="https://github.com/ma22-maker"
                target="_blank"
              >
                Linkedin
              </a>
            </p>
          </div>
        </div>
        <div className="relative grid grid-cols-12 grid-rows-2 mt-[10vh] md:mt-[20vh]  text-[1.6rem] md:text-[2.2rem]  lg:text-[3rem]  xl:text-[4.5rem] ">
          <span className="  font-eikothin font-thin tracking-wide  col-start-1 col-end-12  row-span-1  md:row-start-1  md:col-start-2  md:row-end-2  md:col-end-11">
            DEEPTHIMAI KANDULA
          </span>
          <span className="font-montrealthin font-semibold tracking-wider col-start-1 col-end-12  row-span-1 min-[446px]:absolute min-[446px]:bottom-[19%] min-[446px]:left-[36%] ">
            <div className="flex flex-row gap-2 justify-center items-center">
              <p>FRONTEND DEV</p>
              <svg
                className=" mt-3 md:mt-8"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="14" height="14" fill="#090909" />
              </svg>
            </div>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Section2 = ({ droptwoprogress }) => {
  const scale = useTransform(droptwoprogress, [0, 1], [0.8, 1]);
  const rotate = useTransform(droptwoprogress, [0, 1], [5, 0]);
  const textRef = useRef(null);
  const secRef = useRef(null);
  const pathRef = useRef(null);
  const secpathRef = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const path = pathRef.current;
    const second = secpathRef.current;
    scrollYProgress1.on("change", (e) => {
      const offset = 100 - e * 200;
      path.setAttribute("startOffset", `${offset}%`);
    });
    scrollYProgress2.on("change", (e) => {
      const secondoffset = e * 40; // Change the offset calculation to move from left to right
      second.setAttribute("startOffset", `${secondoffset}%`);
    });
  }, [scrollYProgress1, scrollYProgress2]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen bg-[#630f0e] text-[3.5vw]"
    >
      <div className="z-10 relative">
        <div ref={textRef}>
          <motion.svg
            id="text-container"
            viewBox="0 0 1000 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              id="text-curve"
              d="M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0"
              fill="none"
              stroke="none"
              strokeWidth="2"
            />
            <text y="40" fontSize="32" style={{ fill: "#ede8e4" }}>
              <motion.textPath
                ref={pathRef}
                href="#text-curve"
                startOffset="100%"
              >
                I'm a front-end dev and designer who turns music into code and
                pixels into perfection.
              </motion.textPath>
            </text>
          </motion.svg>
        </div>
        <div ref={secRef}>
          <motion.svg
            id="text-container"
            viewBox="0 0 1000 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              id="text-curve"
              d="M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0"
              fill="none"
              stroke="none"
              strokeWidth="2"
            />
            <text y="40" fontSize="32" style={{ fill: "#ede8e4" }}>
              <motion.textPath
                ref={secpathRef}
                href="#text-curve"
                startOffset="-100%"
              >
                Designing interfaces as enchanting as your favorite song's
                chorus
              </motion.textPath>
            </text>
          </motion.svg>
        </div>
      </div>
      <div className="z-0 absolute bottom-[1%] left-[28%]  w-5/12 h-full">
        <Zoom />
      </div>
    </motion.div>
  );
};

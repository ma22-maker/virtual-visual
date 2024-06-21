import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderHead, j as renderSlot, h as createAstro, k as renderComponent } from '../astro_GTQy6ZNN.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, Suspense, useRef, useEffect } from 'react';
import { useScroll, useMotionValueEvent, motion, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useTexture, useAspect } from '@react-three/drei';
import * as THREE from 'three';
/* empty css                          */

const parentVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-4rem" }
};
const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-2rem" }
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
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsx(
    motion.nav,
    {
      variants: parentVariants,
      animate: hidden ? "hidden" : "visible",
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
        staggerChildren: 0.05
      },
      className: "z-40 w-auto md:w-full fixed flex m-2 justify-center",
      children: /* @__PURE__ */ jsxs("div", { className: " shadow-lg flex bg-slate-500 rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10   px-3 py-5 items-center justify-between  max-[320px]:gap-3 gap-12 md:gap-40 ", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            id: "home-button",
            variants: childVariants,
            transition: {
              ease: [0.1, 0.25, 0.3, 1],
              duration: 0.9
            },
            className: " font-eikothin  max-[425px]:text-[10px]  text-sm mx-2 sm:mx-10 tracking-widest cursor-pointer",
            children: "DEEPTHIMAI KANDULA"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 sm:gap-5  mx-3 sm:mx-10", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              id: "work-button",
              onClick: handleClickScroll,
              variants: childVariants,
              transition: {
                ease: [0.1, 0.25, 0.3, 1],
                duration: 0.9
              },
              className: "font-montrealbook text-sm  max-[425px]:text-[10px] cursor-pointer",
              children: "Work"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.a,
            {
              variants: childVariants,
              transition: {
                ease: [0.1, 0.25, 0.3, 1],
                duration: 0.9
              },
              href: "mailto:deepthimai.kandula@gmail.com?body=Hey There!",
              className: " font-montrealbook text-sm  max-[425px]:text-[10px]",
              children: "Email Me"
            }
          )
        ] })
      ] })
    }
  );
}

const vertex$1 = `
varying vec2 vUv;
uniform float uTime;
uniform float uAmplitude;
uniform float uWaveLength;
void main() {
    vUv = uv;
    vec3 newPosition = position;

    float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
    newPosition.z = position.z + wave; 

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;
const fragment$1 = `
uniform sampler2D uTexture;
uniform vec2 vUvScale;
varying vec2 vUv;
void main() {
    vec2 uv = (vUv - 0.5) * vUvScale + 0.5;
    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;  
}
`;
function Model() {
  const image = useRef();
  const texture = useTexture("/public/deep.jpg");
  const { width, height } = texture.image;
  useThree();
  const scale = useAspect(
    width,
    height,
    0.3
  );
  const uniforms = useRef({
    uTime: { value: 0 },
    uAmplitude: { value: 0.25 },
    uWaveLength: { value: 5 },
    uTexture: { value: texture },
    vUvScale: { value: new THREE.Vector2(0, 0) }
  });
  useFrame(() => {
    image.current.material.uniforms.uTime.value += 0.04;
    image.current.material.uniforms.uAmplitude.value = 0.15;
    image.current.material.uniforms.uWaveLength.value = 5;
    image.current.scale.x = 5;
    image.current.scale.y = 5.6;
    image.current.material.uniforms.vUvScale.value.set(1, 1);
  });
  return /* @__PURE__ */ jsxs("mesh", { ref: image, scale, children: [
    /* @__PURE__ */ jsx("planeGeometry", { args: [1, 1, 15, 15] }),
    /* @__PURE__ */ jsx(
      "shaderMaterial",
      {
        fragmentShader: fragment$1,
        vertexShader: vertex$1,
        uniforms: uniforms.current
      }
    )
  ] });
}
const Scene$1 = () => {
  return /* @__PURE__ */ jsx(
    Canvas,
    {
      className: "fixed",
      children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(Model, {}) })
    }
  );
};
const Zoom = () => {
  return /* @__PURE__ */ jsx(Scene$1, {});
};

function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return /* @__PURE__ */ jsxs("main", { ref: container, className: "relative h-[200vh]", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Section1, { droponeprogress: scrollYProgress }),
    /* @__PURE__ */ jsx(Section2, { droptwoprogress: scrollYProgress })
  ] });
}
const Section1 = ({ droponeprogress }) => {
  const scale = useTransform(droponeprogress, [0, 1], [1, 0.8]);
  const rotate = useTransform(droponeprogress, [0, 1], [0, -5]);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      style: { scale, rotate },
      id: "home-section",
      className: "main sticky top-0 h-screen bg-[#ede8e4]  \r\n        ",
      children: /* @__PURE__ */ jsxs("div", { className: " relative body flex flex-col gap-4 pt-36 px-10 md:px-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-col-12 grid-rows-2 gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "col-start-1 col-end-4   md:row-start-1  md:col-start-2  md:row-end-2  md:col-end-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-center items-center gap-1", children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                width: "7",
                height: "8",
                viewBox: "0 0 7 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx("rect", { width: "7", height: "8", fill: "black" })
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "  font-montrealthin text-[10px]  ", children: [
              "Working at",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.bounteous.com/",
                  target: "_blank",
                  className: "underline underline-offset-2",
                  children: "Bounteous"
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "col-start-4 col-end-8  md:row-start-1 md:col-start-4  md:row-end-2  md:col-end-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-center items-center gap-1", children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                width: "7",
                height: "8",
                viewBox: "0 0 7 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx("rect", { width: "7", height: "8", fill: "black" })
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "  font-montrealthin text-[10px]   ", children: "Based in India" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: " md:row-start-1 md:col-start-6  md:row-end-2  md:col-end-12", children: /* @__PURE__ */ jsxs("p", { className: "flex flex-row items-center justify-center gap-2 ", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                className: "  font-montrealthin text-xs hover:underline hover:underline-offset-2",
                href: "https://github.com/ma22-maker",
                target: "_blank",
                children: [
                  "Github ",
                  /* @__PURE__ */ jsx("span", { className: "font-extralight m-1", children: " |" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "  font-montrealthin text-xs hover:underline hover:underline-offset-2",
                href: "https://github.com/ma22-maker",
                target: "_blank",
                children: "Linkedin"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative grid grid-cols-12 grid-rows-2 mt-[10vh] md:mt-[20vh]  text-[1.6rem] md:text-[2.2rem]  lg:text-[3rem]  xl:text-[4.5rem] ", children: [
          /* @__PURE__ */ jsx("span", { className: "  font-eikothin font-thin tracking-wide  col-start-1 col-end-12  row-span-1  md:row-start-1  md:col-start-2  md:row-end-2  md:col-end-11", children: "DEEPTHIMAI KANDULA" }),
          /* @__PURE__ */ jsx("span", { className: "font-montrealthin font-semibold tracking-wider col-start-1 col-end-12  row-span-1 min-[446px]:absolute min-[446px]:bottom-[19%] min-[446px]:left-[36%] ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-2 justify-center items-center", children: [
            /* @__PURE__ */ jsx("p", { children: "FRONTEND DEV" }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: " mt-3 md:mt-8",
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx("rect", { width: "14", height: "14", fill: "#090909" })
              }
            )
          ] }) })
        ] })
      ] })
    }
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
    offset: ["start end", "end start"]
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: secRef,
    offset: ["start end", "end start"]
  });
  useEffect(() => {
    const path = pathRef.current;
    const second = secpathRef.current;
    scrollYProgress1.on("change", (e) => {
      const offset = 100 - e * 200;
      path.setAttribute("startOffset", `${offset}%`);
    });
    scrollYProgress2.on("change", (e) => {
      const secondoffset = e * 40;
      second.setAttribute("startOffset", `${secondoffset}%`);
    });
  }, [scrollYProgress1, scrollYProgress2]);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      style: { scale, rotate },
      className: "relative h-screen bg-[#630f0e] text-[3.5vw]",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "z-10 relative", children: [
          /* @__PURE__ */ jsx("div", { ref: textRef, children: /* @__PURE__ */ jsxs(
            motion.svg,
            {
              id: "text-container",
              viewBox: "0 0 1000 200",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ jsx(
                  motion.path,
                  {
                    id: "text-curve",
                    d: "M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0",
                    fill: "none",
                    stroke: "none",
                    strokeWidth: "2"
                  }
                ),
                /* @__PURE__ */ jsx("text", { y: "40", fontSize: "32", style: { fill: "#ede8e4" }, children: /* @__PURE__ */ jsx(
                  motion.textPath,
                  {
                    ref: pathRef,
                    href: "#text-curve",
                    startOffset: "100%",
                    children: "I'm a front-end dev and designer who turns music into code and pixels into perfection."
                  }
                ) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { ref: secRef, children: /* @__PURE__ */ jsxs(
            motion.svg,
            {
              id: "text-container",
              viewBox: "0 0 1000 200",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ jsx(
                  motion.path,
                  {
                    id: "text-curve",
                    d: "M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0",
                    fill: "none",
                    stroke: "none",
                    strokeWidth: "2"
                  }
                ),
                /* @__PURE__ */ jsx("text", { y: "40", fontSize: "32", style: { fill: "#ede8e4" }, children: /* @__PURE__ */ jsx(
                  motion.textPath,
                  {
                    ref: secpathRef,
                    href: "#text-curve",
                    startOffset: "-100%",
                    children: "Designing interfaces as enchanting as your favorite song's chorus"
                  }
                ) })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "z-0 absolute bottom-[1%] left-[28%]  w-5/12 h-full", children: /* @__PURE__ */ jsx(Zoom, {}) })
      ]
    }
  );
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/DeepthimaiKandula/OneDrive - Bounteous/Desktop/Potofolio/virtual-visual/src/layouts/Layout.astro", void 0);

const three = new Proxy({"src":"/_astro/three.ll-TiiA1.jpeg","width":1138,"height":816,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/DeepthimaiKandula/OneDrive - Bounteous/Desktop/Potofolio/virtual-visual/public/three.jpeg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/solar.c-iV83BG.png","width":1032,"height":467,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/DeepthimaiKandula/OneDrive - Bounteous/Desktop/Potofolio/virtual-visual/public/solar.png";
							}
							
							return target[name];
						}
					});

const airbnb = new Proxy({"src":"/_astro/airbnb.DF3VPsC1.png","width":1871,"height":870,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/DeepthimaiKandula/OneDrive - Bounteous/Desktop/Potofolio/virtual-visual/public/airbnb.png";
							}
							
							return target[name];
						}
					});

const foodapp = new Proxy({"src":"/_astro/foodapp.BBIRnni7.png","width":1854,"height":860,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/DeepthimaiKandula/OneDrive - Bounteous/Desktop/Potofolio/virtual-visual/public/foodapp.png";
							}
							
							return target[name];
						}
					});

const vedio = "/_astro/solar.Bn7MkxGL.mp4";

const vertex = `
varying vec2 vUv;
uniform float uTime;
uniform float uAmplitude;
uniform float uWaveLength;
void main() {
  vUv = uv;
  vec3 newPosition = position;

  float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
  newPosition.z = position.z + wave;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;
const fragment = `
uniform sampler2D uTexture;
uniform vec2 vUvScale;
varying vec2 vUv;
void main() {
  vec2 uv = (vUv - 0.5) * vUvScale + 0.5;
  vec4 color = texture2D(uTexture, uv);
  gl_FragColor = color;
}
`;
function WavyImage({ imageSrc }) {
  console.log(imageSrc);
  const image = useRef();
  const texture = useTexture(imageSrc.src);
  useThree();
  const scale = useAspect(texture.image.width, texture.image.height, 0.3);
  const uniforms = useRef({
    uTime: { value: 0 },
    uAmplitude: { value: 0.25 },
    uWaveLength: { value: 5 },
    uTexture: { value: texture },
    vUvScale: { value: new THREE.Vector2(0, 0) }
  });
  useFrame(() => {
    image.current.material.uniforms.uTime.value += 0.04;
    image.current.material.uniforms.uAmplitude.value = 0.12;
    image.current.material.uniforms.uWaveLength.value = 5;
    image.current.scale.x = 8;
    image.current.scale.y = 5;
    image.current.material.uniforms.vUvScale.value.set(1, 1);
  });
  return /* @__PURE__ */ jsxs("mesh", { ref: image, scale, children: [
    /* @__PURE__ */ jsx("planeGeometry", { args: [1, 1, 15, 15] }),
    /* @__PURE__ */ jsx(
      "shaderMaterial",
      {
        fragmentShader: fragment,
        vertexShader: vertex,
        uniforms: uniforms.current
      }
    )
  ] });
}
const Scene = ({ imageSource }) => {
  return /* @__PURE__ */ jsx(Canvas, { className: "fixed", children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(WavyImage, { imageSrc: imageSource }) }) });
};

function Footer() {
  const container = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const paths = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });
  const handleMouseEnter = (e) => {
    setIsHovered(true);
    const vid = e.target;
    vid.muted = true;
    vid.play();
  };
  const handleMouseLeave = (e) => {
    setIsHovered(false);
    const vid = e.target;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
  };
  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
      });
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", { ref: container, id: "work-section", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#c7c0ad] relative", children: [
      /* @__PURE__ */ jsxs("svg", { className: "w-full  relative mb-20", viewBox: "0 0 250 90", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "none",
            id: "curve",
            d: "m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
          }
        ),
        /* @__PURE__ */ jsx("text", { className: "text-[6px] uppercase", style: { fill: "#823a4c" }, children: [...Array(4)].map((_, i) => {
          return /* @__PURE__ */ jsx(
            "textPath",
            {
              className: "font-eikothin",
              ref: (ref) => paths.current[i] = ref,
              startOffset: i * 40 + "%",
              href: "#curve",
              children: "Javascript-ThreeJS-Unity-AR/VR"
            },
            i
          );
        }) })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-7xl  font-eikobold absolute left-[36%] top-[12%] text-[#eaeaea]", children: "PROJECTS" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 grid-rows-10 px-4 gap-x-10", children: [
        /* @__PURE__ */ jsx("div", { className: "col-start-1 col-end-6 row-start-1 row-end-2", children: /* @__PURE__ */ jsx("h3", { className: "text-[5rem] text-[#ede8e4] font-montrealthin ml-3", children: "Selected Work" }) }),
        /* @__PURE__ */ jsxs("div", { className: "col-start-1 col-end-7 row-start-2 row-end-5", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "  row-start-2 row-end-4  col-span-7 z-0 left-[1%] bottom-[35%] absolute  w-[650px] h-[600px]",
              href: "https://github.com/ma22-maker",
              target: "_blank",
              children: /* @__PURE__ */ jsx(Scene, { imageSource: three })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "row-start-4 row-end-5 flex flex-row justify-between mt-2 px-10", children: [
            /* @__PURE__ */ jsx("h1", { className: "  font-montrealthin text-xs", children: "ThreeJS Portfolio" }),
            /* @__PURE__ */ jsx("h3", { className: "  font-montrealthin text-xs", children: "React | ThreeJS" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-start-7 col-end-13 row-start-1 row-end-4 ", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "  row-start-1 row-end-3 col-span-7 z-0 right-[2%] top-[27%] absolute  w-[650px] h-[600px]",
              href: "https://github.com/ma22-maker",
              target: "_blank",
              children: /* @__PURE__ */ jsx(Scene, { imageSource: foodapp })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "row-start-3 row-end-4 flex flex-row justify-between mt-2 px-10", children: [
            /* @__PURE__ */ jsx("h1", { className: "  font-montrealthin text-xs", children: "Tasty Treat" }),
            /* @__PURE__ */ jsx("h3", { className: "  font-montrealthin text-xs", children: "NextJS|Typescript|Redux" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-start-1 col-end-7 row-start-6 row-end-9 relative", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: " row-start-6 row-end-8  col-span-7 z-0 left-[0%] bottom-[-35%] absolute  w-[650px] h-[600px]",
              href: "https://github.com/ma22-maker",
              target: "_blank",
              children: /* @__PURE__ */ jsx(Scene, { imageSource: airbnb })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "row-start-8 row-end-9 flex flex-row justify-between mt-2 px-10", children: [
            /* @__PURE__ */ jsx("h1", { className: "  font-montrealthin text-xs", children: "Airbnb Clone " }),
            /* @__PURE__ */ jsx("h3", { className: " font-montrealthin text-xs", children: "React|Typescript|Redux" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-start-7 col-end-13 row-start-5 row-end-8", children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              width: "750",
              height: "500",
              controls: isHovered,
              autoPlay: isHovered,
              className: " row-start-5 row-end-7",
              onMouseEnter: handleMouseEnter,
              onMouseLeave: handleMouseLeave,
              children: /* @__PURE__ */ jsx("source", { src: vedio, type: "video/mp4" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "row-start-7 row-end-8 flex flex-row justify-between mt-2", children: [
            /* @__PURE__ */ jsxs("h1", { className: "  font-montrealthin text-xs", children: [
              "VR Based Tutoring",
              " "
            ] }),
            /* @__PURE__ */ jsx("h3", { className: " font-montrealthin text-xs", children: "Unity|C#" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Logos, { scrollProgress: scrollYProgress })
  ] });
}
const Logos = ({ scrollProgress }) => {
  const y = useTransform(scrollProgress, [0, 1], [-700, 0]);
  return /* @__PURE__ */ jsx("div", { className: "h-[450px] bg-black overflow-hidden ", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      style: { y },
      className: " h-full  bg-black text-white flex justify-center gap-10 items-center p-10",
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-40 border-2 border-[#ede8e4] rounded-xl px-[60px] py-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-3 items-end justify-end  ", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-[2.5rem] font-montrealmed  basis-8/12 ", children: [
            /* @__PURE__ */ jsx("p", { className: "relative", children: " Lets Create something Great Together" }),
            /* @__PURE__ */ jsx("span", { className: "absolute left-[29%] top-[38%]", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                id: "SvgjsSvg1011",
                width: "20",
                height: "20",
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xmlns:svgjs": "http://svgjs.com/svgjs",
                children: [
                  /* @__PURE__ */ jsx("defs", { id: "SvgjsDefs1012" }),
                  /* @__PURE__ */ jsx("g", { id: "SvgjsG1013", children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: "10",
                      height: "10",
                      children: /* @__PURE__ */ jsx(
                        "rect",
                        {
                          width: "20",
                          height: "20",
                          x: "3.92",
                          y: "3.92",
                          "data-name": "49. Box, design, geometry, square, stop",
                          rx: ".9",
                          fill: "#ede8e4",
                          class: "color000 svgShape"
                        }
                      )
                    }
                  ) })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: "text-xl font-eikomed basis-4/12 flex flex-row gap-2 items-center hover:underline hover:underline-offset-2",
              href: "mailto:deepthimai.kandula@gmail.com?body=Hey There!",
              children: [
                "SEND ME AN EMAIL",
                /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    id: "SvgjsSvg1052",
                    width: "20",
                    height: "20",
                    xmlns: "http://www.w3.org/2000/svg",
                    version: "1.1",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    "xmlns:svgjs": "http://svgjs.com/svgjs",
                    children: [
                      /* @__PURE__ */ jsx("defs", { id: "SvgjsDefs1053" }),
                      /* @__PURE__ */ jsx("g", { id: "SvgjsG1054", children: /* @__PURE__ */ jsxs(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 48 48",
                          width: "20",
                          height: "20",
                          children: [
                            /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h48v48H0z" }),
                            /* @__PURE__ */ jsx(
                              "path",
                              {
                                d: "m24 8-2.83 2.83L32.34 22H8v4h24.34L21.17 37.17 24 40l16-16z",
                                fill: "#ede8e4",
                                class: "color000 svgShape"
                              }
                            )
                          ]
                        }
                      ) })
                    ]
                  }
                ) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: " flex  flex-row justify-between text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row pr-20 gap-3", children: [
            /* @__PURE__ */ jsx("p", { className: "hover:underline hover:underline-offset-2", children: "My work at" }),
            /* @__PURE__ */ jsx("a", { href: "https://github.com/ma22-maker", target: "_blank", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                id: "SvgjsSvg1048",
                width: "20",
                height: "20",
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xmlns:svgjs": "http://svgjs.com/svgjs",
                children: [
                  /* @__PURE__ */ jsx("defs", { id: "SvgjsDefs1049" }),
                  /* @__PURE__ */ jsx("g", { id: "SvgjsG1050", children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 1792 1792",
                      width: "20",
                      height: "20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5T1376 1664h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105T1386 856q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T578 459.5 492 446q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5T484 1274q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z",
                          fill: "#ede8e4",
                          class: "color000 svgShape"
                        }
                      )
                    }
                  ) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("a", { href: "https://github.com/ma22-maker", target: "_blank", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                id: "SvgjsSvg1063",
                width: "20",
                height: "20",
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xmlns:svgjs": "http://svgjs.com/svgjs",
                children: [
                  /* @__PURE__ */ jsx("defs", { id: "SvgjsDefs1064" }),
                  /* @__PURE__ */ jsx("g", { id: "SvgjsG1065", children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 39 39",
                      width: "20",
                      height: "20",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M32.728 38.651H6.531c-3.459 0-6.273-2.808-6.273-6.26V6.26C.258 2.808 3.072 0 6.531 0h26.197C36.186 0 39 2.808 39 6.26v26.132c0 3.452-2.814 6.259-6.272 6.259Zm-19.379-6.698h.008V15.281H8.17v16.672h5.178ZM10.76 13.004a2.998 2.998 0 0 0 3.002-3.002A3.008 3.008 0 0 0 10.76 7a3.003 3.003 0 0 0-3.002 3.002 3.003 3.003 0 0 0 3.002 3.002Zm21.998 18.95v-9.14c0-4.491-.975-7.946-6.215-7.946-2.519 0-4.21 1.38-4.905 2.69h-.07v-2.277h-4.967v16.672h5.178v-8.25c0-2.176.413-4.281 3.11-4.281 2.652 0 2.691 2.488 2.691 4.421v8.11h5.178Z",
                          fill: "#ede8e4",
                          class: "color000 svgShape"
                        }
                      )
                    }
                  ) })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-white basis-6/12 flex items-center gap-1 ", children: [
            "©-2024 made with",
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              " ",
              /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  width: "10",
                  height: "10",
                  viewBox: "0 0 24 24",
                  id: "Love",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fill: "#d85b53",
                      d: "M4.379 12.274A4.841 4.841 0 0 1 3 8.89C3 6.189 5.216 4 7.95 4c1.674 0 3.154.82 4.05 2.077A4.962 4.962 0 0 1 16.05 4C18.784 4 21 6.189 21 8.889a4.845 4.845 0 0 1-1.507 3.512L12 20l-7.621-7.726Z",
                      class: "color000000 svgShape"
                    }
                  )
                }
              )
            ] }),
            "Deepthimai kandula. All Rights Reserved."
          ] })
        ] })
      ] })
    }
  ) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Deepthimai Kandula" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", Home, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/DeepthimaiKandula/OneDrive - Bounteous/Desktop/Potofolio/virtual-visual/src/components/Home", "client:component-export": "default" })}  ${renderComponent($$result2, "Footer", Footer, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/DeepthimaiKandula/OneDrive - Bounteous/Desktop/Potofolio/virtual-visual/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "C:/Users/DeepthimaiKandula/OneDrive - Bounteous/Desktop/Potofolio/virtual-visual/src/pages/index.astro", void 0);

const $$file = "C:/Users/DeepthimaiKandula/OneDrive - Bounteous/Desktop/Potofolio/virtual-visual/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

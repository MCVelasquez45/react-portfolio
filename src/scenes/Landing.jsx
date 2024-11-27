import { useEffect, useRef, useState } from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const nameRef = useRef(null); // Ref to measure the name width
  const [brushWidth, setBrushWidth] = useState(0); // State for brush width

  useEffect(() => {
    // Measure the width of the name on mount and resize
    const updateBrushWidth = () => {
      if (nameRef.current) {
        setBrushWidth(nameRef.current.offsetWidth);
      }
    };

    updateBrushWidth(); // Initial calculation
    window.addEventListener("resize", updateBrushWidth); // Recalculate on resize

    return () => {
      window.removeEventListener("resize", updateBrushWidth);
    };
  }, []);

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-full
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-full object-cover h-[400px]"
              src="assets/profileImg.jpg"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[400px] rounded-t-full object-cover h-[600px]"
            src="assets/profileImg.jpg"
          />
        )}
      </div>

      {/* MAIN TEXT SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Mark{" "}
            <span
  ref={nameRef}
  className="relative inline-block xs:text-deep-blue xs:font-semibold z-20"
>
  Velasquez
  {/* Brush effect */}
  <span
    className="absolute left-[-22px] top-[40%] h-auto bg-no-repeat bg-center bg-cover z-[-1]"
    style={{
      width: `275px`, // Match the width of the name dynamically
      height: `70px`, // Adjust height for the natural brush aspect ratio
      transform: "translateY(-50%)", // Center vertically beneath the name
      backgroundImage: "url('./assets/brush.png')", // Brush stroke image
    }}
  ></span>
</span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
          Hi, I’m Mark Velasquez, a skilled MERN Stack developer with a strong focus on front and back-end web development. Combining technical expertise with a passion for crafting user-centric solutions, I specialize in building responsive, interactive, and scalable applications. My approach blends creativity, precision, and a commitment to delivering impactful results, whether through dynamic interfaces or robust full-stack systems.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        {/* SOCIAL MEDIA ICONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;

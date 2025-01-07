import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Enhanced Project Component to Support External Links or "Coming Soon" Message
const Project = ({ title, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        These projects highlight the tech stacks I use, showcasing my passion for innovation and skill refinement. Feel free to reach out to discuss my process or explore the code on GitHub!
        </p>
        {/* Conditional rendering for link or fallback message */}
        {link && link !== "#" ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 text-red underline"
          >
            View Project
          </a>
        ) : (
          <p className="mt-5 text-yellow-500">
            This project is coming soon. Stay tuned!
          </p>
        )}
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 mt-10">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mt">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Explore a showcase of software development projects demonstrating my expertise in front-end and back-end development. From dynamic user interfaces to robust back-end solutions, these projects highlight creativity, technical skills, and problem-solving with tools like React, Node.js, MongoDB, and more.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" link="https://vectorsquare.vercel.app/" />
          <Project title="Project 2" link="https://spotiy-api-project-rux9.vercel.app/" />

          {/* ROW 2 */}
          <Project title="Project 3" link="#" />
          <Project title="Project 4" link="#" />
          <Project title="Project 5" link="#" />

          {/* ROW 3 */}
          <Project title="Project 6" link="#" />
          <Project title="Project 7" link="#" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
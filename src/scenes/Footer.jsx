import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 pt-10 bg-blue-400">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center mt-5">
          <p className="font-playfair font-semibold text-2xl text-white">
            Mark Velasquez
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1RdImWCmtAC75zg0t1loFqUT8mndPVnMq"
            download="Mark_Velasquez_Resume"
            className="text-white underline hover:text-gray-300 transition duration-300"
          >
            Download Resume
          </a>
          <p className="font-playfair text-md text-white">
            ©2024 Velasquez. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
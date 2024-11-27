import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer
      className="h-64 pt-10 bg-[rgb(44,188,233)]" // Correct Tailwind class for background
    >
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center mt-5">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Mark Velasquez
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2024 Velasquez. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

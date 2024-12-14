const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {/* LinkedIn Icon */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/mark-velasquez4545"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>

      {/* Twitter Icon */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>

      {/* Facebook Icon */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>

      {/* Instagram Icon */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>

      {/* GitHub Icon */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/MCVelasquez45"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/git-hub.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;

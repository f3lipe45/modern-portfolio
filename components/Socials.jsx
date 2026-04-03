import { FaYoutube, FaInstagram, FaTiktok, FaDiscord } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex gap-x-6 text-2xl">
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
        <FaYoutube />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
        <FaInstagram />
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
        <FaTiktok />
      </a>
      <a href="https://discord.gg/VX4G7pwMfp" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
        <FaDiscord />
      </a>
    </div>
  );
};

export default Socials;
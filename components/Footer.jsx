import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-md border-t border-accent/10 z-40 py-6">
      <div className="container mx-auto px-6 flex justify-center">
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
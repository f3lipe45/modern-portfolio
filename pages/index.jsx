import { motion } from "framer-motion";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-secondary flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 pt-20 xl:pt-40">
        <div className="max-w-2xl">
          {/* Nome da loja */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-6xl xl:text-7xl font-bold tracking-tighter"
          >
            Voltshop
          </motion.h1>

          {/* O que a gente faz */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl text-accent mt-2 mb-6"
          >
            Recursos premium para servidores
          </motion.p>

          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md text-lg text-white/70"
          >
            Sua loja de confiança para scripts, mapas, veículos e tudo que seu servidor precisa.
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-10"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
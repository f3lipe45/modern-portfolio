import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-secondary pt-20 pb-32">
      <div className="container mx-auto px-6">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="h1 text-5xl xl:text-6xl font-bold text-center mb-12"
        >
          Nossa Equipe
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Você pode adicionar quantos membros quiser aqui */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl text-center">
            <div className="w-24 h-24 mx-auto bg-accent/20 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">Felipe</h3>
            <p className="text-accent">Dono / Desenvolvedor</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl text-center">
            <div className="w-24 h-24 mx-auto bg-accent/20 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">Brayan</h3>
            <p className="text-accent">Dono / Desenvolvedor</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl text-center">
            <div className="w-24 h-24 mx-auto bg-accent/20 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">Duda</h3>
            <p className="text-accent">Dona</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Updates = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-secondary pt-20 pb-32">
      <div className="container mx-auto px-6">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="h1 text-5xl xl:text-6xl font-bold text-center mb-12"
        >
          Atualizações da Loja
        </motion.h1>

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl">
            <div className="text-accent text-sm mb-2">02/04/2016</div>
            <h3 className="text-2xl font-semibold mb-3">Nova era Chegou!</h3>
            <p className="text-white/70">O recomeço da VoltShop.</p>
          </div>

          {/* Adicione mais atualizações aqui depois */}
        </div>
      </div>
    </div>
  );
};

export default Updates;
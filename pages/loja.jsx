import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const products = [
  {
    id: 1,
    name: "VIP Premium",
    price: "R$ 29,90",
    desc: "Acesso a comandos exclusivos, tag VIP, skin especial e prioridade no servidor.",
    image: "/produtos/vip.png",
    tebex: "https://SEU-TEBEX.tebex.io/package/XXXXX",
  },
  {
    id: 2,
    name: "Mapa Customizado",
    price: "R$ 49,90",
    desc: "Mapa exclusivo com cidade moderna, casas e arenas de PVP.",
    image: "/produtos/mapa.png",
    tebex: "https://SEU-TEBEX.tebex.io/package/YYYYY",
  },
  // adicione mais produtos aqui
];

const Loja = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20 pb-32">
      <div className="container mx-auto px-6">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="h1 text-5xl xl:text-6xl font-bold text-center mb-4"
        >
          Loja Voltshop
        </motion.h1>
        <p className="text-center text-white/70 text-xl mb-12">Escolha o produto e compre direto no Tebex</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              onClick={() => setSelected(product)}
              className="bg-white/5 backdrop-blur-md p-6 rounded-3xl cursor-pointer hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-2xl font-bold">{product.name}</h3>
              <p className="text-accent text-3xl font-semibold mt-2">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="bg-zinc-900 rounded-3xl max-w-lg w-full mx-4 p-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-64 object-cover rounded-2xl mb-6"
            />
            <h2 className="text-4xl font-bold">{selected.name}</h2>
            <p className="text-accent text-5xl font-bold mt-2 mb-6">{selected.price}</p>
            <p className="text-white/70 text-lg">{selected.desc}</p>

            <a
              href={selected.tebex}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-accent hover:bg-orange-600 text-black font-bold py-4 rounded-2xl mt-10 text-xl transition-colors"
            >
              COMPRAR AGORA
            </a>

            <button
              onClick={() => setSelected(null)}
              className="text-white/60 text-sm mt-6 w-full"
            >
              Fechar
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Loja;
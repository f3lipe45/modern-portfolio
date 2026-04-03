import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`min-h-screen bg-[#0a0a0a] text-white ${sora.variable} font-sora relative overflow-hidden`}
    >
      {/* metadata */}
      <Head>
        <title>Voltshop</title>
        <meta
          name="description"
          content="Loja de recursos premium para servidores"
        />
        <meta name="theme-color" content="#FF6B00" />
      </Head>

      {/* Splash vermelho/laranja (igual da página Trabalhos) */}
      <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-gradient-to-tr from-red-600/30 via-transparent to-transparent pointer-events-none" />

      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
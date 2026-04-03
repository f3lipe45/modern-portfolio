import '../styles/globals.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';          // ← linha nova

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
      <Footer />                                     {/* ← linha nova */}
    </Layout>
  );
}

export default MyApp;
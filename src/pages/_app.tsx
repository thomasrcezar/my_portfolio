// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout/layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.locale || 'en';

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const pageVariants = {
    initial: {
      opacity: 0,
      // x: '-100vw', // Example slide-in
    },
    in: {
      opacity: 1,
      // x: 0, // Example slide-in
    },
    out: {
      opacity: 0,
      // x: '100vw', // Example slide-out
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route} // AnimatePresence needs a key to detect changes
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

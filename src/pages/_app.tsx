import { ChakraProvider } from "@chakra-ui/react";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
// import "custom-fonts.css";
import theme from "theme";
import { AnimatePresence, motion } from 'framer-motion'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

const LayoutDefault = ({ children }: any) => <>{children}</>;

function App({ Component, pageProps, router }: any) {
  const Layout = Component.Layout || LayoutDefault;
  const layoutProps = pageProps.layoutProps || {};

  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Rollforchange</title>
          <meta name="description" content="Rolling for change" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Layout {...layoutProps}>
              <Component {...pageProps} />
            </Layout>
          </motion.div>
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
}

export default App;
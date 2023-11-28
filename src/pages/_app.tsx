import { ChakraProvider } from "@chakra-ui/react";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
// import "custom-fonts.css";
import theme from "theme";


const LayoutDefault = ({ children }: any) => <>{children}</>;

function App({ Component, pageProps }: any) {
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
        <Layout {...layoutProps}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
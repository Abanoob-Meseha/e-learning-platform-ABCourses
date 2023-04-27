// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { SSRProvider } from '@react-aria/ssr';
import ResponsiveNavbar from '../components/responsiveNavbar/responsiveNavbar';
import Head from 'next/head';



function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <SSRProvider>
      <Head>
        <title>ABCourses</title>
        <link rel="icon" href="/assets/LOGO.png" />
      </Head>
      <ResponsiveNavbar/>
        <Component {...pageProps} />
        <footer style={{textAlign:"center"}}> <h3> Abanoub Meseha 2023</h3></footer>
      </SSRProvider>
    </NextUIProvider>
  );
}

export default MyApp;

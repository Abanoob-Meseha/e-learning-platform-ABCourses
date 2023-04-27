// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { SSRProvider } from '@react-aria/ssr';


function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </NextUIProvider>
  );
}

export default MyApp;

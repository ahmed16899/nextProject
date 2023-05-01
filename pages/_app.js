import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps }}) {
  
  useEffect(()=>{
    import ("bootstrap/dist/js/bootstrap.min.js");
  },[]);
  return(
    <SessionProvider session={session}>
    <Component {...pageProps} />
    </SessionProvider>
  )
}

import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useLayoutEffect } from 'react'
import type { AppProps } from 'next/app'
import authorization from '../stores/authorization'
import { Routes } from '../constants/authorization'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useLayoutEffect(()=>{

    if (router.pathname == `/${Routes.AUTHORIZATION_PAGE}` && authorization.isEnter)
    {
      authorization.isEnter = false;
    }
    else if (router.pathname == `/${Routes.BUTTON_ENTER}` && !authorization.isEnter)
    {
      router.push(Routes.AUTHORIZATION_PAGE);
    }
    

  }, [])


  return <Component {...pageProps} />
}

export default MyApp

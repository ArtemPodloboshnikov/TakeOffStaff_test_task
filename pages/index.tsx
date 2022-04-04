import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useLayoutEffect } from 'react';

import { Routes } from '../constants/authorization';

const Home: NextPage = () => {

  const router = useRouter();

  useLayoutEffect(()=>{

    router.push(Routes.AUTHORIZATION_PAGE);
    
  }, [])

  return <></>
}

export default Home

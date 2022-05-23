import Head from 'next/head';
/* import {app} from '../firebaseConfig';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getServerSession } from 'next-auth/next'
import { useSession } from "next-auth/react" */

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";


export default function Home() {
  
/*   const router= useRouter();
  useEffect(() =>{
    let token = sessionStorage.getItem('Token')
    if(!token){
     router.push("/register")
    }
 })
 const search = e => {
   e.preventDefault();
 } */
  return (
    <div className="items-center justify-center">
      <Head>
        <title>DingDong App</title>
        <meta name="description" content="Real Estate Service Network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 {/*  <Navbar /> */}
 <Header className="" />

        {/* Hero */}
    <HeroSection className="w-" />

        {/* Footer */}
    <Footer className="flex items-center"/>

    </div>
  )
}
/* export async function getServerSideProps(context){
  const session = await getServerSession(context)
  return {
    props: {
      session
    }
  }
} */
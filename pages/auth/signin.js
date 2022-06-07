import { getProviders, signIn as SignWithProvider } from "next-auth/react"
import { React, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaGoogle, FaRegEnvelope, FaLock } from "react-icons/fa";
import Head from 'next/head';

export default function Signin({ providers }) {
    const router = useRouter();
    useEffect(() => {
        let token = sessionStorage.getItem('Token')
        if (token) {
            router.push("/")
        }
    }, [])
    return (
        <>
            <Head>
                <title>Register Page</title>
                <meta name="description" content="Login Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col justify-center items-center text-center w-full flex-1 min-h-screen px-20 bg-blue-100">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                    {/* Sign In Section*/}
                    <div className="w-3/5 p-5">
                        <div className="font-bold">
                            DingDong
                        </div>


                        <div className="py-2">
                            <h2 className="text-2xl font-bold mb-2 text-[#0199dc]">Sign In to your Account</h2>
                        </div>
                        <div className="border-2 w-10 border-[#0199dc] inline-block mb-2"></div>


                        {Object.values(providers).map((provider) => (

                            <div key={provider.name} className="flex justify-center my-2 cursor-pointer">
                                <a onClick={() => SignWithProvider(provider.id, { callbackUrl: "/" })} className="border-2 border-[#0199dc] p-3 rounded-full mx-1" >
                                    <FaGoogle className=" text-[#0199dc]" />
                                </a>
                                {/*  <a href="#" className="border-2 border-[#0199dc] p-3 rounded-full mx-1">
                       <FaLinkedinIn className=" text-[#0199dc]"/> 
                   </a>
                   <a href="#" className="border-2 border-[#0199dc] p-3 rounded-full mx-1">
                       <FaFacebookF className=" text-[#0199dc]"/> 
                   </a>
 */}               </div>
                        ))}
                        <p className="text-gray-500 my-3">Or you can use your email address</p>
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                                <FaRegEnvelope className="text-gray-400 m-2" />
                                <input
                                    type="email" name="email" placeholder="Email"
                                    className="bg-gray-100 outline-none flex-1"
                                /* onChange={(event) => setEmail(event.target.value)} */
                                />
                            </div>
                            <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-2">
                                <FaLock className="text-gray-400 m-2" />
                                <input type="password" name="password" placeholder="Password"
                                    className="bg-gray-100 outline-none flex-1"
                                /*  onChange={(event) => setPassword(event.target.value)} */
                                />
                            </div>
                            <div className="flex w-64 mb-5 justify-between">
                                <label className="text-xs flex items-center"><input type="checkbox" name="remember" className="mr-2" />Remember me</label>
                                <a href="#" className="text-xs">Forgot Password</a>
                            </div>
                            <button /*  onClick={signUp} */ className="border-2 border-[#0199dc] rounded px-12 py-3 inline-block hover:text-white hover:bg-[#0199dc]">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    {/* Sign Up Section*/}
                    <div className="w-2/5 p-5 bg-[#0199dc] text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <h2 className="text-2xl font-bold mb-2">Join our B2B Program</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-10">Sign up with our B2B program and enjoy access to thousands of Consultants, Developers, Agents, Propeties for sale and more..</p>

                    </div>
                </div>
            </main>


        </>
    )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    const providers = await getProviders(context)
    return {
        props: { providers },
    }
}
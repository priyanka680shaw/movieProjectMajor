import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SlSocialTwitter } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
    return (
        <>
            <footer>
                <div className='w-full flex justify-center items-center p-4 bg-gray-800 text-white'>
                    <div className='w-full flex justify-center items-center p-4 flex-col'>
                        <div className='w-full flex justify-center items-center p-4'>
                            <ul className='w-full flex justify-center items-center p-4'>
                                <li className='mr-4 ml-4 font-bold text-lg hover:text-red-600 hover:cursor-pointer'>Terms Of Uses</li>
                                <li className='mr-4 ml-4 font-bold text-lg hover:text-red-600 hover:cursor-pointer'>Privecy-Policy</li>
                                <li className='mr-4 ml-4 font-bold text-lg hover:text-red-600 hover:cursor-pointer'>About</li>
                                <li className='mr-4 ml-4 font-bold text-lg hover:text-red-600 hover:cursor-pointer'>Blog</li>
                                <li className='mr-4 ml-4 font-bold text-lg hover:text-red-600 hover:cursor-pointer'>FAQ</li>
                            </ul>
                        </div>
                        <p className='w-[900px] text-center font-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className='w-full flex justify-center items-center p-4'>
                            <ul className='w-full flex justify-center items-center p-4'>
                                <li className='mr-4 ml-4 font-bold text-3xl hover:text-red-900 hover:cursor-pointer hover:bg-red-300 hover:rounded-[50%] w-[50px] h-[50px] flex justify-center items-center   '><FaFacebook /></li>
                                <li className='mr-4 ml-4 font-bold text-3xl hover:text-red-900 hover:cursor-pointer hover:bg-red-300 hover:rounded-[50%] w-[50px] h-[50px] flex justify-center items-center   '><GrInstagram /></li>
                                <li className='mr-4 ml-4 font-bold text-3xl hover:text-red-900 hover:cursor-pointer hover:bg-red-300 hover:rounded-[50%] w-[50px] h-[50px] flex justify-center items-center   '><SlSocialTwitter /></li>
                                <li className='mr-4 ml-4 font-bold text-3xl hover:text-red-900 hover:cursor-pointer hover:bg-red-300 hover:rounded-[50%] w-[50px] h-[50px] flex justify-center items-center   '><FaLinkedin /></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

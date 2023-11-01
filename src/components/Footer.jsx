import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaGithub , FaFacebookF  } from 'react-icons/fa'
import logo from '../assets/favicon.png'
import { FaSquareXTwitter } from 'react-icons/fa6'
const Footer = () => {
  return (
    <div className='rounded-footer mt-8 pt-8 text-primary mb-4'>
      <div className='grid md:grid-cols-3'>
        <div className='flex justify-center md:justify-start'>
          <div className='w-full md:w-[400px] py-4  md:text-left'>
            <div className='flex'>
              <img src={logo} alt='logo' className='ml-2 w-20' />
              <h1 className='text-2xl mx-3 my-auto font-semibold font-mono text-center'>
                Crypto Market
              </h1>
            </div>
            <p className='ml-6 mt-3 font-mono font-thin'>
              The best place to keep track of your
              <br />
              cryptocurrency investments, monitor market <br />
              trends, and make informed financial decisions.
            </p>
          </div>
        </div>

        <div className='flex justify-evenly mt-3 w-full md:max-w-[600px] uppercase'>
          <div className='mx-4'>
            <h2 className='font-bold mt-3 text-base text-accent'>Support</h2>
            <ul className='mt-2 cursor-pointer'>
              <li className='text-sm py-2 font-mono'>Help Center</li>
              <li className='text-sm py-2 font-mono'>Contact Us</li>
              <li className='text-sm py-2 font-mono'>API Status</li>
              <li className='text-sm py-2 font-mono'>Documentation</li>
            </ul>
          </div>
          <div className='mx-4'>
            <h2 className='font-bold mt-3 text-base  text-accent'>Info</h2>
            <ul className='mt-2 cursor-pointer'>
              <li className='text-sm py-2 font-mono'>About Us</li>
              <li className='text-sm py-2 font-mono'>Careers</li>
              <li className='text-sm py-2 font-mono'>Invest</li>
              <li className='text-sm py-2 font-mono'>Legal</li>
            </ul>
          </div>
          <div className='mx-4'>
            <h2 className='font-bold mt-3 text-base  text-accent'>Resources</h2>
            <ul className='mt-2 cursor-pointer'>
              <li className='text-sm py-2 font-mono'>Our Products</li>
              <li className='text-sm py-2 font-mono'>User Flow</li>
              <li className='text-sm py-2 font-mono'>Premium Support</li>
              <li className='text-sm py-2 font-mono'>User Strategy</li>
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[300px] py-4 relative'>
              <p className='text-center md:text-left mt-1 text-accent text-lg font-bold'>
                Follow Us On
              </p>
              <div className='flex py-4 justify-between text-accent mr-6 mt-3'>
                <AiOutlineInstagram size={33} className='cursor-pointer' />
                <FaSquareXTwitter size={30} className='cursor-pointer' />
                <FaFacebookF size={30} className='cursor-pointer' />
                <FaGithub size={30} className='cursor-pointer' />
              </div>
              <p className='text-left mt-5 font-bold'>© 2025 TockenX</p>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center py-4 mt-4 font-mono hover:text-blue-700 duration-300 ease-in-out'>
        Powered by Coin Gecko Api
      </p>
    </div>
  )
}

export default Footer
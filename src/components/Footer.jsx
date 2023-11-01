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
              <img
                src={logo}
                alt='logo'
                className='ml-2 w-20 transition-transform transform hover:scale-110 duration-500 ease-in-out'
              />
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
            <h2 className='font-bold mt-3 text-base text-accent hover:text-violet-600'>
              Support
            </h2>
            <ul className='mt-2 cursor-pointer'>
              <li className='text-sm py-2 font-mono hover:text-blue-300'>
                Help Center
              </li>
              <li className='text-sm py-2 font-mono hover:text-blue-300'>
                Contact Us
              </li>
              <li className='text-sm py-2 font-mono hover:text-blue-300'>
                API Status
              </li>
              <li className='text-sm py-2 font-mono hover:text-blue-300'>
                Documentation
              </li>
            </ul>
          </div>
          <div className='mx-4'>
            <h2 className='font-bold mt-3 text-base  text-accent hover:text-violet-600'>
              Info
            </h2>
            <ul className='mt-2 cursor-pointer'>
              <li className='text-sm py-2 font-mono hover:text-blue-300'>
                About Us
              </li>
              <li className='text-sm py-2 font-mono hover:text-blue-300'>
                Careers
              </li>
              <li className='text-sm py-2 font-mono hover:text-blue-300'>
                Invest
              </li>
              <li className='text-sm py-2 font-mono hover:text-blue-300'>
                Legal
              </li>
            </ul>
          </div>
          <div className='mx-4'>
            <h2 className='font-bold mt-3 text-base  text-accent hover:text-violet-600'>
              Resources
            </h2>
            <ul className='mt-2 cursor-pointer'>
              <li className='text-sm py-2 font-mono hover:text-blue-300'>
                Our Products
              </li>
              <li className='text-sm py-2 font-mono hover:text-blue-300'>
                User Flow
              </li>
              <li className='text-sm py-2 font-mono hover:text-blue-300'>
                Premium Support
              </li>
              <li className='text-sm py-2 font-mono hover:text-blue-300'>
                User Strategy
              </li>
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[300px] py-4 relative'>
              <p className='text-center md:text-left mt-1 text-accent text-lg font-bold hover:text-violet-600'>
                Follow Us On
              </p>
              <div className='flex py-4 justify-between text-accent mr-6 mt-3'>
                <AiOutlineInstagram
                  size={36}
                  className='cursor-pointer hover:text-violet-600'
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/zoro.diablo/',
                      '_blank'
                    )
                  }
                />
                <FaSquareXTwitter
                  size={30}
                  className='cursor-pointer mt-[2px] hover:text-violet-600'
                  onClick={() =>
                    window.open('https://twitter.com/zorodiablo', '_blank')
                  }
                />
                <FaFacebookF
                  size={30}
                  className='cursor-pointer hover:text-violet-600'
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/people/Vyshnav-K/pfbid02WU4EtTFncG4NZ37JTyvcbX18XEG74uNGxghccUvuMmWejtL6Ek3Uvm4NdWit3x7Gl/?mibextid=ZbWKwL',
                      '_blank'
                    )
                  }
                />
                <FaGithub
                  size={30}
                  className='cursor-pointer hover:text-violet-600'
                  onClick={() =>
                    window.open('https://github.com/zoro-diablo', '_blank')
                  }
                />
              </div>
              <p className='text-left mt-5 font-bold'>© 2025 TockenX</p>
            </div>
          </div>
        </div>
      </div>
      <p
        className='text-center py-4 mt-4 font-mono hover:text-blue-700 duration-300 ease-in-out cursor-pointer'
        onClick={() => window.open('https://github.com/zoro-diablo', '_blank')}
      >
        Develpoed by zoro-diablo
      </p>
    </div>
  )
}

export default Footer
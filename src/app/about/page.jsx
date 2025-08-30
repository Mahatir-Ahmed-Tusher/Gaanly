'use client'
import React from 'react'
import Link from 'next/link'
import { MdEmail, MdPerson, MdMusicNote } from 'react-icons/md'

const About = () => {
  return (
    <div className='w-11/12 mt-20 mx-auto text-white min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl lg:text-6xl font-bold text-lavender-400 mb-4'>
            About Gaanly
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Your gateway to unlimited music streaming and discovery
          </p>
        </div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-8 mb-12'>
          {/* What is Gaanly */}
          <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10'>
            <div className='flex items-center gap-3 mb-4'>
              <MdMusicNote className='text-3xl text-lavender-400' />
              <h2 className='text-2xl font-bold text-lavender-300'>What is Gaanly?</h2>
            </div>
            <p className='text-gray-300 leading-relaxed'>
              Gaanly is a revolutionary music streaming platform that brings the world's music to your fingertips. 
              Built with cutting-edge technology and powered by open-source APIs, Gaanly offers an unparalleled 
              music listening experience with high-quality streaming, personalized playlists, and intelligent 
              music discovery.
            </p>
          </div>

          {/* Features */}
          <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10'>
            <h2 className='text-2xl font-bold text-lavender-300 mb-4'>Key Features</h2>
            <ul className='text-gray-300 space-y-2'>
              <li>• High-quality music streaming</li>
              <li>• Personalized playlists</li>
              <li>• Smart music recommendations</li>
              <li>• Multi-language support</li>
              <li>• Cross-platform accessibility</li>
              <li>• Offline listening capabilities</li>
            </ul>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-12'>
          <h2 className='text-3xl font-bold text-lavender-300 mb-6 text-center'>Our Mission</h2>
          <p className='text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto'>
            At Gaanly, we believe music is a universal language that connects people across cultures and borders. 
            Our mission is to democratize music access, providing a seamless platform where music lovers can discover, 
            stream, and share their favorite tunes without limitations.
          </p>
        </div>

        {/* Founder Section */}
        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-12'>
          <div className='text-center'>
            <div className='flex items-center justify-center gap-3 mb-4'>
              <MdPerson className='text-3xl text-lavender-400' />
              <h2 className='text-3xl font-bold text-lavender-300'>Founder</h2>
            </div>
            <h3 className='text-2xl font-semibold text-white mb-2'>Mahatir Ahmed Tusher</h3>
            <p className='text-gray-300 text-lg'>
              The visionary behind Gaanly, Mahatir Ahmed Tusher is passionate about creating innovative 
              solutions that bridge technology and music. With a deep understanding of both the technical 
              and creative aspects of music streaming, Mahatir has built Gaanly from the ground up to 
              revolutionize how people experience music online.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-12'>
          <div className='text-center'>
            <div className='flex items-center justify-center gap-3 mb-4'>
              <MdEmail className='text-3xl text-lavender-400' />
              <h2 className='text-3xl font-bold text-lavender-300'>Contact Us</h2>
            </div>
            <p className='text-gray-300 text-lg mb-4'>
              Have questions, suggestions, or want to collaborate? We'd love to hear from you!
            </p>
            <a 
              href='mailto:mahatirtusher@gmail.com'
              className='inline-flex items-center gap-2 bg-lavender-500 hover:bg-lavender-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300'
            >
              <MdEmail />
              mahatirtusher@gmail.com
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className='text-center'>
          <Link 
            href='/'
            className='inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 border border-white/20'
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About

// Desc: About page
import React from 'react'
import Testimonals from '../components/Testimonials'
import Programs from '../components/Programs'
import Campus from '../components/Campus'

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
       <div>
      <h1 className='text-3xl font-bold mb-4 text-blue-800'>About PrimeReal Estate</h1>
      <h2 className='text-3xl mb-4 text-blue-800'>Company Overview and Services Offered</h2>
      <p className='mb-4 text-slate-500'>For Sellers & Renters: Post your property with ease and reach thousands of potential buyers and renters. Showcase your home with detailed descriptions, high-quality images, and property features.
For Buyers: Browse through a wide variety of properties, tailored to your needs. Use our advanced search filters to find homes based on price, location, size, and more.
Secure & Reliable: With built-in authentication, we ensure all users are verified to create a secure environment for real estate transactions.
</p>
        </div>
      <div>
        <Programs/>
      </div>
      
      <h2 className='text-3xl mb-4 text-blue-800'>Team and Commitment to Safety</h2>
      <p className='mb-4 text-slate-700'>Our success is driven by our dedicated and experienced team of professionals. Led by industry experts with decades of experience, our team is passionate about delivering results that exceed expectations. From architects and engineers to project managers and skilled tradespeople, every member of our team is committed to excellence and continuous improvement. <br /> </p>
      <div>
        <Campus/>
      </div>
      
      <div>
      <div><h2 className='text-3xl mb-4 text-blue-800'> Testimonials and Case Studies</h2>
      <p className='mb-4 text-slate-700'>Our work speaks for itself, and we are proud to showcase the results we’ve achieved for our clients. Hear from satisfied customers who have experienced our commitment to quality and excellence firsthand. Explore our case studies to see how we have successfully delivered projects across various sectors, each tailored to meet the unique needs of our clients.</p></div>
      <div>
        <Testimonals/>
      </div>
      </div>
      <h2 className='text-3xl mb-4 text-blue-800'> Our Commitment</h2>
      <p className='mb-4 text-slate-700'>We are committed to transparency, security, and a seamless experience for all our users. We continuously improve our platform to meet your real estate needs and ensure a simple and stress-free journey.
</p>
    </div>
  )
}
// Desc: About page
import React from 'react'
import Testimonals from '../components/Testimonials'
import Programs from '../components/Programs'
import Campus from '../components/Campus'

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
       <div>
      <h1 className='text-3xl font-bold mb-4 text-blue-800'>About Javva Constructions</h1>
      <h2 className='text-3xl mb-4 text-blue-800'>Company Overview and Services Offered</h2>
      <p className='mb-4 text-slate-500'>At Javva Constructions, our journey began with a vision to create spaces that inspire and serve the needs of our clients. Established in 2024, we have grown into a leading construction firm known for our unwavering commitment to quality and customer satisfaction. Our mission is to deliver exceptional construction services that stand the test of time, reflecting our values of integrity, innovation, and excellence.</p>
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
      <h2 className='text-3xl mb-4 text-blue-800'> Call to Action</h2>
      <p className='mb-4 text-slate-700'>Ready to bring your vision to life? Contact Javva Constructions today to learn more about our services, request a consultation, or discuss how we can partner on your next project. Let’s build something great together.</p>
    </div>
  )
}
import React, { useEffect, useRef } from 'react'
import './../assets/Testimonials.css'
import next_icon from './../assets/next-icon.png'
import back_icon from './../assets/back-icon.png'
import user_1 from './../assets/user-1.png'
import user_2 from './../assets/user-2.png'
import user_3 from './../assets/user-3.png'
import user_4 from './../assets/user-4.png'


const Testimonals = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                      <h3>Sarah Thompson, Homeowner</h3>
                      <span></span>
                    </div>
                  </div>
                  <p>
                  Listing my property for rent on PrimeReal estate was so easy! The process was straightforward, and within a week, I had multiple interested tenants. The platform's interface made everything so simple, from uploading pictures to responding to inquiries.</p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                      <h3>John Marshall, Property Investor</h3>
                      <span></span>
                    </div>
                  </div>
                  <p>
                  I’ve used several real estate websites in the past, but none have been as user-friendly as PrimeReal estate. The ability to manage my listings directly and communicate with potential buyers is a huge advantage. I sold two properties in just a few weeks!
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                      <h3>Emily Rodriguez, First-Time Buyer </h3>
                      <span></span>
                    </div>
                  </div>
                  <p>
                  I was overwhelmed by the idea of searching for my first home, but PrimeReal estate made the process smooth and stress-free. The detailed listings and easy-to-use filters helped me find exactly what I was looking for. I’m so happy with my new home!
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                      <h3>Michael Lee, Landlord</h3>
                      <span></span>
                    </div>
                  </div>
                  <p>
                  I appreciate how secure and reliable PrimeReal estate is. I felt comfortable listing my rental properties knowing that every user is verified. I found a great tenant within days of posting my listing. Highly recommend it to any landlord!
                  </p>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonals
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
                      <h3>Sophia Bennett</h3>
                      <span></span>
                    </div>
                  </div>
                  <p>
                  We hired Javva Constructions for a complete renovation of our home, including the kitchen, bathrooms, and living spaces.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                      <h3>Ethan Harris</h3>
                      <span></span>
                    </div>
                  </div>
                  <p>
                  The quality of work was exceptional, with attention to every detail. The materials used were top-notch, and the finishes exceeded our expectations.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                      <h3>Olivia Reed</h3>
                      <span></span>
                    </div>
                  </div>
                  <p>
                  The team was always punctual, maintained a clean worksite, and kept us informed throughout the project.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                      <h3>Liam Cooper</h3>
                      <span></span>
                    </div>
                  </div>
                  <p>
                  Despite a few weather-related delays, the project was completed on time and within the agreed schedule.
                  </p>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonals
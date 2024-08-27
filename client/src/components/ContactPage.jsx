import React from 'react'
import msg_icon from './../assets/msg-icon.png'
import mail_icon from './../assets/mail-icon.png'
import phone_icon from './../assets/phone-icon.png'
import location_icon from './../assets/location-icon.png'
import white_arrow from './../assets/white-arrow.png'
import './../assets/contact.css'

const ContactPage = () => {


 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1476f5d8-3f67-47d2-ae9f-3ef48302d916");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='page'>
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contactform or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional services to our school community.</p>
            <ul>
                <li> <img src={mail_icon} alt="" />JavvaConstructions@gmail.com</li>
                <li> <img src={phone_icon} alt="" />+254758942015</li>
                <li><img src={location_icon} alt="" /> Nairobi, Kenya</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>
                    Your name
                </label>
                <input type="text" name='name' placeholder='Enter Your name' required/>
                <label>
                    Your name
                </label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter Your Text Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img className='arrow' src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
    <div>
      <h1 className='text-3xl mb-4 text-blue-800' >Follow us on all our social media platforms</h1>
    </div>
    </div>
  )
}

export default ContactPage
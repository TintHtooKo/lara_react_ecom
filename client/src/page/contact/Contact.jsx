import axios from "axios";
import React, { useState } from "react";
import {toast, ToastContainer} from 'react-toastify'
import Spinner from '../../assets/tube-spinner.svg'
import { Link } from "react-router-dom";

export default function Contact() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage] = useState('');
  const [loading,setLoading] = useState(false);

  const handleSubmit = async(e) => {
    setLoading(true);
    e.preventDefault();
    try {
      if(!name || !email || !subject || !message){
        toast.error('Please fill all the fields',{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        setLoading(false);
        return
      }else{
        let data = {name,email,subject,message};

        let res = await axios.post(import.meta.env.VITE_BACKEND_URL+'/contact/create',data);
        if(res.status === 200){
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          toast.success('Message sent successfully',{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
          setLoading(false);
        }     
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{minHeight:'300px'}}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Contact Us</h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Contact</p>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Contact For Any Queries</span>
          </h2>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="contact-form">
              <div id="success"></div>
              <form onSubmit={handleSubmit} id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    data-validation-required-message="Please enter your name"
                  />
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control mb-4"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    data-validation-required-message="Please enter your email"
                  />
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    data-validation-required-message="Please enter a subject"
                  />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control mb-4"
                    rows="6"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                   {
                    loading && (
                      <img src={Spinner} style={{width:'50px'}} alt="" />
                    )
                   }
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
            <p>
              Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed
              duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et
              erat clita ipsum justo sed.
            </p>
            <div className="d-flex flex-column mb-3">
              <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mr-3"></i>123
                Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary mr-3"></i>info@example.com
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
              </p>
            </div>
            <div className="d-flex flex-column">
              <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mr-3"></i>123
                Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary mr-3"></i>info@example.com
              </p>
              <p className="mb-0">
                <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

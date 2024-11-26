import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../../assets/tube-spinner.svg'
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

export default function Register() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const RegisterHandler = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if(!name || !email || !password || !confirmPassword){
        toast.error('Please fill all the fields', {
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
        return;
      }else if(password !== confirmPassword){
        toast.error('Passwords do not match', {
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
      let data = {name,email,password};
      let res = await axios.post(import.meta.env.VITE_BACKEND_URL+'/user/register',data,{withCredentials:true});
      if(res.status === 200){
        const { Authuser, token } = res.data;
        dispatch({ type: "LOGIN", payload: { user: Authuser, token } });
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setLoading(false);
        navigate('/shop')
        window.location.reload();
      }
    }
    } catch (e) {
      setLoading(false);
      toast.error(e.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
    }

  return (
    <>
        <div className="container-fluid bg-secondary mb-5">
            <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{minHeight:'300px'}}
            >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Register</h1>
            <div className="d-inline-flex">
                <p className="m-0">
                <Link to="/">Home</Link>
                </p>
                <p className="m-0 px-2">-</p>
                <p className="m-0">Register</p>
            </div>
            </div>
        </div>

        <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-6 col-lg-4">
        <div className="login-form">
          <h3 className="text-center mb-4">Register</h3>
          <form onSubmit={RegisterHandler}>

          <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="John Doe"/>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="abc@example.com"/>
            </div>           

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="************"/>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Confirm Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" id="password" placeholder="************"/>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary py-2">
              {
                    loading && (
                      <img src={Spinner} style={{width:'30px'}} alt="" />
                    )
                  }
                  Register
              </button>
            </div>
          </form>

          <div className="mt-3 text-center">
            <Link to="/login" onClick={scrollToTop} className="text-decoration-none">Have you already registered? Sign in</Link>
          </div>
        </div>
      </div>
    </div>
      </div>
      <ToastContainer/>
    </>
  )
}

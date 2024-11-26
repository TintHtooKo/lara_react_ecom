import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
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
    </>
  )
}

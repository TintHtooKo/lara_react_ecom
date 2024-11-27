import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="text-center">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <p className="fs-3">
        <span className="text-danger">Oops!</span> Page not found.
      </p>
      <p className="lead">
        The page you’re looking for doesn’t exist or has been removed.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  </div>
  )
}

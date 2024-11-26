import axios from "axios";
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

export default function Nav() {
  const {user,dispatch} = useContext(AuthContext)
  const navigate = useNavigate()
  const logoutHandler = async () => {
    let res = await axios.post(
      import.meta.env.VITE_BACKEND_URL + "/user/logout",
      {},
      { withCredentials: true }
    );
    if (res.status === 200) {
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark" href="">
                FAQs
              </a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href="">
                Help
              </a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href="">
                Support
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-dark pl-2" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href="" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <Link to="/cart" className="btn border">
              <i className="fas fa-shopping-cart text-primary"></i>
              <span className="badge" style={{ color: "#D19C97" }}>
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <Link to={"/"} className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  Shopper
                </h1>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/shop"}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    Contact
                  </NavLink>
                </div>
                <div className="navbar-nav ml-auto py-0">
                 
                  {
                    user ? (
                  <>
                   <button class="nav-item nav-link">{user?.user?.name}</button>
                  <button onClick={logoutHandler} className="nav-item nav-link">Logout</button>
                  </>
                    ) : (
                      <>
                      <NavLink to={'/login'} className={({isActive})=>isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>
                    Login
                  </NavLink>
                  <NavLink to={'/register'} className={({isActive})=>isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>
                    Register
                  </NavLink>
                      </>
                    )
                  }

                  {/* <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to={"/register"}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    Register
                  </NavLink>
                  <button onClick={logoutHandler} className="nav-item nav-link">
                    Logout
                  </button> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

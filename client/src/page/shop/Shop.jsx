import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../../assets/tube-spinner.svg";
import { AuthContext } from "../../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

export default function Shop() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const {user,dispatch} = useContext(AuthContext)

  useEffect(() => {
    const fetchProduct = async () => {
      let res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/product?page=${currentPage}`
      );
      setProduct(res.data.data);
      setPagination({
        currentPage: res.data.current_page,
        lastPage: res.data.last_page,
        nextPageUrl: res.data.next_page_url,
        prevPageUrl: res.data.prev_page_url,
      });
    };
    fetchProduct();
  }, [currentPage]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/category"
      );
      setCategory(res.data);
    };
    fetchCategory();
  }, []);

  const categoryFilter = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      let res;
      if (selectCategory) {
        res = await axios.post(
          import.meta.env.VITE_BACKEND_URL + "/category/search",
          { id: selectCategory }
        );
      } else {
        res = await axios.get(import.meta.env.VITE_BACKEND_URL + "/product");
      }
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const productFilter = async (e) => {
    e.preventDefault();
    try {
      if (productSearch) {
        let res = await axios.post(
          import.meta.env.VITE_BACKEND_URL + "/product/search",
          { name: productSearch }
        );
        setProduct(res.data);
      } else {
        let res = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/product"
        );
        setProduct(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (productId) => {
    try {
      if (!user) {
        // Show error toast if the user is not logged in
        toast.error('Please login first', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/cart`, 
          {
            user_id: user.user.id, 
            product_id: productId,
            quantity: 1, 
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`, 
            },
          }
        );
  
        // Check if the response is successful
        if (response.status === 200 || response.status === 201) {
          dispatch({ type: "SET_CART_COUNT", payload: response.data.count });
          alert("Product added to cart");
        } else {
          toast.error('Failed to add to cart', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while adding to the cart', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Our Shop
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop</p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-12">
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Filter by category</h5>
              <form onSubmit={categoryFilter}>
                <select
                  value={selectCategory}
                  onChange={(e) => setSelectCategory(e.target.value)}
                  className="form-control"
                  id=""
                >
                  <option value="">All</option>
                  {category.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <button className="btn btn-primary btn-block font-weight-semi-bold py-2 mt-3">
                  {loading && (
                    <img src={Spinner} style={{ width: "40px" }} alt="" />
                  )}
                  Filter
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form onSubmit={productFilter}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setProductSearch(e.target.value)}
                        value={productSearch}
                        placeholder="Search by name"
                      />
                      <div className="input-group-append">
                        <button
                          type="submit"
                          style={{ border: "none", background: "transparent" }}
                        >
                          {loading ? (
                            <img
                              src={Spinner}
                              style={{ width: "40px" }}
                              alt=""
                            />
                          ) : (
                            <span className="input-group-text bg-transparent text-primary">
                              <i className="fa fa-search"></i>
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="dropdown ml-4">
                    <button
                      className="btn border dropdown-toggle"
                      type="button"
                      id="triggerId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="triggerId"
                    >
                      <a className="dropdown-item" href="#">
                        Latest
                      </a>
                      <a className="dropdown-item" href="#">
                        Popularity
                      </a>
                      <a className="dropdown-item" href="#">
                        Best Rating
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {product ? (
                product.map((item, index) => {
                  const images = JSON.parse(item.image);
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 pb-1"
                      key={index}
                    >
                      <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                          <img
                            className="img-fluid w-100"
                            src={
                              images &&
                              images.length > 0 &&
                              import.meta.env.VITE_BACKEND_URL_ACCESS +
                                "/" +
                                images[0]
                            }
                            alt=""
                          />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                          <h6 className="text-truncate mb-3">{item.name}</h6>
                          <div className="d-flex justify-content-center">
                            <h6 className="text-muted ">
                              <del>{item.old_price}</del>
                            </h6>
                            <h6 className="ml-2">${item.new_price}</h6>
                          </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                          <Link
                            to={`/detail/${item.id}`}
                            className="btn btn-sm text-dark p-0"
                          >
                            <i className="fas fa-eye text-primary mr-1"></i>View
                            Detail
                          </Link>
                          <button onClick={()=>addToCart(item.id)} className="btn btn-sm text-dark p-0">
                            <i className="fas fa-shopping-cart text-primary mr-1"></i>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <span>There is no product data</span>
              )}

              <div className="col-12 pb-1">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center mb-3">
                    {/* Previous Page */}
                    <li
                      className={`page-item ${
                        !pagination.prevPageUrl ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() =>
                          pagination.prevPageUrl &&
                          setCurrentPage(currentPage - 1)
                        }
                        disabled={!pagination.prevPageUrl}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </button>
                    </li>

                    {/* Page Numbers */}
                    {Array.from(
                      { length: pagination.lastPage || 1 },
                      (_, index) => {
                        const page = index + 1;
                        return (
                          <li
                            key={page}
                            className={`page-item ${
                              pagination.currentPage === page ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </button>
                          </li>
                        );
                      }
                    )}

                    {/* Next Page */}
                    <li
                      className={`page-item ${
                        !pagination.nextPageUrl ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() =>
                          pagination.nextPageUrl &&
                          setCurrentPage(currentPage + 1)
                        }
                        disabled={!pagination.nextPageUrl}
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

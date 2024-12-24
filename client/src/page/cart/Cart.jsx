import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Cart() {
  const {user} = useContext(AuthContext)
  const [cart,setCart] = useState([]);
  const navigate = useNavigate()
  
  useEffect(()=>{
    let fetchCart = async() =>{
      try {
        let res = await axios.get(import.meta.env.VITE_BACKEND_URL+"/see-cart",{
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
      setCart(res.data)
      } catch (error) {
        console.log('error is',error.response?.data?.message)
      }
    }
    fetchCart()
  },[])

  const handleQuantityChange = (index, type) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: type === "increment" 
                ? item.quantity + 1 
                : item.quantity > 1 
                  ? item.quantity - 1 
                  : item.quantity,
            }
          : item
      )
    );
  };

  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.product_price * item.quantity, 0);
  };
  const totalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleProceedToCheckout = () => {
    const price = totalPrice();
    const quantity = totalQuantity();
    navigate("/checkout", { state: { totalPrice: price, totalQuantity : quantity  } });  
  };

  const deleteCart = async (id) => {
    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL+"/cart/"+id,{},{
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
      alert("Product deleted from cart successfully");
    } catch (error) {
      console.log(error);
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
            Shopping Cart
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
            <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shopping Cart</p>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {
                  cart ? (
                    cart.map((item,index)=>{
                      const image = JSON.parse(item.product_image);
                      return(
                        <tr key={index}>
                        <td className="align-middle">
                          <img
                            src={import.meta.env.VITE_BACKEND_URL_ACCESS+'/'+image[0]}
                            alt=""
                            style={{ width: "50px" }}
                          />{" "}
                          {item.product_name}
                        </td>
                        <td className="align-middle">${item.product_price}</td>
                        <td className="align-middle">
                          <div
                            className="input-group quantity mx-auto"
                            style={{ width: "100px" }}
                          >
                            <div className="input-group-btn">
                              <button 
                              onClick={() => handleQuantityChange(index, "decrement")}
                              className="btn btn-sm btn-primary btn-minus">
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <div className="form-control form-control-sm bg-secondary text-center">
                              {item.quantity}
                            </div>
                            <div className="input-group-btn">
                              <button 
                              onClick={() => handleQuantityChange(index, "increment")}
                              className="btn btn-sm btn-primary btn-plus">
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">${item.product_price * item.quantity}</td>
                        <td className="align-middle">
                          <button onClick={()=>deleteCart(item.id)} className="btn btn-sm btn-primary">
                            <i className="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      )
                    })
                  ) : (
                    <tr>
                      <td colSpan="5">No products in cart</td>
                    </tr>
                  )
                }
                
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-5" action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-4"
                  placeholder="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Subtotal</h6>
                  <h6 className="font-weight-medium">${totalPrice()}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">free</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total</h5>
                  <h5 className="font-weight-bold">${totalPrice()}</h5>
                </div>
                <button onClick={handleProceedToCheckout} className="btn btn-block btn-primary my-3 py-3">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

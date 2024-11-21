import React from "react";

export default function Home() {
  return (
    <>
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "410px" }}>
            <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  10% Off Your First Order
                </h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                  Fashionable Dress
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-5">
        <div class="text-center mb-4">
          <h2 class="section-title px-5">
            <span class="px-2">Trandy Products</span>
          </h2>
        </div>
        <div class="row px-xl-5 pb-3">
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  class="img-fluid w-100"
                  src="../../../public/img/product-1.jpg"
                  alt=""
                />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img class="img-fluid w-100" src="img/product-2.jpg" alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img class="img-fluid w-100" src="img/product-3.jpg" alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img class="img-fluid w-100" src="img/product-4.jpg" alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid offer pt-5">
        <div class="row px-xl-5">
          <div class="col-md-6 pb-4">
            <div class="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
              <img src="img/offer-1.png" alt="" />
              <div class="position-relative" style={{ zIndex: "1" }}>
                <h5 class="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 class="mb-4 font-weight-semi-bold">Spring Collection</h1>
              </div>
            </div>
          </div>
          <div class="col-md-6 pb-4">
            <div class="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
              <img src="img/offer-2.png" alt="" />
              <div class="position-relative" style={{ zIndex: "1" }}>
                <h5 class="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 class="mb-4 font-weight-semi-bold">Winter Collection</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-5">
        <div class="text-center mb-4">
          <h2 class="section-title px-5">
            <span class="px-2">Just Arrived</span>
          </h2>
        </div>
        <div class="row px-xl-5 pb-3">
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  class="img-fluid w-100"
                  src="../../../public/img/product-1.jpg"
                  alt=""
                />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img class="img-fluid w-100" src="img/product-2.jpg" alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img class="img-fluid w-100" src="img/product-3.jpg" alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img class="img-fluid w-100" src="img/product-4.jpg" alt="" />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

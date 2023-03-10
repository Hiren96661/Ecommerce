import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../Component/BlogCard";
import ProductCard from "../Component/ProductCard";
import { SpecialProduct } from "../Component/SpecialProduct";
import mainbanner from "../images/main-banner-1.jpg";
import catbanner from "../images/catbanner-01.jpg";
import catbanner2 from "../images/catbanner-02.jpg";
import catbanner3 from "../images/catbanner-03.jpg";
import catbanner4 from "../images/catbanner-04.jpg";
import service from "../images/service.png";
import service2 from "../images/service-02.png";
import service3 from "../images/service-03.png";
import service4 from "../images/service-04.png";
import service5 from "../images/service-05.png";
import camera from "../images/camera.jpg";
import tv from "../images/tv.jpg";
import headphone from "../images/headphone.jpg";
import famous from "../images/famous-5.png";
import famous2 from "../images/famous-2.png";
import famous3 from "../images/famous-4.png";
import famous4 from "../images/famous-6.png";
import brand from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";


const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src={mainbanner}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4> SUPERCHARGED FOR PROS.</h4>
                  <h5> iPad S13+ Pro.</h5>
                  <p> From $999.00 or $41.62/mo.</p>
                  <Link className="button"> BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src={catbanner}
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> Best Sake</h4>
                    <h5> iPad S13+ Pro.</h5>
                    <p>
                      
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={catbanner2}
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> NEW ARRIVAL</h4>
                    <h5> But iPad Air</h5>
                    <p>
                      
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={catbanner3}
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> NEW ARRIVAL</h4>
                    <h5> But iPad Air</h5>
                    <p>
                      
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={catbanner4}
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> NEW ARRIVAL</h4>
                    <h5> But iPad Air</h5>
                    <p>
                      
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src={service} alt="services" />
                  <div>
                    <h6> Free Shipping</h6>
                    <p className="mb-0"> Fromm all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service2} alt="services" />
                  <div>
                    <h6> Daily Surprise Offers</h6>
                    <p className="mb-0"> Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service3} alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service4} alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service5} alt="services" />
                  <div>
                    <h6> Secure Payments</h6>
                    <p className="mb-0"> 100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6> Music & Gaming</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6> Cameras</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src={camera}  alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6> Smart Tv</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6> Smart Watches</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src={headphone} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6> Music & Gaming</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6> Cameras</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6> Smart Tv</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6> Smart Watches</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src={headphone} alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card">
              <div className="famous-content ">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
                <img
                  src={famous}
                  className="img-fluid"
                  alt="famous"
                />
               
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card">
              <div className="famous-content ">
                  <h5 className="">STUDIO DISPLAY</h5>
                  <h6 className="">600 nits of brightness</h6>
                  <p className="">27-inch 5K Retina display</p>
                </div>
                <img
                  src={famous2}
                  className="img-fluid"
                  alt="famous"
                />
                
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card">
              <div className="famous-content ">
                  <h5>SMARTPHONES</h5>
                  <h6>Smartphone 13 Pro.</h6>
                  <p>Now in Green Fom $999.00 or $41.62/mo. for 24 mo. Footnote </p>
                </div>
                <img
                  src={famous3}
                  className="img-fluid"
                  alt="famous"
                />
                
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card">
              <div className="famous-content ">
                  <h5>HOME SPEAKERS</h5>
                  <h6>Room-filling sound.</h6>
                  <p>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
                <img
                  src={famous4}
                  className="img-fluid"
                  alt="famous"
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand2} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand3} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand4} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand5} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand6} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand7} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand8} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
           <div className="row">
            <div className="col-3">
                <BlogCard/>
            </div>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import HeaderNavbar from "./components/navbar";

export default function Header() {
  return (
    <>
      <HeaderNavbar />

      <header className="header slider-fade">
        <div className="owl-carousel owl-theme owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage" style={{ transform: 'translate3d(-2686px, 0px, 0px)', transition: 'all 0s ease 0s', width: '9401px' }}>
              <div className="owl-item" style={{ width: 1343 }}>
                <div className="item bg-img" data-overlay-dark="5" data-background="img/slider/12.jpg" style={{ backgroundImage: 'url(img/slider/12.jpg)' }}>

                  <div className="v-middle caption">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 mb-30">
                          <div className="v-middle">
                            <h6>* Premium</h6>
                            <h1>Rental Car</h1>
                            <h5>Rolls Royce Cullinan <span>$900 <i>/ day</i></span></h5> <a href="#0" className="button-1 mt-15 mb-15">View Details <span className="ti-arrow-top-right"></span></a> <a href="#" data-scroll-nav="1" className="button-2 mt-15 mb-15">Rent Now <span className="ti-arrow-top-right"></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item" style={{ width: 1343 }}>
                <div className="item bg-img" data-overlay-dark="5" data-background="img/slider/14.jpg" style={{ backgroundImage: 'url(img/slider/14.jpg)' }}>

                  <div className="v-middle caption">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 mb-30">
                          <div className="v-middle">
                            <h6>* Premium</h6>
                            <h1>Rental Car</h1>
                            <h5>Rolls Royce Cullinan <span>$900 <i>/ day</i></span></h5> <a href="#0" className="button-1 mt-15 mb-15">View Details <span className="ti-arrow-top-right"></span></a> <a href="#" data-scroll-nav="1" className="button-2 mt-15 mb-15">Rent Now <span className="ti-arrow-top-right"></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item" style={{ width: 1343 }}>
                <div className="item bg-img" data-overlay-dark="5" data-background="img/slider/11.jpg" style={{ backgroundImage: 'url(img/slider/11.jpg)' }}>

                  <div className="v-middle caption">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 mb-30">
                          <div className="v-middle">
                            <h6>* Premium</h6>
                            <h1>Rental Car</h1>
                            <h5>Rolls Royce Cullinan <span>$900 <i>/ day</i></span></h5> <a href="#0" className="button-1 mt-15 mb-15">View Details <span className="ti-arrow-top-right"></span></a> <a href="#" data-scroll-nav="1" className="button-2 mt-15 mb-15">Rent Now <span className="ti-arrow-top-right"></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev"><i className="ti-angle-left" aria-hidden="true"></i></button>
            <button type="button" role="presentation" className="owl-next"><i className="ti-angle-right" aria-hidden="true"></i></button>
          </div>

          <div className="owl-dots">
            <button role="button" className="owl-dot"><span></span></button>
            <button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button>
          </div>
        </div>
      </header>
    </>
  );
}

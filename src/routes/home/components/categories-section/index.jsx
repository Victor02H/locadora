export default function CategoriesSection() {
  return (
    <>
      <section className="car-types1 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">Categories</div>
              <div className="section-title">Rental <span>Car Types</span></div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <div className="owl-item" style={{ width: "358.667px", marginRight: "20px" }}>
                      <div className="item">
                        <img src="img/cars/01.jpg" className="img-fluid" alt="" />

                        <div className="title">
                          <h4>Convertible</h4>
                        </div>

                        <div className="curv-butn icon-bg">
                          <a href="car-details.html" className="vid">
                            <div className="icon">
                              <i className="ti-arrow-top-right"></i>
                            </div>
                          </a>

                          <div className="br-left-top">
                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                              <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                            </svg>
                          </div>

                          <div className="br-right-bottom">
                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                              <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="line-vr-section"></div>
    </>
  );
}

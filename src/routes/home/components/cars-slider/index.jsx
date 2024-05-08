export default function CarsSlider() {
  return (
    <>
      <section className="cars1 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">Select Your Car</div>
              <div className="section-title">Luxury <span>Car Fleet</span></div>
            </div>
          </div>

          <div className="cars1-carousel owl-theme owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage">
                <div className="owl-item" style={{ width: "800px", marginRight: "20px" }}>
                  <div className="item">
                    <div className="img">
                      <img src="img/slider/12.jpg" alt="" />
                    </div>

                    <div className="con opacity-1">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="title">
                            <a href="#">Rolls Royce Cullinan</a>
                          </div>

                          <div className="details">
                            <span>
                              <i className="omfi-door"></i> 4 Seats
                            </span>

                            <span>
                              <i className="omfi-transmission"></i> Auto
                            </span>

                            <span>
                              <i className="omfi-luggage"></i> 4 Bags
                            </span>

                            <span>
                              <i className="omfi-age"></i> Age 25
                            </span>
                          </div>
                        </div>

                        <div className="col-md-5">
                          <div className="book">
                            <div>
                              <a href="car-details.html" className="btn">
                                <span>Details</span>
                              </a>
                            </div>

                            <div>
                              <span className="price">$900</span>
                              <span>/day</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <i className="ti-angle-left" aria-hidden="true"></i>
              </button>

              <button type="button" role="presentation" className="owl-next">
                <i className="ti-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div class="line-vr-section"></div>
    </>
  );
}

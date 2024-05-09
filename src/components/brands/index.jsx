export default function Brands() {
  return (
    <section className="clients">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  {Array(8).fill().map((item, index) => (
                    <div key={index} className="owl-item" style={{ width: "169.333px", marginRight: "20px" }}>
                      <div className="clients-logo">
                        <a href="#0">
                          <img src={`img/clients/${index + 1}.png`} alt="" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <span className="lnr ti-angle-left"></span>
                </button>

                <button type="button" role="presentation" className="owl-next">
                  <span className="lnr ti-angle-right"></span>
                </button>
              </div>

              <div className="owl-dots disabled"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

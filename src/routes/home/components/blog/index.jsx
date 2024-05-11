export default function BlogSection() {
  return (
    <section className="blog1 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-30">
            <div className="section-subtitle">Our Blog</div>
            <div className="section-title">Latest <span>News</span></div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <div className="owl-item" style={{ width: "358.667px", marginRight: "20px" }}>
                    <div className="item">
                      <div className="img">
                        <img src="img/blog/02.jpg" alt="" />
                      </div>

                      <div className="wrapper">
                        <div className="date">
                          <a href="#">23 Dec, 2024</a>
                        </div>

                        <div className="con">
                          <div className="category">
                            <a href="#">
                              <i className="ti-user"></i>Arya T.
                            </a>

                            <a href="#">
                              <i className="ti-comment"></i>5 Comments
                            </a>
                          </div>

                          <div className="text">
                            <a href="post.html">How to Rent a Car at the Airport Terminal?</a>
                          </div>

                          <a href="post.html" className="icon-btn">
                            <i className="ti-arrow-top-right"></i>
                          </a>
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
  );
}

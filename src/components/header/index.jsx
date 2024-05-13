import { slider_data } from "../../data/slider";
import HeaderNavbar from "./components/navbar";

export default function Header() {
  return (
    <>
      <HeaderNavbar />

      <header className="header slider-fade">
        <div className="owl-carousel owl-theme owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              {slider_data.map((item) => (
                <div key={item.id} className="owl-item" style={{ width: 1343 }}>
                  <div className="item bg-img" data-overlay-dark="5" data-background={item.imagem} style={{ backgroundImage: `url(${item.imagem})` }}>

                    <div className="v-middle caption">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 mb-30">
                            <div className="v-middle">
                              <h6>{item.subtitulo}</h6>
                              <h1>{item.titulo}</h1>

                              <div className="col-12">
                                <a href={item.link} data-scroll-nav="1" className="button-2 mt-15 mb-15">
                                  Ver Mais

                                  <span className="ti-arrow-top-right"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev"><i className="ti-angle-left" aria-hidden="true"></i></button>
            <button type="button" role="presentation" className="owl-next"><i className="ti-angle-right" aria-hidden="true"></i></button>
          </div>

          {/* <div className="owl-dots">
            <button role="button" className="owl-dot"><span></span></button>
            <button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button>
          </div> */}
        </div>
      </header>
    </>
  );
}

import ValueFormatter from "../../../../components/value-formatter";
import { cars_slider_data } from "../../../../data/cars-slider";

export default function CarsSlider() {
  return (
    <>
      <section className="cars1 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">Explorando Horizontes</div>
              <div className="section-title">Rumo a <span>Aventura</span></div>
            </div>
          </div>

          <div className="cars1-carousel owl-theme owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage">
                {cars_slider_data.map((item) => (
                  <div key={item.id} className="owl-item" style={{ width: "800px", marginRight: "20px" }}>
                    <div className="item">
                      <div className="img">
                        <img src={item.imagem} alt={item.nome} />
                      </div>

                      <div className="con opacity-1">
                        <div className="row">
                          <div className="col-md-7">
                            <div className="title">
                              <a href="#">{item.nome}</a>
                            </div>

                            <div className="details">
                              <span>
                                <i className="omfi-door"></i> 2 Lugares
                              </span>

                              <span>
                                <i className="omfi-transmission"></i> Automatizado
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
                                  <span>Detalhes</span>
                                </a>
                              </div>

                              <div>
                                <span className="price">
                                  <ValueFormatter value={item.valor} />
                                </span>

                                <span>/dia</span>
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

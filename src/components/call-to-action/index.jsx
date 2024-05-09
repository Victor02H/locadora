export default function CallToAction() {
  return (
    <section className="lets-talk bg-img bg-fixed section-padding" data-overlay-dark="5" data-background="img/slider/3.jpg" style={{ backgroundImage: "url(img/slider/14.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h6>Rent Your Car</h6>
            <h5>Interested in Renting?</h5>
            <p>Don't hesitate and send us a message.</p>

            <a href="tel:+8001234567" className="button-1 mt-15 mb-15 mr-10">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>

            <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#0" className="button-2 mt-15 mb-15">
              Rent Now <span className="ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

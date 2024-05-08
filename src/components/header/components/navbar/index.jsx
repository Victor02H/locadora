export default function HeaderNavbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="logo-wrapper">
          <a className="logo" href="index.html"> <img src="img/logo-light.png" className="logo-img" alt="" /> </a>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown"> <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Home <i className="ti-angle-down"></i></a>
              <ul className="dropdown-menu">
                <li><a href="index.html" className="dropdown-item active"><span>Slider</span></a></li>
                <li><a href="index2.html" className="dropdown-item"><span>Image</span></a></li>
                <li><a href="index3.html" className="dropdown-item"><span>Video</span></a></li>
                <li><a href="index4.html" className="dropdown-item"><span>Slideshow</span></a></li>

                <li className="dropdown-submenu dropdown"> <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Onepage <i className="ti-angle-right"></i></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="onepage-slider.html" className="dropdown-item"><span>Slider</span></a></li>
                    <li><a href="onepage-image.html" className="dropdown-item"><span>Image</span></a></li>
                    <li><a href="onepage-video.html" className="dropdown-item"><span>Video</span></a></li>
                    <li><a href="onepage-slideshow.html" className="dropdown-item"><span>Slideshow</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
            <li className="nav-item"><a className="nav-link" href="services.html">Services</a></li>

            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Cars <i className="ti-angle-down"></i></a>
              <ul className="dropdown-menu">
                <li><a href="cars.html" className="dropdown-item"><span>Car Grid</span></a></li>
                <li><a href="cars2.html" className="dropdown-item"><span>Car Listing</span></a></li>
                <li><a href="car-types.html" className="dropdown-item"><span>Car Types 01</span></a></li>
                <li><a href="car-types2.html" className="dropdown-item"><span>Car Types 02</span></a></li>
                <li><a href="car-details.html" className="dropdown-item"><span>Car Details 01</span></a></li>
                <li><a href="car-details2.html" className="dropdown-item"><span>Car Details 02</span></a></li>
              </ul>
            </li>

            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pages <i className="ti-angle-down"></i></a>
              <ul className="dropdown-menu">
                <li><a href="team.html" className="dropdown-item"><span>Team</span></a></li>
                <li><a href="gallery-image.html" className="dropdown-item"><span>Image Gallery</span></a></li>
                <li><a href="gallery-video.html" className="dropdown-item"><span>Video Gallery</span></a></li>
                <li><a href="price.html" className="dropdown-item"><span>Pricing Plan</span></a></li>
                <li><a href="faq.html" className="dropdown-item"><span>FAQ</span></a></li>
                <li><a href="testiominals.html" className="dropdown-item"><span>Testiominals</span></a></li>
                <li><a href="team-single.html" className="dropdown-item"><span>Team Single</span></a></li>
                <li><a href="404.html" className="dropdown-item"><span>404 Page</span></a></li>
              </ul>
            </li>

            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Blog <i className="ti-angle-down"></i></a>
              <ul className="dropdown-menu">
                <li><a href="blog.html" className="dropdown-item"><span>Blog Grid</span></a></li>
                <li><a href="blog2.html" className="dropdown-item"><span>Blog List</span></a></li>
                <li><a href="post.html" className="dropdown-item"><span>Post Single</span></a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
          </ul>

          <div className="navbar-right">
            <div className="wrap">
              <div className="icon"> <i className="flaticon-phone-call"></i> </div>
              <div className="text">
                <p>Need help?</p>
                <h5><a href="tel:8551004444">855 100 4444</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

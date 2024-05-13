import { FaRegUser } from "react-icons/fa";

export default function HeaderNavbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="logo-wrapper">

          <a className="logo" href="/">
            <span className="text-white fs-3">LOGO</span>

            {/* <img src="img/logo-light.png" className="logo-img" alt="" /> */}
          </a>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">Sobre</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">Serviços</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                Carros <i className="ti-angle-down"></i>
              </a>

              <ul className="dropdown-menu">
                <li><a href="/" className="dropdown-item"><span>Econômico</span></a></li>
                <li><a href="/" className="dropdown-item"><span>Compacto</span></a></li>
                <li><a href="/" className="dropdown-item"><span>Sedan</span></a></li>
                <li><a href="/" className="dropdown-item"><span>SUV</span></a></li>
                <li><a href="/" className="dropdown-item"><span>Van/Minivan</span></a></li>
                <li><a href="/" className="dropdown-item"><span>Luxo</span></a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">Blog</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">Contato</a>
            </li>
          </ul>

          <div className="navbar-right">
            <div className="wrap m-0" style={{ paddingLeft: 12, borderLeft: "1px solid #FFFFFF40" }}>
              <a href="/" className="d-flex  gap-2">
                <div className="text-white">
                  <FaRegUser size={18} />
                </div>

                <span className="text-white">Login</span>
              </a>

              {/* <div className="text">
                <p>Need help?</p>
                <h5><a href="tel:8551004444">855 100 4444</a></h5>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

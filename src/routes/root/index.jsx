import { Outlet, useLocation } from "react-router-dom";

import Home from "../home";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Root() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />

      <main>
        {pathname === "/" ? <Home /> : <Outlet />}
      </main>

      <Footer />
    </>
  );
}

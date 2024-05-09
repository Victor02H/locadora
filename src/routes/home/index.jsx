import Brands from "../../components/brands";
import CallToAction from "../../components/call-to-action";
import SearchSection from "../../components/search-section";
import CarsSlider from "./components/cars-slider";
import CategoriesSection from "./components/categories-section";

export default function Home() {
  return (
    <>
      <SearchSection />
      <CarsSlider />
      <CategoriesSection />
      <CallToAction />
      <Brands />
    </>
  );
}

import Image from "next/image";
import Hero from "./components/Hero";
import BrandBar from "./components/BrandBar";
import NewArrivals from "./components/NewArrivals";
import Browse from "./components/Browse";
import HappyCustomer from "./components/HappyCustomer";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <Hero/>
    <BrandBar/>
    <NewArrivals/>
    <Browse/>
    <HappyCustomer/>
    </>
  );
}

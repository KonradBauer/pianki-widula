import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Offer from "@/components/offer/Offer";
import ProductGalleries from "@/components/products/ProductGalleries";
import ProductionVideo from "@/components/products/ProductionVideo";
import WhyUs from "@/components/why-us/WhyUs";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offer />
        <ProductGalleries />
        <ProductionVideo />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-white">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyChooseUs />
        <ContactForm />
        <Contacts />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Helpers */}
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

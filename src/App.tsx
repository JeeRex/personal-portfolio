import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full px-6">
        <Hero />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
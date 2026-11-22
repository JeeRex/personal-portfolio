import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Experience } from "./components/Experience";

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full px-6">
        <Hero />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="w-screen h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-scroll z-0">
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </main>
  );
};

export default Home;

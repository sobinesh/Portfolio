import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import FeaturedPost from "@/components/FeaturedPost";
import RecentPosts from "@/components/RecentPosts";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <FeaturedPost />
        <Projects />
        <RecentPosts />
        <Stack />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

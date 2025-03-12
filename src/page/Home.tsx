import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Service';
import BookSection from '../components/Booking';
import BlogVideo from '../components/BlogVideo';
import Testimonials from '../components/Testimonial';
import Contact from '../components/Contact';

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // Set a timeout to simulate content loading
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`min-h-screen transition-opacity duration-700 ${
        pageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <main>
        <Hero />
        <About />
        <Services />
        <BlogVideo />
        <BookSection />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

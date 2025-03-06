import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Service';
import BookSection from '../components/Booking';
import BlogVideo from '../components/BlogVideo';

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
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
      </main>
    </div>
  );
}

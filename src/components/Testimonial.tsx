import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import new1 from '../assets/IMG-20250307-WA0080.jpg';
import new2 from '../assets/IMG-20250307-WA0068.jpg';
import new3 from '../assets/IMG-20250307-WA0071.jpg';
import new4 from '../assets/IMG-20250307-WA0072.jpg';
import new5 from '../assets/IMG-20250307-WA0073.jpg';
import new6 from '../assets/IMG-20250307-WA0074.jpg';
import new7 from '../assets/IMG-20250307-WA0075.jpg';
import new8 from '../assets/IMG-20250307-WA0076.jpg';
import new9 from '../assets/IMG-20250307-WA0077.jpg';
import new10 from '../assets/IMG-20250307-WA0078.jpg';
import new11 from '../assets/IMG-20250307-WA0079.jpg';

const testimonials = [
  {
    id: 1,
    content: 'Great AI solutions!',
    author: 'Maria Rodriguez',
    position: 'CTO, Tech Co.',
    image: new1,
  },
  {
    id: 2,
    content: 'Revolutionized our business!',
    author: 'James Wu',
    position: 'CEO, Fintech',
    image: new2,
  },
  {
    id: 3,
    content: 'Fast loan processing!',
    author: 'Sarah Johnson',
    position: 'CFO, Bank',
    image: new3,
  },
  {
    id: 4,
    content: 'Major cost savings!',
    author: 'Michael Chen',
    position: 'COO, Investment Firm',
    image: new4,
  },
  {
    id: 5,
    content: 'Transformed decision-making!',
    author: 'John Doe',
    position: 'VP, Retail',
    image: new5,
  },
  {
    id: 6,
    content: 'A game changer!',
    author: 'Jane Smith',
    position: 'Director, AI Labs',
    image: new6,
  },
  {
    id: 7,
    content: 'Improved efficiency!',
    author: 'Chris Evans',
    position: 'CMO, Tech Hub',
    image: new7,
  },
  {
    id: 8,
    content: 'Highly recommended!',
    author: 'Emma Watson',
    position: 'Head of IT, Startup',
    image: new8,
  },
  {
    id: 9,
    content: 'Incredible insights!',
    author: 'Robert Downey',
    position: 'VP, Marketing',
    image: new9,
  },
  {
    id: 10,
    content: 'Excellent service!',
    author: 'Will Smith',
    position: 'Founder, AI Inc.',
    image: new10,
  },
  {
    id: 11,
    content: 'Trusted solutions!',
    author: 'Mark Cuban',
    position: 'Investor',
    image: new11,
  },
];

const InfiniteCarousel = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Responsive breakpoints for different screen sizes
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // Mobile: Show 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // Tablet: Show 2 items
      } else {
        setItemsPerSlide(4); // Desktop: Show 4 items
      }
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-navy-900 text-white py-12 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="w-20 h-20 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-navy-700">
            <MessageSquare className="w-10 h-10 text-gold-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Adenola in Moments<span className="text-gold-500">.</span>
          </h2>
        </div>

        <div className="relative overflow-hidden max-w-6xl mx-auto">
          {/* Testimonial slider */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${index * (300 / itemsPerSlide)}%)`,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div key={idx} className={`px-4 flex-shrink-0 w-80`}>
                <div className="text-center">
                  <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-56 object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="p-4 bg-white text-navy-900 h-40">
                      <p className="font-medium">"{testimonial.content}"</p>
                      <h4 className="font-semibold mt-4">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-navy-800 text-white p-3 rounded-full shadow-md hover:bg-navy-700 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-navy-800 text-white p-3 rounded-full shadow-md hover:bg-navy-700 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === idx
                  ? 'bg-gold-500 w-8'
                  : 'bg-navy-700 hover:bg-navy-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteCarousel;

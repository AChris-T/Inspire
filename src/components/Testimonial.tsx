/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Unlike other AI consultants who focus on theory, Adenola helped us integrate AI where it mattered. We saw a 28% improvement in customer response times and significant cost reductions.",
    author: "Maria Rodriguez",
    position: "Chief Innovation Officer, Global Insurance Group",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 2,
    content: "Adenola's AI strategy transformed how our leadership team makes decisions. His approach resulted in a 17% reduction in quality control issues and major cost savings.",
    author: "James Wu",
    position: "CEO, Financial Services Firm",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 3,
    content: "After implementing Adenola's AI Business Evolution Framework, our multinational financial institution achieved 43% faster loan processing, 28% improved risk assessment accuracy, and $4.2M in operational cost savings.",
    author: "Sarah Johnson",
    position: "CTO, Multinational Financial Institution",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 4,
    content: "The strategic AI implementation plan Adenola designed for our investment firm resulted in a 22% increase in portfolio performance and significant competitive advantage in market analysis.",
    author: "Michael Chen",
    position: "Managing Director, Global Investment Firm",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && contentRef.current) {
            contentRef.current.classList.add('opacity-100');
            contentRef.current.classList.remove('translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Auto rotate testimonials
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-navy-900 text-white"
    >
      <div 
        ref={contentRef}
        className="content-container opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-20 h-20 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-navy-700">
            <MessageSquare className="w-10 h-10 text-gold-400" />
          </div>
          <span className="badge bg-navy-800 border border-navy-700 text-gold-400 mb-4">Client Success Stories</span>
          <h2 className="section-heading text-white mb-6">
            Transformational Impact
            <span className="text-gold-500">.</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quotation mark decoration */}
          <div className="absolute -top-12 -left-6 text-navy-800">
            <Quote size={80} />
          </div>

          {/* Testimonial slider */}
          <div className="relative overflow-hidden py-8">
            <div 
              className="transition-all duration-700 ease-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-gold-400 fill-gold-400" 
                        />
                      ))}
                    </div>
                    
                    <p className="text-xl md:text-2xl leading-relaxed text-platinum-200 mb-8 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="ml-4 text-left">
                        <h4 className="font-semibold text-lg text-white">{testimonial.author}</h4>
                        <p className="text-platinum-400">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-navy-800 hover:bg-navy-700 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-gold-500 w-8' 
                        : 'bg-navy-700 hover:bg-navy-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-navy-800 hover:bg-navy-700 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
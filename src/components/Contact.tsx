/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import {
  Send,
  Check,
  Download,
  Calendar,
  Mic,
  Phone,
  Mail,
  BrainCircuit,
} from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'strategy',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const googleSheetURL =
      'https://script.google.com/macros/s/AKfycbwxpiEVa_q7V22IYty0iRB812JzIkCXHk75bKfq2s-tVeUFn_60mB789Rk3IkW78vLM/exec';
    try {
      const response = await fetch(googleSheetURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      console.log(response);

      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
        interest: 'strategy',
      });
      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      console.error('Submission error:', error);
      alert(
        'Error submitting form. Please try emailing us directly at adenola@adegbesan.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && formRef.current) {
            formRef.current.classList.add('opacity-100');
            formRef.current.classList.remove('translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white" id="contact">
      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-20 h-20 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <BrainCircuit className="w-10 h-10 text-navy-900" />
          </div>
          <span className="badge mb-4">Take the Next Step</span>
          <h2 className="section-heading mb-6">
            Start Your AI Journey Today
            <span className="text-gold-500">.</span>
          </h2>
          <p className="text-lg text-gray-700">
            AI-driven organizations will dominate the next decade. Will yours be
            one of them?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="premium-card p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-navy-900" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Schedule a Consultation
            </h3>
            <p className="text-gray-600 mb-4">
              Book a free AI strategy assessment and discover your
              organization's AI potential.
            </p>
            <a
              href="#contact-form"
              className="inline-block font-medium text-navy-900 hover:text-navy-700 transition-colors duration-300"
            >
              Book Now →
            </a>
          </div>

          <div className="premium-card p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-navy-900" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              AI Leadership Framework
            </h3>
            <p className="text-gray-600 mb-4">
              Download Adenola's exclusive framework for implementing AI in your
              organization.
            </p>
            <a
              href="#contact-form"
              className="inline-block font-medium text-navy-900 hover:text-navy-700 transition-colors duration-300"
            >
              Download →
            </a>
          </div>

          <div className="premium-card p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-4">
              <Mic className="w-6 h-6 text-navy-900" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Book a Speaking Event
            </h3>
            <p className="text-gray-600 mb-4">
              Invite Adenola to speak at your next corporate event or leadership
              summit.
            </p>
            <a
              href="#contact-form"
              className="inline-block font-medium text-navy-900 hover:text-navy-700 transition-colors duration-300"
            >
              Inquire →
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="premium-card p-6">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gold-500 mr-3" />
                  <a
                    href="tel:+4407432529090"
                    className="text-navy-900 hover:text-gold-500 transition-colors"
                  >
                    +234 811 269 8170{' '}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gold-500 mr-3" />
                  <a
                    href="mailto:adenola@adegbesan.com"
                    className="text-navy-900 hover:text-gold-500 transition-colors"
                  >
                    adenola@adegbesan.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <form
              id="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
              className="premium-card p-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Smith"
                    disabled={isSubmitting || isSubmitted}
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@company.com"
                    disabled={isSubmitting || isSubmitted}
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                  placeholder="Company Name"
                  disabled={isSubmitting || isSubmitted}
                  aria-required="true"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  I'm interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formState.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300 bg-white"
                  disabled={isSubmitting || isSubmitted}
                  aria-required="true"
                >
                  <option value="strategy">AI Strategy Consultation</option>
                  <option value="governance">AI Governance & Compliance</option>
                  <option value="training">Executive AI Training</option>
                  <option value="speaking">Book for Speaking Event</option>
                  <option value="framework">AI Leadership Framework</option>
                  <option value="book">Book Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project or inquiry..."
                  disabled={isSubmitting || isSubmitted}
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`premium-button w-full ${
                  isSubmitted ? 'bg-green-600 hover:bg-green-700' : ''
                }`}
                aria-live="polite"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending message...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <Check className="w-5 h-5 mr-2" />
                    Message Sent
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

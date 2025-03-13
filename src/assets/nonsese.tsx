/* eslint-disable @typescript-eslint/no-unused-vars */
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
      'https://script.google.com/macros/s/AKfycbw-WLE3IVOI3dFVdZ-nPFdPrq1cUbmMF8STkMufYPdPciYvckAzmRVNObN9p8uzY8DD/exec';

    try {
      const response = await fetch(googleSheetURL, {
        method: 'POST',
        mode: 'no-cors', // Fixes CORS issues
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      // Since `no-cors` prevents fetching response data, assume success
      setIsSubmitted(true);
      alert('Your message has been submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit. Please check your internet connection.');
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500"
                    placeholder="John Smith"
                    disabled={isSubmitting || isSubmitted}
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500"
                    placeholder="john@company.com"
                    disabled={isSubmitting || isSubmitted}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500"
                  placeholder="Company Name"
                  disabled={isSubmitting || isSubmitted}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 bg-white"
                  disabled={isSubmitting || isSubmitted}
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

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="premium-button w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState, useEffect } from 'react';
import CEO from '../assets/Suit.png';

import {
  Book as BookIcon,
  Globe,
  Languages,
  Award,
  ShoppingCart,
} from 'lucide-react';

const Book = () => {
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
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy-900 to-navy-800">
          <div className="content-container">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  The Legal Lifeline of Global Businesses
                  <span className="text-gold-500">.</span>
                </h1>
                <p className="text-xl text-platinum-200 mb-8">
                  Navigate the complexities of business disruption in the
                  post-pandemic era with Adenola Adegbesan's groundbreaking
                  book.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="#languages" className="premium-button">
                    <Languages className="w-5 h-5 mr-2" />
                    Available Languages
                  </a>
                  <a
                    href="#order"
                    className="premium-button-outline flex items-center bg-transparent hover:bg-gold-500 hover:text-navy-900 border-gold-500 text-gold-500"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Order Now
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-500"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-500"></div>
                  <img
                    src={CEO}
                    alt="The Legal Lifeline of Global Businesses book cover"
                    className="w-full max-w-md rounded-lg shadow-2xl transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Overview */}
        <section className="py-20 bg-white">
          <div className="content-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="badge mb-4">Book Overview</span>
              <h2 className="section-heading mb-6">
                A Visionary Guide for Business Leaders
                <span className="text-gold-500">.</span>
              </h2>
              <p className="text-lg text-gray-700">
                A comprehensive approach to navigating legal challenges in a
                rapidly evolving global landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="premium-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Global Business Strategies
                </h3>
                <p className="text-gray-600">
                  Learn how to develop resilient legal frameworks that can
                  withstand international disruptions and market volatility
                  while maintaining compliance across jurisdictions.
                </p>
              </div>

              <div className="premium-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-xl font-bold mb-4">Ethical Leadership</h3>
                <p className="text-gray-600">
                  Discover how ethical decision-making and responsible
                  governance create sustainable competitive advantages in the
                  post-pandemic business environment.
                </p>
              </div>

              <div className="premium-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mb-6">
                  <BookIcon className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Integration</h3>
                <p className="text-gray-600">
                  Explore frameworks for ethically integrating artificial
                  intelligence into business operations while navigating complex
                  regulatory requirements.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
              <p>
                In "The Legal Lifeline of Global Businesses in the Post-Pandemic
                Era," Adenola Adegbesan provides a comprehensive blueprint for
                business leaders navigating the complex intersection of law,
                technology, and global commerce. Drawing from extensive research
                and practical experience, this groundbreaking work offers
                actionable strategies for organizations seeking to thrive amid
                unprecedented disruption.
              </p>
              <p>
                The book addresses critical questions facing today's executives:
                How can businesses maintain legal compliance while rapidly
                adapting to market changes? What governance structures best
                support innovation while mitigating risk? How can leaders
                leverage artificial intelligence ethically and responsibly?
              </p>
              <p>
                Through detailed case studies and expert analysis, Adenola
                demonstrates how forward-thinking legal strategies can transform
                challenges into competitive advantages. From multinational
                corporations to emerging startups, organizations of all sizes
                will find valuable insights for sustainable growth in an
                increasingly complex global landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="py-20 bg-navy-50">
          <div className="content-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="badge mb-4">Global Reach</span>
              <h2 className="section-heading mb-6">
                Available in 6 Languages
                <span className="text-gold-500">.</span>
              </h2>
              <p className="text-lg text-gray-700">
                Adenola's thought leadership reaches a global audience with
                translations available in major languages.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="premium-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-navy-800 font-bold text-xl">DE</span>
                </div>
                <h3 className="text-xl font-bold mb-2">German Edition</h3>
                <p className="text-gray-600 mb-4">
                  "Die rechtliche Lebensader globaler Unternehmen in der
                  Post-Pandemie-Ära"
                </p>
                <a
                  href="#order"
                  className="text-navy-800 hover:text-gold-500 font-medium transition-colors mt-auto"
                >
                  Learn More →
                </a>
              </div>

              <div className="premium-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-navy-800 font-bold text-xl">ES</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Spanish Edition</h3>
                <p className="text-gray-600 mb-4">
                  "El Salvavidas Legal de las Empresas Globales en la Era
                  Post-Pandémica"
                </p>
                <a
                  href="#order"
                  className="text-navy-800 hover:text-gold-500 font-medium transition-colors mt-auto"
                >
                  Learn More →
                </a>
              </div>

              <div className="premium-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-navy-800 font-bold text-xl">FR</span>
                </div>
                <h3 className="text-xl font-bold mb-2">French Edition</h3>
                <p className="text-gray-600 mb-4">
                  "La Bouée de Sauvetage Juridique des Entreprises Mondiales à
                  l'Ère Post-Pandémique"
                </p>
                <a
                  href="#order"
                  className="text-navy-800 hover:text-gold-500 font-medium transition-colors mt-auto"
                >
                  Learn More →
                </a>
              </div>

              <div className="premium-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-navy-800 font-bold text-xl">IT</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Italian Edition</h3>
                <p className="text-gray-600 mb-4">
                  "L'ancora di Salvezza Legale delle Imprese Globali nell'Era
                  Post-Pandemica"
                </p>
                <a
                  href="#order"
                  className="text-navy-800 hover:text-gold-500 font-medium transition-colors mt-auto"
                >
                  Learn More →
                </a>
              </div>

              <div className="premium-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-navy-800 font-bold text-xl">PL</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Polish Edition</h3>
                <p className="text-gray-600 mb-4">
                  "Prawna Linia Życia Globalnych Firm w Erze Postpandemicznej"
                </p>
                <a
                  href="#order"
                  className="text-navy-800 hover:text-gold-500 font-medium transition-colors mt-auto"
                >
                  Learn More →
                </a>
              </div>

              <div className="premium-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-navy-800 font-bold text-xl">PT</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Portuguese Edition</h3>
                <p className="text-gray-600 mb-4">
                  "A Tábua de Salvação Jurídica das Empresas Globais na Era
                  Pós-Pandêmica"
                </p>
                <a
                  href="#order"
                  className="text-navy-800 hover:text-gold-500 font-medium transition-colors mt-auto"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Order Section */}
        <section id="order" className="py-20 bg-white">
          <div className="content-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="badge mb-4">Get Your Copy</span>
              <h2 className="section-heading mb-6">
                Order The Book Today
                <span className="text-gold-500">.</span>
              </h2>
              <p className="text-lg text-gray-700">
                Available in hardcover, paperback, e-book, and audiobook formats
                from major retailers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <a
                href="#"
                className="premium-card p-8 hover:shadow-lg transition-all duration-300 flex items-center"
              >
                <img
                  src="https://placehold.co/120x60"
                  alt="Amazon"
                  className="w-[120px] mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">Amazon</h3>
                  <p className="text-gray-600">
                    Available in all formats and regions
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="premium-card p-8 hover:shadow-lg transition-all duration-300 flex items-center"
              >
                <img
                  src="https://placehold.co/120x60"
                  alt="Barnes & Noble"
                  className="w-[120px] mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">Barnes & Noble</h3>
                  <p className="text-gray-600">Hardcover and e-book</p>
                </div>
              </a>

              <a
                href="#"
                className="premium-card p-8 hover:shadow-lg transition-all duration-300 flex items-center"
              >
                <img
                  src="https://placehold.co/120x60"
                  alt="Apple Books"
                  className="w-[120px] mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">Apple Books</h3>
                  <p className="text-gray-600">E-book and audiobook</p>
                </div>
              </a>

              <a
                href="#"
                className="premium-card p-8 hover:shadow-lg transition-all duration-300 flex items-center"
              >
                <img
                  src="https://placehold.co/120x60"
                  alt="Kobo"
                  className="w-[120px] mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">Kobo</h3>
                  <p className="text-gray-600">E-book in multiple languages</p>
                </div>
              </a>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-xl font-bold mb-4">
                Bulk Orders & Corporate Packages
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                For bulk orders and corporate packages including training
                materials, please contact our team for special pricing and
                customized solutions.
              </p>
              <a
                href="mailto:adenola@adegbesan.com"
                className="premium-button inline-flex"
              >
                Contact for Bulk Orders
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Book;

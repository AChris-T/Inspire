import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-platinum-300 py-16">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link
              to="/"
              className="inline-block text-platinum-50 font-playfair text-3xl font-bold mb-4"
            >
              Adenola<span className="text-gold-500">.</span>
            </Link>
            <p className="text-platinum-400 mb-6">
              AI-powered business transformation strategist for Fortune 500
              executives, hedge funds, and policymakers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 hover:bg-navy-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 hover:bg-navy-700 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 hover:bg-navy-700 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-platinum-50 font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/speaking"
                  className="text-platinum-400 hover:text-gold-500 transition-colors"
                >
                  Keynote Speaking
                </Link>
              </li>
              <li>
                <Link
                  to="/consulting"
                  className="text-platinum-400 hover:text-gold-500 transition-colors"
                >
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/course"
                  className="text-platinum-400 hover:text-gold-500 transition-colors"
                >
                  AI Leadership Course
                </Link>
              </li>
              <li>
                <Link
                  to="/inspireedge"
                  className="text-platinum-400 hover:text-gold-500 transition-colors"
                >
                  InspireEdge AI Platform
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-platinum-50 font-semibold text-lg mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-platinum-400 hover:text-gold-500 transition-colors"
                >
                  About Adenola
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-platinum-400 hover:text-gold-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-platinum-400 hover:text-gold-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-platinum-400 hover:text-gold-500 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-platinum-50 font-semibold text-lg mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span className="text-platinum-400">
                  Email: info@adenola.com
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span className="text-platinum-400">
                  Phone: +234 811 269 8170
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                <span className="text-platinum-400">
                  New York • London • Singapore • Lagos
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-platinum-500 text-sm mb-4 md:mb-0">
            © {currentYear} Adenola Adegbesan. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-platinum-500 hover:text-gold-500 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-platinum-500 hover:text-gold-500 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-platinum-500 hover:text-gold-500 text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

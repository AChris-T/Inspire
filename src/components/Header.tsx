import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import bgl from '../assets/bgl.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Speaking', href: '/speaking' },
    { name: 'AI Course', href: '/course' },
    { name: 'Consulting', href: '/consulting' },
    { name: 'InspireEdge AI', href: '/inspireedge' },
    { name: 'Book', href: '/book' },
    { name: 'Blog', href: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Close mobile menu when route changes
    setMobileMenuOpen(false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full py-4 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-90 '
      }`}
    >
      <div className="content-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <img src={bgl} alt="" className="w-16 h-16" />
              {/*  <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center">
                <span className="text-gold-400 font-bold text-xl">AA</span>
              </div> */}
              <div className="font-playfair font-bold text-xl md:text-2xl text-navy-900">
                Adenola <span className="text-gold-500">Adegbesan</span>
                <h3 className="text-[15px] ">The AI Maverick</h3>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                  pathname === item.href ? 'text-gold-500' : 'text-navy-900'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="premium-button-outline text-sm"
              aria-label="Contact Adenola Adegbesan"
            >
              Get Started
            </Link>
          </nav>

          <button
            className="md:hidden text-navy-900 p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed positioning with proper colors */}
      <div
        className={`md:hidden fixed inset-0 bg-navy-950/95 backdrop-blur-md z-40 transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-xl font-medium transition-colors hover:text-gold-500 ${
                  pathname === item.href ? 'text-gold-500' : 'text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 py-3 px-8 bg-gold-500 hover:bg-gold-600 text-navy-950 rounded transition-colors font-medium text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

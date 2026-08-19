import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#journey", label: "JOURNEY" },
  { href: "#skills", label: "SKILLS" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (href) => {
    setIsMobileMenuOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="portfolio-navbar">

        {/* Logo */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="navbar-logo"
        >
          MKM<span>.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigation(link.href)}
              className="navbar-link"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNavigation("#contact")}
          className="navbar-cta"
        >
          <span className="navbar-cta-text">
            LET'S CONNECT
          </span>

          <span className="navbar-cta-icon">
            <ArrowUpRight size={15} />
          </span>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden navbar-mobile-button"
          onClick={() =>
            setIsMobileMenuOpen((prev) => !prev)
          }
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mobile-navbar-menu">

          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() =>
                handleNavigation(link.href)
              }
              className="mobile-navbar-link"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() =>
              handleNavigation("#contact")
            }
            className="mobile-navbar-cta"
          >
            LET'S CONNECT
            <ArrowUpRight size={17} />
          </button>

        </div>
      )}
    </header>
  );
};
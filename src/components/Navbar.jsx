import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, List, Mail, X } from "lucide-react";

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu after link click
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed w-full z-10 transition-all ${
        scrolled ? "bg-[#0a1324]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          className="text-2xl font-bold cursor-pointer"
        >
          <span className="text-white">Portfolio</span>
          <span className="text-blue-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase() === "home" ? "hero" : item.toLowerCase()}
                spy={true}
                smooth={true}
                className={`cursor-pointer transition-colors ${
                  activeSection ===
                  (item.toLowerCase() === "home" ? "hero" : item.toLowerCase())
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Karamarandas"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/karam-yacoub-65857a284/"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:karamarandas03@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 cursor-pointer"
        >
          {isMenuOpen ? <X /> : <List />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a1324] shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase() === "home" ? "hero" : item.toLowerCase()}
                spy={true}
                smooth={true}
                onClick={closeMenu}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </Link>
            ))}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/KaramYacoub"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/karam-yacoub-65857a284/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:karamarandas03@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

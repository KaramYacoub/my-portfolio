import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080f1d] py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              className="text-2xl font-bold cursor-pointer"
            >
              <span className="text-white">Portfolio</span>
              <span className="text-blue-400">.</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0 text-gray-400">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
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

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © {currentYear} Karam Yacoub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

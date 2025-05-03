import { Github, ChevronDown, ExternalLink } from "lucide-react";
import { Link } from "react-scroll";
import me from "../assets/me.JPG";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-[#0a1324] pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="md:w-1/2">
            <p className="text-blue-400 mb-4 text-2xl">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-[0_0_20px_rgba(60,130,250,0.5)]">
              Karam Yacoub
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-300">
              I build amazing web experiences
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl">
              I'm passionate about creating efficient and scalable web
              applications, and I continuously seek opportunities to enhance my
              skills and knowledge in the field. My goal is to become a
              proficient full stack developer, capable of delivering
              comprehensive and innovative software solutions
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                className="px-6 py-3 cursor-pointer bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-colors rounded flex items-center group"
              >
                <span>View My Work</span>
                <ExternalLink
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <a
                href="https://github.com/Karamarandas"
                target="_blank"
                className="px-6 py-3 bg-transparent hover:bg-gray-800 transition-colors rounded flex items-center"
              >
                <Github size={18} className="mr-2" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={me}
              alt="Karam Yacoub"
              className="w-72 h-72 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link to="about" spy={true} smooth={true} className="cursor-pointer">
          <ChevronDown size={32} className="text-blue-400" />
        </Link>
      </div>
    </section>
  );
}

export default Hero;

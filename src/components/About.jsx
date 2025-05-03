import { Code, Database, Globe, Blocks } from "lucide-react";

function About() {
  const skills = {
    frontend: [
      "React",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "HTML & CSS",
      "EJS",
      "Razor",
    ],
    backend: ["Node.js", "Express.js", "C#", "ASP.NET", "Java"],
    database: ["MongoDB", "PostgreSQL", "MySQL"],
    others: ["Git", "GitHub", "VS Code", "Visual Studio", "Figma", "Postman"],
  };

  const icons = {
    frontend: <Code size={24} className="text-blue-400 mr-2" />,
    backend: <Blocks size={24} className="text-blue-400 mr-2" />,
    database: <Database size={24} className="text-blue-400 mr-2" />,
    others: <Globe size={24} className="text-blue-400 mr-2" />,
  };

  return (
    <section id="about" className="py-20 bg-[#0a1324]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">
          About Me
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: About Text */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white">Who am I?</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate web developer with experience in building
                modern web applications. I enjoy turning complex problems into
                simple, beautiful, and intuitive designs.
              </p>
              <p>
                My main area of expertise is frontend development with React and
                JavaScript, building small to medium web applications, features,
                animations, and coding interactive layouts.
              </p>
              <p>
                I also have experience working with backend technologies like
                Node.js and databases such as MongoDB and PostgreSQL, allowing
                me to develop full-stack applications.
              </p>
            </div>
          </div>

          {/* Right: Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-[#111a2e] p-6 rounded-lg border border-[#1e293b] hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/50"
              >
                <div className="flex items-center mb-4">
                  {icons[category]}
                  <h4 className="text-xl font-bold text-white capitalize">
                    {category}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {skillList.map((skill, index) => (
                    <li key={index} className="text-gray-400">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

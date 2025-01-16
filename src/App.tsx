import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Briefcase, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-pink-500 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6">
            Hi, I'm <span className="text-yellow-400">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Full Stack Developer, building futuristic digital experiences.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 text-white hover:text-yellow-400 transition-colors hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 text-white hover:text-yellow-400 transition-colors hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com"
               className="p-3 text-white hover:text-yellow-400 transition-colors hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-white opacity-70 hover:opacity-100" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-yellow-400" size={24} />
            <h2 className="text-4xl font-bold text-white">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Developer workspace"
                className="rounded-lg shadow-xl border-4 border-white"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-white mb-6">
                I'm a passionate Full Stack Developer with 5 years of experience. Let's make the web better, one line of code at a time.
              </p>
              <p className="text-lg text-white">
                When I'm not coding, I'm experimenting with cutting-edge technologies or working on some futuristic project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400" id="skills">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Code className="text-yellow-400" size={24} />
            <h2 className="text-4xl font-bold text-white">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL'].map((skill) => (
              <div key={skill} className="p-6 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 rounded-lg shadow-xl hover:scale-105 transition-all">
                <p className="text-xl font-bold text-white">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400" id="projects">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-yellow-400" size={24} />
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'A sleek e-commerce platform built with React and Node.js',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                link: 'https://github.com'
              },
              {
                title: 'Task Management App',
                description: 'A collaborative task management app with real-time updates',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                link: 'https://github.com'
              }
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-yellow-400 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-500 py-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} mjslnsk. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;


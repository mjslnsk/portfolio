import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Briefcase, User, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-pink-500">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-300">Maja - Junior UI/UX Designer from Slovenia.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
            I’m passionate about creating tailored digital solutions for users and businesses across diverse industries. 
            With a keen eye for aesthetics and functionality, 
            I focus on designing engaging, intuitive, and conversion-driven experiences.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/majasselin" target="_blank" rel="noopener noreferrer" 
               className="p-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://linkedin.com/in/majaselinsek?originalSubdomain=Si" target="_blank" rel="noopener noreferrer"
               className="p-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:maja.selinsek@gmail.com"
               className="p-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

   {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Developer workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-700 mb-6">
                Hi, I'm Maja - Junior UI/UX Designer from Slovenia.
              </p>
              <p className="text-lg text-gray-700">
                I’m passionate about creating tailored digital solutions for users and businesses across diverse industries. <br />
                With a keen eye for aesthetics and functionality, <br />
                I focus on designing engaging, intuitive, and conversion-driven experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-pink-500" id="skills">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Code className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL'].map((skill) => (
              <div key={skill} className="p-4 bg-pink-500 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'A full-featured e-commerce platform built with React and Node.js',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                link: 'https://github.com'
              },
              {
                title: 'Task Management App',
                description: 'A collaborative task management application with real-time updates',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                link: 'https://github.com'
              }
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
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


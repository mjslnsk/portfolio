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
                src="https://images.un

import React from 'react';
import { 
  Brain, 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  MessageSquare, 
  Settings, 
  Cloud, 
  Shield, 
  CheckSquare 
} from 'lucide-react';

const services = [
  { icon: Brain, label: 'AI/ML', color: 'from-cyan-400 to-blue-500' },
  { icon: Globe, label: 'Web Development', color: 'from-green-400 to-emerald-500' },
  { icon: Smartphone, label: 'App Development', color: 'from-purple-400 to-violet-500' },
  { icon: TrendingUp, label: 'Digital Marketing', color: 'from-orange-400 to-red-500' },
  { icon: Palette, label: 'UI/UX Design', color: 'from-pink-400 to-rose-500' },
  { icon: MessageSquare, label: 'Social Media Admin', color: 'from-blue-400 to-indigo-500' },
  { icon: Settings, label: 'DevOps', color: 'from-gray-400 to-slate-500' },
  { icon: Cloud, label: 'Cloud Computing', color: 'from-sky-400 to-cyan-500' },
  { icon: Shield, label: 'Cybersecurity', color: 'from-red-400 to-orange-500' },
  { icon: CheckSquare, label: 'Project Management', color: 'from-emerald-400 to-green-500' }
];

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        
        {/* Logo Section */}
        <div className="relative mb-8 group">
          {/* Glow Effect Behind Logo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-3xl opacity-30 scale-150 group-hover:opacity-50 transition-opacity duration-1000" />
          
          {/* 3D Logo Container */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <div className="relative transform-gpu perspective-1000 hover:scale-110 transition-transform duration-700">
              <img 
                src="/Adobe Express - file.png"
                alt="M cube Logo"
                className="w-full h-full object-contain filter drop-shadow-2xl bg-transparent"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.3))',
                  mixBlendMode: 'screen'
                }}
              />
              
              {/* Holographic Border */}
              <div className="absolute inset-0 rounded-full border border-blue-400/30 animate-pulse" />
              <div className="absolute inset-2 rounded-full border border-purple-400/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Orbiting Elements */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-4" />
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 translate-y-4" />
            <div className="absolute left-0 top-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-4 -translate-y-1/2" />
            <div className="absolute right-0 top-1/2 w-2 h-2 bg-violet-400 rounded-full transform translate-x-4 -translate-y-1/2" />
          </div>
        </div>

        {/* Company Name */}
        <div className="text-center mb-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 tracking-wider">
            M 4-softwares
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Innovation. Execution. Excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 w-full max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.label}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glass Card */}
                  <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`} />
                    
                    {/* Icon Container */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${service.color} p-3 shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      
                      {/* Service Label */}
                      <h3 className="text-sm md:text-base font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {service.label}
                      </h3>
                    </div>

                    {/* Holographic Border */}
                    <div className="absolute inset-0 rounded-2xl border border-blue-400/0 group-hover:border-blue-400/30 transition-colors duration-500" />
                  </div>

                  {/* Floating Animation */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default HeroSection;
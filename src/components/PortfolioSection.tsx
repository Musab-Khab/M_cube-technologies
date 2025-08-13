import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Award,
  Users,
  TrendingUp,
  Smartphone,
  Globe,
  Brain,
  Shield,
  Cloud,
  Palette
} from 'lucide-react';

const categories = ['All', 'Web Development', 'Mobile Apps', 'AI/ML', 'UI/UX Design', 'Cloud Solutions'];

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'Web Development',
    description: 'Advanced financial analytics platform with real-time data visualization and AI-powered insights.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'D3.js'],
    results: ['40% increase in user engagement', '60% faster data processing', '99.9% uptime'],
    icon: TrendingUp,
    color: 'from-green-400 to-emerald-500',
    featured: true
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'Mobile Apps',
    description: 'HIPAA-compliant telemedicine app connecting patients with healthcare providers seamlessly.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'WebRTC', 'Stripe'],
    results: ['10K+ active users', '4.8/5 app store rating', '50% reduction in wait times'],
    icon: Smartphone,
    color: 'from-blue-400 to-cyan-500',
    featured: true
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Scalable multi-vendor marketplace with advanced search, AI recommendations, and payment processing.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'PostgreSQL', 'Redis', 'AWS'],
    results: ['300% increase in sales', '2M+ products listed', '99.95% payment success rate'],
    icon: Globe,
    color: 'from-purple-400 to-violet-500',
    featured: false
  },
  {
    id: 4,
    title: 'AI Content Generator',
    category: 'AI/ML',
    description: 'GPT-powered content creation platform for marketing teams with brand voice customization.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'OpenAI API', 'Docker'],
    results: ['80% time savings', '95% content approval rate', '500+ enterprise clients'],
    icon: Brain,
    color: 'from-cyan-400 to-blue-500',
    featured: true
  },
  {
    id: 5,
    title: 'Cybersecurity Dashboard',
    category: 'Cloud Solutions',
    description: 'Real-time threat monitoring and incident response platform for enterprise security teams.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Python', 'Elasticsearch', 'Kubernetes'],
    results: ['99.9% threat detection', '70% faster response time', 'SOC 2 compliant'],
    icon: Shield,
    color: 'from-red-400 to-orange-500',
    featured: false
  },
  {
    id: 6,
    title: 'Design System & Branding',
    category: 'UI/UX Design',
    description: 'Comprehensive design system and brand identity for a Fortune 500 technology company.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Figma', 'Adobe Creative Suite', 'Storybook', 'Sass'],
    results: ['50% faster design process', '90% design consistency', '25+ component library'],
    icon: Palette,
    color: 'from-pink-400 to-rose-500',
    featured: false
  }
];

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">150+</div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">300%</div>
            <div className="text-gray-400 text-sm">Avg. ROI Increase</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <Cloud className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime Guarantee</div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl p-3 shadow-lg`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-400 text-sm font-semibold">{project.category}</span>
                      <div className="flex space-x-2">
                        <button className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </button>
                        <button className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                          <Github className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="space-y-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-br ${project.color} rounded-lg p-2 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <span className="text-blue-400 text-sm font-semibold">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2 mt-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded border border-white/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-green-400 text-sm font-semibold">View Details</span>
                    <Play className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business. 
              Our team is ready to turn your vision into reality.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-400 font-semibold">{selectedProject.category}</span>
                <div className="flex space-x-2">
                  <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <Github className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-white/10 text-gray-300 text-sm rounded-lg border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Key Results</h4>
                  <div className="space-y-3">
                    {selectedProject.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
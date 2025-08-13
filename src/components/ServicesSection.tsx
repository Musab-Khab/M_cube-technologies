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
  CheckSquare,
  ArrowRight
} from 'lucide-react';

const services = [
  { 
    icon: Brain, 
    label: 'AI/ML', 
    color: 'from-cyan-400 to-blue-500',
    description: 'Machine learning models, AI automation, and intelligent data analysis solutions.',
    features: ['Custom ML Models', 'Data Analytics', 'AI Automation', 'Predictive Analysis']
  },
  { 
    icon: Globe, 
    label: 'Web Development', 
    color: 'from-green-400 to-emerald-500',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    features: ['React/Next.js', 'E-commerce', 'CMS Integration', 'Performance Optimization']
  },
  { 
    icon: Smartphone, 
    label: 'App Development', 
    color: 'from-purple-400 to-violet-500',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization']
  },
  { 
    icon: TrendingUp, 
    label: 'Digital Marketing', 
    color: 'from-orange-400 to-red-500',
    description: 'Data-driven marketing strategies to grow your online presence and conversions.',
    features: ['SEO/SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting']
  },
  { 
    icon: Palette, 
    label: 'UI/UX Design', 
    color: 'from-pink-400 to-rose-500',
    description: 'User-centered design solutions that create engaging and intuitive experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  { 
    icon: MessageSquare, 
    label: 'Social Media Admin', 
    color: 'from-blue-400 to-indigo-500',
    description: 'Complete social media management to build your brand and engage your audience.',
    features: ['Content Creation', 'Community Management', 'Social Strategy', 'Influencer Outreach']
  },
  { 
    icon: Settings, 
    label: 'DevOps', 
    color: 'from-gray-400 to-slate-500',
    description: 'Streamlined development operations for faster, more reliable software delivery.',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation']
  },
  { 
    icon: Cloud, 
    label: 'Cloud Computing', 
    color: 'from-sky-400 to-cyan-500',
    description: 'Scalable cloud solutions and migrations to optimize your infrastructure.',
    features: ['AWS/Azure/GCP', 'Cloud Migration', 'Serverless Architecture', 'Cost Optimization']
  },
  { 
    icon: Shield, 
    label: 'Cybersecurity', 
    color: 'from-red-400 to-orange-500',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
  },
  { 
    icon: CheckSquare, 
    label: 'Project Management', 
    color: 'from-emerald-400 to-green-500',
    description: 'Expert project management to ensure timely delivery and successful outcomes.',
    features: ['Agile/Scrum', 'Resource Planning', 'Risk Management', 'Quality Assurance']
  }
];

const ServicesSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.label}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.color} p-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {service.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className="flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Holographic Border */}
                <div className="absolute inset-0 rounded-2xl border border-blue-400/0 group-hover:border-blue-400/30 transition-colors duration-500" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">Start Your Project Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import React from 'react';
import { 
  Users, 
  Award, 
  Clock, 
  Target, 
  Lightbulb, 
  Rocket, 
  Shield, 
  Heart,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const stats = [
  { number: '150+', label: 'Projects Completed', icon: CheckCircle },
  { number: '50+', label: 'Happy Clients', icon: Heart },
  { number: '5+', label: 'Years Experience', icon: Clock },
  { number: '98%', label: 'Success Rate', icon: TrendingUp }
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Target,
    title: 'Execution',
    description: 'Our proven methodologies and experienced team ensure projects are delivered on time and within budget.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in every project, from initial concept to final delivery.',
    color: 'from-purple-400 to-pink-500'
  }
];

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Founder',
    expertise: 'AI/ML, Strategy',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'from-blue-500 to-purple-500'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    expertise: 'Full-Stack Development',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Designer',
    expertise: 'UI/UX, Branding',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'from-pink-500 to-rose-500'
  },
  {
    name: 'Emily Zhang',
    role: 'DevOps Engineer',
    expertise: 'Cloud, Security',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'from-cyan-500 to-blue-500'
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">M cube</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a forward-thinking technology agency dedicated to transforming businesses through innovative digital solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center">
            <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              At M cube, we believe technology should empower businesses to reach their full potential. 
              We combine cutting-edge innovation with proven execution strategies to deliver exceptional 
              results that drive growth and create lasting value for our clients.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${value.color} p-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-24 h-24 rounded-full mx-auto object-cover border-2 border-white/20"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Why Choose M cube?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Proven Track Record</h4>
                    <p className="text-gray-300 text-sm">150+ successful projects across various industries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                    <p className="text-gray-300 text-sm">Certified professionals with deep industry expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Cutting-Edge Technology</h4>
                    <p className="text-gray-300 text-sm">Latest tools and frameworks for optimal results</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                    <p className="text-gray-300 text-sm">Round-the-clock assistance and maintenance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Agile Methodology</h4>
                    <p className="text-gray-300 text-sm">Flexible, iterative approach for faster delivery</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Transparent Communication</h4>
                    <p className="text-gray-300 text-sm">Regular updates and clear project visibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Film, Tv, Lightbulb, Camera, Video, Megaphone, Globe, Users, Mail, Bot, ChevronRight, Zap, Star, Play, Award, Clock, Heart, Target, Rocket, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ClientLogos from "@/components/ClientLogos";
import usePageTitle from "@/hooks/usePageTitle";

const serviceCategories = [
  {
    icon: Sparkles,
    title: "Creative Development",
    description: "Transform your ideas into compelling concepts with our expert creative team.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
    services: [
      { name: "Campaign Ideation & Creative Strategy", icon: Lightbulb },
      { name: "Scriptwriting & Screenplay Development", icon: Film },
      { name: "Storyboarding & Narrative Structuring", icon: Video },
      { name: "Concept Development & Visual Planning", icon: Camera },
      { name: "Creative Direction & Brand Alignment", icon: Megaphone },
    ],
  },
  {
    icon: Film,
    title: "Film & Video Production",
    description: "Full-service production capabilities for every type of visual content.",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
    services: [
      { name: "Full-Service Video Production", icon: Video },
      { name: "Direction & Cinematography", icon: Camera },
      { name: "TV Commercials & Digital Ad Films", icon: Tv },
      { name: "Corporate Films & Brand Films", icon: Film },
      { name: "Product Showcase Videos & Testimonials", icon: Megaphone },
    ],
  },
  {
    icon: Globe,
    title: "Growth & Media Add-Ons",
    description: "Extend your reach and maximize impact with our digital services.",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50",
    services: [
      { name: "Social Media Optimization & Cut-downs", icon: Globe },
      { name: "Influencer Marketing with Relevant Creators", icon: Users },
      { name: "Localization & Multilingual Dubbing", icon: Globe },
      { name: "Email Marketing Campaigns", icon: Mail },
      { name: "AI Agents & Automation Solutions", icon: Bot },
    ],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "Understanding your brand and objectives", color: "from-blue-400 to-cyan-500", icon: Lightbulb },
  { step: "02", title: "Concept", desc: "Developing creative direction and strategy", color: "from-purple-400 to-pink-500", icon: Sparkles },
  { step: "03", title: "Production", desc: "Executing with precision and artistry", color: "from-orange-400 to-red-500", icon: Film },
  { step: "04", title: "Delivery", desc: "Polished final content ready to deploy", color: "from-green-400 to-teal-500", icon: Zap },
];

const whyChooseUs = [
  { icon: Award, title: "Award Winning", desc: "Multiple industry awards for creative excellence", color: "from-yellow-400 to-orange-500" },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your deadlines and deliver as promised", color: "from-blue-400 to-cyan-500" },
  { icon: Heart, title: "Client Focused", desc: "Your vision is our priority at every step", color: "from-pink-400 to-rose-500" },
  { icon: Target, title: "Results Driven", desc: "We measure success by your ROI", color: "from-green-400 to-emerald-500" },
];

const testimonials = [
  { name: "Sarah Johnson", role: "Marketing Director, TechCorp", text: "Strike Productions delivered beyond our expectations. The commercial they produced increased our brand awareness by 40%.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
  { name: "Michael Chen", role: "CEO, StartupXYZ", text: "Professional, creative, and incredibly talented team. They understood our vision perfectly and brought it to life beautifully.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { name: "Emily Davis", role: "Brand Manager, FashionCo", text: "Working with Strike was a game-changer for our brand. Their attention to detail and creative approach is unmatched.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
];

const packages = [
  { name: "Starter", price: "5,000", features: ["1 Video Production", "Basic Editing", "2 Revision Rounds", "HD Delivery"], color: "from-blue-400 to-cyan-500", popular: false },
  { name: "Professional", price: "15,000", features: ["3 Video Productions", "Advanced Editing", "5 Revision Rounds", "4K Delivery", "Social Media Cuts", "Color Grading"], color: "from-purple-400 to-pink-500", popular: true },
  { name: "Enterprise", price: "Custom", features: ["Unlimited Productions", "Full Post-Production", "Unlimited Revisions", "4K/8K Delivery", "All Social Formats", "Dedicated Team"], color: "from-orange-400 to-red-500", popular: false },
];

const Services = () => {
  usePageTitle("Our Services");
  
  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section className="min-h-screen py-32 relative overflow-hidden flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: 360,
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-blue-400/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: -360,
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: 180
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-300/20 to-orange-400/20 rounded-full blur-3xl"
        />
        
        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 right-24 hidden lg:block"
        >
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl flex items-center justify-center">
            <Camera className="text-white" size={36} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-32 left-24 hidden lg:block"
        >
          <div className="w-18 h-18 rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-2xl flex items-center justify-center p-4">
            <Film className="text-white" size={32} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 left-32 hidden xl:block"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-xl flex items-center justify-center">
            <Play className="text-white" size={24} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-1/4 right-40 hidden xl:block"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-xl flex items-center justify-center">
            <Sparkles className="text-white" size={28} />
          </div>
        </motion.div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block px-5 py-2 rounded-full bg-white shadow-xl border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8"
              >
                ✨ Our Services
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  COMPLETE
                </motion.span>
                <br />
                <motion.span 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500"
                >
                  PRODUCTION
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  SOLUTIONS
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed mb-10"
              >
                From initial concept to final delivery, we offer end-to-end services to bring your vision to life with excellence and creativity.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 text-white font-bold px-8 py-6 text-lg shadow-2xl">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/5 font-bold px-8 py-6 text-lg">
                    <a href="https://calendly.com/akash-digitace/30min" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2" size={20} />
                      Book a Call
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Hero Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-6" />
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
                  alt="Film Production"
                  className="relative rounded-3xl shadow-2xl border-4 border-white/50"
                />
                
                {/* Floating Stats Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">50+</div>
                      <div className="text-sm text-muted-foreground">Awards Won</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -right-8 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">500+</div>
                      <div className="text-sm text-muted-foreground">Projects Done</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4">What We Offer</span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">SERVICES</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive solutions tailored to your unique needs
            </p>
          </motion.div>
          
          <div className="space-y-32">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  {/* Category Header */}
                  <div className={`lg:sticky lg:top-28 ${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className={`w-24 h-24 bg-gradient-to-br ${category.color} rounded-3xl flex items-center justify-center shadow-2xl`}
                      >
                        <category.icon className="text-white" size={44} />
                      </motion.div>
                      <span className="font-display text-8xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-300">
                        {String(categoryIndex + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                      {category.title.split(' ')[0]}{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">{category.title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <p className="text-muted-foreground text-xl leading-relaxed mb-8">
                      {category.description}
                    </p>
                    
                    {/* Decorative image */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="hidden lg:block"
                    >
                      <div className={`w-full h-56 ${category.bgColor} rounded-3xl overflow-hidden shadow-lg`}>
                        <img
                          src={categoryIndex === 0 
                            ? "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80"
                            : categoryIndex === 1
                            ? "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80"
                            : "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80"
                          }
                          alt={category.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Services List */}
                  <div className={`space-y-4 ${categoryIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: categoryIndex % 2 === 1 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: serviceIndex * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ x: categoryIndex % 2 === 1 ? -10 : 10, scale: 1.02 }}
                        className="group p-6 bg-white border-2 border-gray-100 rounded-2xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <motion.div 
                              whileHover={{ rotate: 10 }}
                              className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                            >
                              <service.icon className="text-white" size={26} />
                            </motion.div>
                            <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                              {service.name}
                            </span>
                          </div>
                          <ChevronRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" size={24} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {categoryIndex < serviceCategories.length - 1 && (
                  <div className="mt-32 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-600 text-sm font-bold tracking-widest uppercase mb-4">Why Strike</span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">CHOOSE US</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              What sets us apart from the competition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl`}
                >
                  <item.icon className="text-white" size={36} />
                </motion.div>
                <h3 className="font-display text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-blue-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80')] bg-cover bg-center opacity-10" />
        
        {/* Animated shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-32 h-32 border-4 border-white/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-48 h-48 border-4 border-white/10 rounded-3xl"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-bold tracking-widest uppercase mb-4">How We Work</span>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6">
              OUR <span className="text-yellow-300">PROCESS</span>
            </h2>
            <p className="text-white/80 text-lg">
              A streamlined approach that delivers exceptional results every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="relative text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl`}
                >
                  <item.icon className="text-white" size={36} />
                </motion.div>
                <div className="font-display text-6xl text-white/20 mb-2">
                  {item.step}
                </div>
                <h3 className="font-display text-2xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70">
                  {item.desc}
                </p>
                {index < 3 && (
                  <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="hidden md:block absolute top-1/2 -right-4 z-10"
                  >
                    <ArrowRight className="text-white/50" size={24} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-bold tracking-widest uppercase mb-4">Pricing</span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">PACKAGE</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Flexible pricing options to fit your budget and needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative p-8 rounded-3xl border-2 ${pkg.popular ? 'border-primary bg-gradient-to-b from-primary/5 to-purple-50 shadow-2xl' : 'border-gray-200 bg-white shadow-lg'} transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl text-foreground mb-2">{pkg.name}</h3>
                  <div className="font-display text-5xl text-foreground">
                    {pkg.price === "Custom" ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Custom</span>
                    ) : (
                      <>
                        <span className="text-2xl">$</span>{pkg.price}
                      </>
                    )}
                  </div>
                  {pkg.price !== "Custom" && <p className="text-muted-foreground text-sm">per project</p>}
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    asChild 
                    className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-primary to-purple-500 text-white' : ''}`}
                    variant={pkg.popular ? "default" : "outline"}
                    size="lg"
                  >
                    <Link to="/contact">
                      Get Started
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 text-sm font-bold tracking-widest uppercase mb-4">Testimonials</span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              WHAT CLIENTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">SAY</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Meeting Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-64 h-64 border-8 border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-80 h-80 border-8 border-white/10 rounded-full"
        />
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-white/20 backdrop-blur-lg flex items-center justify-center"
            >
              <Calendar className="text-white" size={48} />
            </motion.div>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6">
              LET'S <span className="text-yellow-300">TALK</span>
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Schedule a free 30-minute consultation to discuss your project and see how we can help bring your vision to life.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-6 text-lg shadow-2xl">
                <a href="https://calendly.com/akash-digitace/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2" size={24} />
                  Schedule a Meeting
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white" />
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-2xl"
            >
              <Rocket className="text-white" size={48} />
            </motion.div>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">CREATE</span>?
            </h2>
            <p className="text-muted-foreground text-xl mb-10">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 text-white font-bold px-10 py-6 text-lg shadow-2xl">
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-2 font-bold px-10 py-6 text-lg">
                  <Link to="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

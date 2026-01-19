import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight, Film, Tv, Lightbulb, Rocket, Award, Users, Star, Zap, Camera, Sparkles, Calendar, Heart, Target, CheckCircle2, Quote, Globe, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ClientLogos from "@/components/ClientLogos";
import usePageTitle from "@/hooks/usePageTitle";

const services = [
  {
    icon: Lightbulb,
    title: "Creative Development",
    description: "Campaign ideation, scriptwriting, storyboarding, and visual planning that brings your vision to life.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Film,
    title: "Film & Video Production",
    description: "Full-service production including direction, cinematography, and post-production excellence.",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Rocket,
    title: "Growth & Media Add-Ons",
    description: "Social optimization, influencer marketing, localization, and AI automation solutions.",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50",
  },
];

const stats = [
  { number: "500+", label: "Projects Delivered", icon: Star, color: "text-yellow-500" },
  { number: "150+", label: "Happy Clients", icon: Users, color: "text-blue-500" },
  { number: "25+", label: "Industry Awards", icon: Award, color: "text-purple-500" },
  { number: "10+", label: "Years Experience", icon: Zap, color: "text-pink-500" },
];

const featuredWork = [
  {
    title: "Luxury Brand Campaign",
    category: "TV Commercial",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Tech Product Launch",
    category: "Digital Film",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Fashion Week Documentary",
    category: "Corporate Film",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    color: "from-pink-500 to-rose-600",
  },
];

const testimonials = [
  { name: "Rahul Mehta", role: "CMO, TechVentures", text: "Strike transformed our brand story into a cinematic masterpiece. The ROI exceeded all expectations.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { name: "Ananya Kapoor", role: "Brand Director, LuxeLife", text: "Their creative vision and attention to detail is unmatched. Every frame tells a compelling story.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
  { name: "Vikram Singh", role: "Founder, StartupHub", text: "Working with Strike was seamless. They understood our vision and elevated it beyond imagination.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We learn about your brand, goals, and vision", icon: Target, color: "from-blue-400 to-cyan-500" },
  { step: "02", title: "Strategy", desc: "Crafting the perfect creative approach", icon: Lightbulb, color: "from-purple-400 to-pink-500" },
  { step: "03", title: "Production", desc: "Bringing your story to life with precision", icon: Film, color: "from-orange-400 to-red-500" },
  { step: "04", title: "Delivery", desc: "Polished content ready to captivate", icon: Rocket, color: "from-green-400 to-teal-500" },
];

const Index = () => {
  usePageTitle("");
  
  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
          
          {/* Animated Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: 360,
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-cyan-400/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: -360,
              x: [0, -80, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              y: [0, -40, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-300/25 to-orange-300/25 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-green-300/20 to-teal-300/20 rounded-full blur-3xl"
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 right-24 hidden lg:block z-20"
        >
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl flex items-center justify-center">
            <Camera className="text-white" size={36} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-32 left-24 hidden lg:block z-20"
        >
          <div className="w-18 h-18 p-4 rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-2xl flex items-center justify-center">
            <Film className="text-white" size={32} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-40 hidden xl:block z-20"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-xl flex items-center justify-center">
            <Sparkles className="text-white" size={28} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-40 left-40 hidden xl:block z-20"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-xl flex items-center justify-center">
            <Play className="text-white" size={24} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 right-60 hidden xl:block z-20"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-red-500 shadow-lg flex items-center justify-center">
            <Heart className="text-white" size={20} />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-xl border border-primary/20 mb-8"
                >
                  <motion.span 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500"
                  />
                  <span className="text-sm text-primary font-bold tracking-wider">Premium Production Studio</span>
                  <Sparkles size={14} className="text-primary" />
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-display text-5xl sm:text-6xl lg:text-8xl leading-none tracking-wider mb-8"
                >
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-foreground block"
                  >
                    WE CREATE
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 block"
                  >
                    STRIKING
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-foreground block"
                  >
                    VISUALS
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
                >
                  Award-winning film and TV ads production company crafting compelling visual stories 
                  that captivate audiences and elevate brands worldwide.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row items-start gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 text-white font-bold px-8 h-14 text-base shadow-2xl group">
                      <Link to="/portfolio" className="flex items-center gap-2">
                        <Play size={18} />
                        View Our Work
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 hover:bg-primary/5 px-8 h-14 text-base bg-white/80 backdrop-blur-sm font-bold">
                      <a href="https://calendly.com/akash-digitace/30min" target="_blank" rel="noopener noreferrer">
                        <Calendar size={18} className="mr-2" />
                        Book a Call
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-3xl blur-2xl transform rotate-3" />
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
                    alt="Film Production"
                    className="relative rounded-3xl shadow-2xl border-4 border-white/50 w-full"
                  />
                  
                  {/* Floating Cards */}
                  <motion.div
                    animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                        <Award className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-lg">25+</div>
                        <div className="text-xs text-muted-foreground">Awards Won</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -right-8 bottom-1/4 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                        <CheckCircle2 className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-lg">500+</div>
                        <div className="text-xs text-muted-foreground">Projects Done</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 left-1/4 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                        <Users className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-lg">150+</div>
                        <div className="text-xs text-muted-foreground">Happy Clients</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2 bg-white/50 backdrop-blur-sm">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-gradient-to-b from-primary to-purple-500"
            />
          </div>
        </motion.div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Services Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/20 to-white" />
        
        {/* Decorative images */}
        <motion.img 
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&q=80"
          alt=""
          className="absolute top-20 -right-20 w-64 h-64 object-cover rounded-3xl shadow-2xl opacity-20 rotate-12 hidden lg:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=300&q=80"
          alt=""
          className="absolute bottom-20 -left-20 w-64 h-64 object-cover rounded-3xl shadow-2xl opacity-20 -rotate-12 hidden lg:block"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4">What We Do</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wider mb-6">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">SERVICES</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From concept to completion, we deliver end-to-end production services that transform ideas into impactful visual content.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 lg:p-10 rounded-3xl bg-white border border-border hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon size={28} className="text-white" />
                </motion.div>
                <h3 className="font-display text-2xl tracking-wide text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 mt-6 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
                
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-[60px] rounded-tr-3xl`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-blue-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80')] bg-cover bg-center opacity-10" />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-40 h-40 border-4 border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white/10 rounded-full"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <stat.icon size={36} className="text-white" />
                </motion.div>
                <div className="font-display text-5xl lg:text-6xl text-white mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-white" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-bold tracking-widest uppercase mb-4">Portfolio</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wider">
                FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">WORK</span>
              </h2>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button asChild variant="outline" className="border-2 border-primary/30 hover:bg-primary/5 bg-white shadow-sm font-bold">
                <Link to="/portfolio" className="flex items-center gap-2">
                  View All Projects <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWork.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-xl"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${work.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <motion.span 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className={`inline-block w-fit px-3 py-1 rounded-full bg-gradient-to-r ${work.color} text-white text-xs font-semibold mb-3`}
                  >
                    {work.category}
                  </motion.span>
                  <h3 className="font-display text-2xl lg:text-3xl tracking-wide text-white">{work.title}</h3>
                  <div className="mt-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play size={16} className="text-white ml-0.5" fill="white" />
                    </div>
                    <span className="text-sm font-medium">Watch Project</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 border-2 border-dashed border-primary/20 rounded-full hidden lg:block"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-bold tracking-widest uppercase mb-4">How We Work</span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">PROCESS</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven approach that delivers exceptional results every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl`}
                >
                  <item.icon className="text-white" size={36} />
                </motion.div>
                <div className="font-display text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-300 mb-2">
                  {item.step}
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.desc}
                </p>
                {index < 3 && (
                  <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="hidden md:block absolute top-1/2 -right-4 z-10"
                  >
                    <ArrowRight className="text-primary/30" size={24} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative"
              >
                <Quote className="absolute top-6 right-6 text-primary/10" size={48} />
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

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
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
              Let's craft something extraordinary together. Your vision, our expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 text-white font-bold px-10 py-6 text-lg shadow-2xl">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-2 font-bold px-10 py-6 text-lg">
                  <Link to="/portfolio">
                    <Play className="mr-2" size={20} />
                    View Portfolio
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

export default Index;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Award, Lightbulb, Sparkles, Star, Calendar, Film, Zap, Globe, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ClientLogos from "@/components/ClientLogos";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We push creative boundaries to deliver fresh, impactful visual storytelling.", color: "from-yellow-400 to-orange-500" },
  { icon: Award, title: "Excellence", description: "Every frame we craft meets the highest standards of quality and artistry.", color: "from-blue-400 to-cyan-500" },
  { icon: Users, title: "Collaboration", description: "We work closely with our clients to bring their unique vision to life.", color: "from-purple-400 to-pink-500" },
  { icon: Heart, title: "Passion", description: "Our love for filmmaking drives us to create content that truly resonates.", color: "from-red-400 to-rose-500" },
];

const team = [
  { name: "Alex Kumar", role: "Founder & Creative Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", color: "from-blue-400 to-cyan-500", bio: "15+ years in film production" },
  { name: "Priya Sharma", role: "Head of Production", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", color: "from-purple-400 to-pink-500", bio: "Award-winning producer" },
  { name: "Raj Patel", role: "Lead Cinematographer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", color: "from-orange-400 to-red-500", bio: "Visual storytelling expert" },
  { name: "Sarah Chen", role: "Post-Production Lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", color: "from-green-400 to-teal-500", bio: "VFX & editing specialist" },
];

const stats = [
  { number: "15+", label: "Years Experience", icon: Star },
  { number: "500+", label: "Projects Completed", icon: Film },
  { number: "25+", label: "Industry Awards", icon: Award },
  { number: "150+", label: "Happy Clients", icon: Users },
];

const milestones = [
  { year: "2009", title: "Strike Founded", desc: "Started as a small creative studio in Mumbai" },
  { year: "2012", title: "First Major Campaign", desc: "Produced our first national TV commercial" },
  { year: "2015", title: "Industry Recognition", desc: "Won Best Commercial at Cannes Lions" },
  { year: "2018", title: "Global Expansion", desc: "Opened offices in Dubai and Singapore" },
  { year: "2021", title: "Digital Innovation", desc: "Launched AI-powered production tools" },
  { year: "2024", title: "Industry Leader", desc: "Named Top Production House in Asia Pacific" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section className="min-h-screen py-32 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: 360, x: [0, 80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: -360, y: [0, 60, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-300/15 rounded-full blur-3xl"
        />
        
        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-32 right-32 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl flex items-center justify-center">
            <Star className="text-white" size={28} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-40 left-32 hidden lg:block"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-xl flex items-center justify-center">
            <Film className="text-white" size={24} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-20 hidden xl:block"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg flex items-center justify-center">
            <Zap className="text-white" size={20} />
          </div>
        </motion.div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-block px-4 py-1.5 rounded-full bg-white shadow-lg border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-6"
              >
                ✨ About Strike
              </motion.span>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 leading-tight">
                CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">STORIES</span>
                <br />
                THAT INSPIRE
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">
                For over 15 years, Strike has been at the forefront of premium film and TV production, creating visual masterpieces that captivate audiences and elevate brands.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-xl">
                    <Link to="/portfolio">
                      <Play className="mr-2" size={20} />
                      View Our Work
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" size="lg" className="border-2 font-bold">
                    <a href="https://calendly.com/akash-digitace/30min" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2" size={20} />
                      Book a Call
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-3xl blur-2xl transform rotate-3" />
                <img
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop"
                  alt="Strike Production Studio"
                  className="relative rounded-3xl shadow-2xl border-4 border-white/50 w-full"
                />
                
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white border border-border p-4 md:p-6 rounded-2xl shadow-2xl"
                >
                  <div className="font-display text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">15+</div>
                  <div className="text-muted-foreground text-xs md:text-sm">Years of Excellence</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
                >
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=200&q=80"
                    alt="Behind the scenes"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-blue-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80')] bg-cover bg-center opacity-10" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <stat.icon size={28} className="text-white" />
                </motion.div>
                <div className="font-display text-5xl text-white mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4">Our Story</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                FROM PASSION TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">EXCELLENCE</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Strike was born from a passion for storytelling and a vision to redefine what's possible in film and advertising production. What started as a small creative studio has grown into one of the industry's most respected production houses.
                </p>
                <p>
                  Our journey has been marked by countless collaborations with leading brands, talented artists, and visionary creators. Each project has shaped our approach: combine technical excellence with creative innovation.
                </p>
                <p>
                  Today, we continue to push boundaries, embracing new technologies and storytelling techniques while staying true to our core belief – that great content has the power to move people and transform businesses.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80"
                    alt="Behind the scenes"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl mt-8"
                >
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&q=80"
                    alt="Production"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-r from-primary via-blue-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1920&q=80')] bg-cover bg-center opacity-10" />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-40 h-40 border-4 border-white/10 rounded-full"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl"
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="font-display text-3xl text-white mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                To create compelling visual content that tells powerful stories, drives brand success, and leaves a lasting impact on audiences worldwide. We strive to be the creative partner of choice for brands seeking excellence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl"
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={40} />
              </div>
              <h3 className="font-display text-3xl text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                To be the world's most innovative and trusted production house, setting new standards in filmmaking and advertising. We envision a future where every brand has access to world-class visual storytelling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones - Redesigned with 3D effect */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-64 h-64 border-2 border-dashed border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-80 h-80 border-2 border-dashed border-purple-500/10 rounded-full"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-6"
            >
              🚀 Our Journey
            </motion.span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              KEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">MILESTONES</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A timeline of achievements that shaped our journey to becoming industry leaders
            </p>
          </motion.div>

          {/* 3D Timeline Grid */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 hidden lg:block transform -translate-x-1/2 rounded-full" />
            
            <div className="space-y-8 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 0 ? '' : 'lg:text-right'} lg:mb-16`}
                >
                  {/* Timeline Node */}
                  <motion.div 
                    className="absolute left-1/2 top-8 transform -translate-x-1/2 z-20 hidden lg:block"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-purple-500 shadow-lg" />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-primary"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`relative ${index % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}
                  >
                    <div className="relative group">
                      {/* 3D Shadow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4" />
                      
                      <div className="relative p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        {/* Gradient accent */}
                        <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-32 h-32 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full -translate-y-1/2 ${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'}`} />
                        
                        <div className="relative">
                          <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-bold mb-4 ${index % 2 === 0 ? '' : 'lg:ml-auto'}`}
                          >
                            <Calendar size={16} />
                            {milestone.year}
                          </motion.div>
                          
                          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors">
                            {milestone.title}
                          </h3>
                          
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {milestone.desc}
                          </p>
                          
                          {/* Decorative icon */}
                          <motion.div 
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className={`absolute bottom-4 ${index % 2 === 0 ? 'right-4' : 'lg:left-4 right-4'} opacity-10 group-hover:opacity-30 transition-opacity`}
                          >
                            <Sparkles size={48} className="text-primary" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Empty space for alternating layout */}
                  {index % 2 === 0 && <div className="hidden lg:block" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white relative overflow-hidden">
        <motion.img 
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&q=80"
          alt=""
          className="absolute top-20 -right-20 w-64 h-64 object-cover rounded-3xl shadow-2xl opacity-10 rotate-12 hidden lg:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4">Core Values</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">STAND FOR</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do at Strike.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <value.icon className="text-white" size={36} />
                </motion.div>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-40 w-64 h-64 border-2 border-dashed border-primary/20 rounded-full hidden lg:block"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-bold tracking-widest uppercase mb-4">Our Team</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">TEAM</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The creative minds behind Strike's success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square overflow-hidden"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  <div className={`absolute -bottom-3 -right-3 w-12 h-12 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg`}>
                    <Sparkles className="text-white" size={20} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm font-bold mb-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-600 text-sm font-bold tracking-widest uppercase mb-4">Why Strike</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">CHOOSE US</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              What sets Strike Films apart from the competition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Award Winning", desc: "Multiple industry awards for creative excellence", color: "from-yellow-400 to-orange-500" },
              { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround without compromising quality", color: "from-blue-400 to-cyan-500" },
              { icon: Heart, title: "Client First", desc: "Your vision is our priority at every step", color: "from-pink-400 to-rose-500" },
              { icon: CheckCircle2, title: "Quality Assured", desc: "Premium production standards guaranteed", color: "from-green-400 to-emerald-500" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <item.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary via-blue-500 to-purple-500 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-64 h-64 border-8 border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-80 h-80 border-8 border-white/10 rounded-full"
        />
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-white/20 backdrop-blur-lg flex items-center justify-center"
            >
              <Heart className="text-white" size={48} />
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              WANT TO <span className="text-yellow-300">WORK</span> WITH US?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let's create something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 shadow-2xl">
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-10">
                  <a href="https://calendly.com/akash-digitace/30min" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2" size={18} />
                    Book a Call
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

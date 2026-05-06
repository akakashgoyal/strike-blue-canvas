import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight, Film, Tv, Lightbulb, Rocket, Award, Users, Star, Zap, Camera,Megaphone, Sparkles, Calendar, Heart, Target, CheckCircle2, Quote, Globe, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Layout from "@/components/layout/Layout";
import ClientLogos from "@/components/ClientLogos";
import usePageTitle from "@/hooks/usePageTitle";

const services = [
  {
    icon: Film,
    title: "Film & Video Production",
    description: `From concept to final cut, we create compelling visual stories that elevate your brand.
 Ad films, brand films, reels, TVC, and high-quality photoshoots crafted to leave a lasting impact.`,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
    included: ['Ad Films', 'Brand Films', 'Product Shoots', 'Commercial Photography']

  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: `We don’t just market, we scale your presence.
Data-driven strategies that boost visibility, engagement, and conversions across digital platforms.
`,
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
    included: ['Social Media Marketing', 'Influencer Marketing', 'Paid Advertising']
      },
  {
    icon: Lightbulb,
    title: "Branding & Strategy",
    description: `Build a brand that stands out and sells itself.
We define your identity, position you in the market, and create launch strategies that drive real growth.`,
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50",
    included: ['Brand Positioning', 'Brand Identity', 'Personal Branding', 'Go-to-Market Strategy']
  },
];

const stats = [
  { number: "8 weeks", label: "Avg. Projects Completion Time", icon: Star, color: "text-yellow-500" },
  { number: "4.6", label: "Clients Satisfaction Score", icon: Users, color: "text-blue-500" },
  { number: "75%", label: "Repeat Clients", icon: Award, color: "text-purple-500" },
  { number: "<2 hours", label: "Response Time", icon: Zap, color: "text-pink-500" },
];

const featuredWork = [
  {
    title: "Bank Of Baroda | Ek Khas Dost",
    category: "Bank Of Baroda",
    image: "https://img.youtube.com/vi/dumi861BdrY/maxresdefault.jpg",
    color: "from-amber-500 to-orange-600",
    link: "https://youtu.be/dumi861BdrY?si=fNcbV1CRKUd3FfxB "
  
  },
  {
    title: "Bank Of Baroda | Pradhan Mantri Vidyalaxmi Yojana",
    category: "Bank Of Baroda",
    image: "https://img.youtube.com/vi/VWQxzq3w2kA/maxresdefault.jpg",
    color: "from-amber-500 to-orange-600",
    link: "https://youtu.be/VWQxzq3w2kA?feature=shared"
  },
  {
    title: "छठ के बरत बड़ा पावन",
    category: 'BOB X Chhat Puja',
    image: "https://img.youtube.com/vi/Nd5Q32acpS8/maxresdefault.jpg",
    color: "from-yellow-400 to-orange-500",
    link: "https://youtu.be/Nd5Q32acpS8"
  },
  
  {
    title: "बरतिन पर होई ना सहाय",
    category: 'BOB X Chhat Puja',
    image: "https://img.youtube.com/vi/HytO02X1DHs/maxresdefault.jpg",
    color: "from-yellow-400 to-orange-500",
    link: "https://youtu.be/HytO02X1DHs?si=GIYa9DGEzO_wXrRy"
  },
  {
    title: "छठ बरतिन करेली गुहार",
    category: 'Laxmipati Sarees X Chhat Puja',
    image: "https://img.youtube.com/vi/ZAw9gQ5TTrc/maxresdefault.jpg",
    color: "from-yellow-400 to-orange-500",
    link: "https://youtu.be/ZAw9gQ5TTrc?si=fCbwLiCVgpRrEGh"
  },
  {
    title: "BOBCard",
    category: "BOBCard",
    image: "https://img.youtube.com/vi/u8AM508UURg/maxresdefault.jpg",
    color: "from-blue-500 to-purple-600",
    link: "https://youtu.be/u8AM508UURg?si=7UpsihHsWZpDq7a0"
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
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from featuredWork
  const categories = ["All", ...Array.from(new Set(featuredWork.map((work) => work.category)))];

  // Filter featured work based on selected category
  const filteredWork =
    selectedCategory === "All"
      ? featuredWork
      : featuredWork.filter((work) => work.category === selectedCategory);
  
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
          
        </motion.div>
        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-32 left-24 hidden lg:block z-20"
        >
          
        </motion.div>
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-40 hidden xl:block z-20"
        >
          
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-40 left-40 hidden xl:block z-20"
        >
          
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 right-60 hidden xl:block z-20"
        >
          
        </motion.div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">

  {/* 🔥 CENTERED BADGE (GLOBAL) */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
    <motion.div 
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.2, type: "spring" }}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-primary/20"
    >
      <motion.span 
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500"
      />
      <span className="text-sm text-primary font-bold tracking-wider">
        Premium Production Studio
      </span>
      <Sparkles size={14} className="text-primary" />
    </motion.div>
  </div>

  {/* 🔽 MAIN GRID */}
  <div className="max-w-6xl mx-auto pt-24">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center lg:items-start text-center lg:text-left"
      >
        
        {/* HEADING */}
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
            className="block"
          >
            WE CREATE
          </motion.span>

          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500"
          >
            STRIKING
          </motion.span>

          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="block"
          >
            VISUALS
          </motion.span>
        </motion.h1>
        
        {/* PARAGRAPH */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
        >
          Award-winning film and TV ads production company crafting compelling visual stories 
          that captivate audiences and elevate brands worldwide.
        </motion.p>
        
        {/* BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 text-white font-bold px-8 h-14 shadow-2xl group">
              <Link to="/portfolio" className="flex items-center gap-2">
                <Play size={18} />
                View Our Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 px-8 h-14 bg-white/80 backdrop-blur-sm font-bold">
              <a href="https://calendly.com/indira-strikefilms/30min" target="_blank" rel="noopener noreferrer">
                <Calendar size={18} className="mr-2" />
                Book a Call
              </a>
            </Button>
          </motion.div>
        </motion.div>

      </motion.div>

      {/* RIGHT IMAGE */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-3xl blur-2xl rotate-3" />
          
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
            alt="Film Production"
            className="relative rounded-3xl shadow-2xl border-4 border-white/50 w-full"
          />
        </motion.div>
      </motion.div>

    </div>
  </div>
</div>

        {/* Scroll indicator */}
        
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
                {service.included?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.included.map((item) => (
                      <span
                        key={`${service.title}-${item}`}
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${service.color}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}
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
                WORK THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">SPEAKS</span>
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

          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg"
                    : "bg-white border-2 border-gray-200 text-foreground hover:border-primary"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredWork.map((work, index) => (
                <CarouselItem key={work.title} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-xl h-full"
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
                        <span className="text-sm font-medium">
                          <Link to={work.link} target="_blank">Watch Project</Link></span>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
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
                <div className="font-display text-5xl text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-900 mb-2">
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
                <a href="https://calendly.com/indira-strikefilms/30min" target="_blank" rel="noopener noreferrer">
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
            <h2 className="font-display text-2xl md:text-4xl text-foreground mb-6">
              Let’s Create Something 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500"> Extraordinary</span>?
            </h2>
            <p className="text-muted-foreground text-xl mb-10">
              Your vision, our expertise crafted into visuals that truly make an impact.

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

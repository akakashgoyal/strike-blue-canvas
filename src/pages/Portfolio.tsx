import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Film, Tv, Sparkles, X, Award, Eye, Calendar, Clock, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import usePageTitle from "@/hooks/usePageTitle";

type Category = "all" | "films" | "tv";

const portfolioItems = [
  { id: 1, title: "Luxury Car Campaign", category: "films" as const, thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=450&fit=crop", client: "AutoBrand X", color: "from-amber-500 to-orange-600", year: "2024", views: "2.5M" },
  { id: 2, title: "Fashion Week Documentary", category: "films" as const, thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop", client: "Vogue India", color: "from-pink-500 to-rose-600", year: "2024", views: "1.8M" },
  { id: 3, title: "Tech Product Launch", category: "tv" as const, thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=450&fit=crop", client: "TechCorp", color: "from-blue-500 to-purple-600", year: "2024", views: "3.2M" },
  { id: 4, title: "Food & Beverage Ad", category: "tv" as const, thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=450&fit=crop", client: "Gourmet Foods", color: "from-green-500 to-teal-600", year: "2023", views: "4.1M" },
  { id: 5, title: "Real Estate Showcase", category: "films" as const, thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=450&fit=crop", client: "Premium Homes", color: "from-cyan-500 to-blue-600", year: "2023", views: "1.2M" },
  { id: 6, title: "Travel Documentary", category: "films" as const, thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=450&fit=crop", client: "Wanderlust", color: "from-purple-500 to-pink-600", year: "2023", views: "2.8M" },
  { id: 7, title: "Fitness Brand Commercial", category: "tv" as const, thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop", client: "FitLife", color: "from-red-500 to-orange-600", year: "2024", views: "1.5M" },
  { id: 8, title: "Beauty Product Campaign", category: "tv" as const, thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=450&fit=crop", client: "GlowUp", color: "from-pink-400 to-purple-500", year: "2024", views: "2.1M" },
];

const stats = [
  { icon: Film, value: "500+", label: "Projects" },
  { icon: Eye, value: "50M+", label: "Total Views" },
  { icon: Award, value: "25+", label: "Awards" },
  { icon: Users, value: "150+", label: "Clients" },
];

const Portfolio = () => {
  usePageTitle("Portfolio");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const filteredItems = portfolioItems.filter((item) => activeCategory === "all" || item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section className="min-h-[70vh] py-32 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: 360, x: [0, 80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: -360, y: [0, 60, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-300/15 rounded-full blur-3xl"
        />
        
        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-32 right-32 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-xl flex items-center justify-center">
            <Play className="text-white ml-1" size={28} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-40 left-40 hidden lg:block"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-xl flex items-center justify-center">
            <Film className="text-white" size={24} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-24 hidden xl:block"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 shadow-lg flex items-center justify-center">
            <Award className="text-white" size={20} />
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
                🎬 Our Portfolio
              </motion.span>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
                FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">WORK</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">
                Explore our collection of award-winning films and commercials that have captivated audiences worldwide.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-xl">
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2" size={20} />
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
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl transform rotate-3" />
                <div className="relative rounded-3xl shadow-2xl border-4 border-white/50 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
                    alt="Featured Work"
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div>
                      <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">Featured</span>
                      <h3 className="font-display text-2xl text-white mt-2">Award-Winning Campaign</h3>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl cursor-pointer">
                      <Play className="text-primary ml-1" size={32} fill="currentColor" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary via-blue-500 to-purple-500">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-white/80" />
                <div className="font-display text-4xl text-white">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-white/95 backdrop-blur-lg z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              {[
                { key: "all" as Category, label: "All Projects", icon: Sparkles, color: "from-primary to-purple-500" },
                { key: "films" as Category, label: "Films", icon: Film, color: "from-orange-400 to-red-500" },
                { key: "tv" as Category, label: "TV Ads", icon: Tv, color: "from-blue-400 to-cyan-500" },
              ].map((tab) => (
                <motion.button 
                  key={tab.key} 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  onClick={() => setActiveCategory(tab.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${activeCategory === tab.key ? `bg-gradient-to-r ${tab.color} text-white shadow-lg` : "bg-gray-100 text-muted-foreground hover:bg-gray-200"}`}
                >
                  <tab.icon size={18} /> {tab.label}
                </motion.button>
              ))}
            </div>
            <span className="text-muted-foreground text-sm">
              Showing {filteredItems.length} projects
            </span>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }} 
                viewport={{ once: true }} 
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer" 
                onClick={() => setSelectedVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-2xl backdrop-blur-sm"
                      >
                        <Play className="text-primary ml-1" size={28} fill="currentColor" />
                      </motion.div>
                    </div>
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`px-3 py-1.5 bg-gradient-to-r ${item.color} text-white text-xs font-bold rounded-full shadow-lg`}>
                        {item.category === "films" ? "Film" : "TV Ad"}
                      </span>
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-black/40 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.client}</span>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Eye size={14} />
                        <span className="text-xs font-medium">{item.views}</span>
                      </div>
                    </div>
                    <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                    
                    {/* Hover Arrow */}
                    <div className="flex items-center gap-2 mt-4 text-primary opacity-0 group-hover:opacity-100 transition-all">
                      <span className="text-sm font-bold">Watch Now</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4" 
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }} 
            animate={{ scale: 1, y: 0 }} 
            className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <iframe src={selectedVideo} className="w-full h-full" allowFullScreen />
          </motion.div>
          <button 
            onClick={() => setSelectedVideo(null)} 
            className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <X size={24} />
          </button>
        </motion.div>
      )}

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 text-sm font-bold tracking-widest uppercase mb-4">Recognition</span>
            <h2 className="font-display text-4xl text-foreground mb-4">
              AWARD-WINNING <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">EXCELLENCE</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {["Cannes Lions", "D&AD", "Clio Awards", "One Show", "ADFEST"].map((award, index) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200"
              >
                <Award className="text-yellow-600" size={24} />
                <span className="font-bold text-foreground">{award}</span>
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
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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
              <Star className="text-white" size={48} />
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              LIKE WHAT <span className="text-yellow-300">YOU SEE</span>?
            </h2>
            <p className="text-white/90 text-lg mb-8">Let's create something remarkable for your brand.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 shadow-2xl">
                  <Link to="/contact">Start Your Project <ArrowRight className="ml-2" size={18} /></Link>
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

export default Portfolio;

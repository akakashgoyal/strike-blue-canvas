import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User, Sparkles, BookOpen, TrendingUp, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-ai-in-film-production",
    title: "The Future of AI in Film Production: What to Expect in 2025",
    excerpt: "Explore how artificial intelligence is transforming the filmmaking industry and what it means for creative professionals.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    author: "Alex Kumar",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    date: "January 10, 2025",
    readTime: "8 min read",
    category: "Technology",
  },
  {
    id: 2,
    slug: "creating-compelling-brand-stories",
    title: "Creating Compelling Brand Stories That Resonate",
    excerpt: "Learn the art of storytelling and how to craft narratives that connect with your audience on an emotional level.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    author: "Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "January 5, 2025",
    readTime: "6 min read",
    category: "Creative",
  },
  {
    id: 3,
    slug: "behind-the-scenes-luxury-campaign",
    title: "Behind the Scenes: Our Award-Winning Luxury Campaign",
    excerpt: "A detailed look at the creative process behind one of our most successful advertising campaigns.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop",
    author: "Raj Patel",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "December 28, 2024",
    readTime: "10 min read",
    category: "Case Study",
  },
  {
    id: 4,
    slug: "social-media-video-trends-2025",
    title: "Social Media Video Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with our analysis of the biggest video trends shaping social media platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    author: "Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    date: "December 20, 2024",
    readTime: "7 min read",
    category: "Marketing",
  },
  {
    id: 5,
    slug: "cinematography-techniques-modern-advertising",
    title: "Cinematography Techniques for Modern Advertising",
    excerpt: "Master the visual language of cinema and apply it to create stunning commercial content.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=500&fit=crop",
    author: "Raj Patel",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "December 15, 2024",
    readTime: "9 min read",
    category: "Production",
  },
  {
    id: 6,
    slug: "influencer-marketing-brand-films",
    title: "Integrating Influencer Marketing with Brand Films",
    excerpt: "Discover how to create authentic collaborations that amplify your brand message.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
    author: "Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "Marketing",
  },
];

const categories = ["All", "Technology", "Creative", "Case Study", "Marketing", "Production"];

const trendingTopics = [
  { name: "AI in Film", count: 12 },
  { name: "Brand Storytelling", count: 8 },
  { name: "Video Marketing", count: 15 },
  { name: "Production Tips", count: 10 },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section className="min-h-[60vh] py-32 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        />
        
        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-32 right-32 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-xl flex items-center justify-center">
            <BookOpen className="text-white" size={28} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-32 left-32 hidden lg:block"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-xl flex items-center justify-center">
            <TrendingUp className="text-white" size={24} />
          </div>
        </motion.div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white shadow-lg border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-6"
            >
              ✨ Our Blog
            </motion.span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              INSIGHTS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">IDEAS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Explore our thoughts on filmmaking, advertising, creativity, and the future of visual storytelling.
            </p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-xl"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-border sticky top-20 bg-white/95 backdrop-blur-lg z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  category === activeCategory
                    ? "bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg"
                    : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-8 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto">
            <span className="text-sm font-bold text-muted-foreground whitespace-nowrap flex items-center gap-2">
              <TrendingUp size={16} className="text-primary" />
              Trending:
            </span>
            {trendingTopics.map((topic, index) => (
              <motion.span
                key={topic.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm whitespace-nowrap hover:border-primary/30 cursor-pointer transition-all"
              >
                {topic.name}
                <span className="text-xs text-primary font-bold">{topic.count}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to={`/blog/${blogPosts[0].slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
                <div className="space-y-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-bold rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors leading-tight">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={blogPosts[0].authorImage}
                      alt={blogPosts[0].author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{blogPosts[0].author}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {blogPosts[0].date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {blogPosts[0].readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold pt-2 group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center"
            >
              <Sparkles className="text-white" size={36} />
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              STAY <span className="text-yellow-300">UPDATED</span>
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Subscribe to our newsletter for the latest insights, trends, and behind-the-scenes content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder:text-white/60 focus:outline-none focus:border-white"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 h-auto">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

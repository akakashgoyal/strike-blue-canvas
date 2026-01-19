import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Newspaper, Download, Calendar, Award, Star, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const pressItems = [
  { id: 1, title: "Strike Productions Wins Best Commercial at Cannes Lions 2024", publication: "Ad Age", date: "December 2024", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop", link: "#" },
  { id: 2, title: "How Strike is Revolutionizing Brand Storytelling in India", publication: "Campaign India", date: "November 2024", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop", link: "#" },
  { id: 3, title: "The Future of AI in Video Production: An Interview with Strike's CEO", publication: "Forbes India", date: "October 2024", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop", link: "#" },
  { id: 4, title: "Strike Productions Partners with Major Streaming Platform", publication: "Variety", date: "September 2024", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&h=600&fit=crop", link: "#" },
  { id: 5, title: "Behind the Scenes: Strike's Award-Winning Luxury Campaign", publication: "The Economic Times", date: "August 2024", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop", link: "#" },
  { id: 6, title: "Strike Named Top Production House in Asia Pacific", publication: "Marketing Week", date: "July 2024", image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop", link: "#" },
];

const awards = [
  { name: "Cannes Lions 2024", category: "Best Commercial", icon: Award },
  { name: "D&AD Awards", category: "Gold Pencil", icon: Star },
  { name: "Clio Awards", category: "Grand Prix", icon: Award },
  { name: "One Show", category: "Best in Show", icon: Star },
];

const Press = () => {
  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section className="min-h-[60vh] py-32 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        />
        
        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-32 right-32 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-xl flex items-center justify-center">
            <Newspaper className="text-white" size={28} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-40 left-40 hidden lg:block"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl flex items-center justify-center">
            <Award className="text-white" size={24} />
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
              📰 Press & Media
            </motion.span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              IN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">NEWS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Read about our latest achievements, partnerships, and industry recognition from leading publications worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Marquee */}
      <section className="py-8 bg-gradient-to-r from-primary via-blue-500 to-purple-500 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-white"
              >
                <award.icon size={24} />
                <div>
                  <div className="font-bold">{award.name}</div>
                  <div className="text-white/70 text-sm">{award.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Press */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4">Featured Story</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              LATEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">COVERAGE</span>
            </h2>
          </motion.div>

          <motion.a
            href={pressItems[0].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={pressItems[0].image}
                  alt={pressItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-bold rounded-full">
                  {pressItems[0].publication}
                </span>
                <h3 className="font-display text-3xl text-foreground group-hover:text-primary transition-colors leading-tight">
                  {pressItems[0].title}
                </h3>
                <p className="text-muted-foreground">{pressItems[0].date}</p>
                <div className="flex items-center gap-2 text-primary font-bold pt-2 group-hover:gap-3 transition-all">
                  Read Full Article
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Press Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressItems.slice(1).map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group block"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white text-primary text-xs font-bold rounded-full">
                      {item.publication}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <ExternalLink size={18} className="text-primary" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-muted-foreground text-sm">{item.date}</span>
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Press Inquiries */}
      <section className="py-24 bg-gradient-to-r from-primary via-blue-500 to-purple-500 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-64 h-64 border-8 border-white/10 rounded-full"
        />
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center"
              >
                <Newspaper className="text-white" size={40} />
              </motion.div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                MEDIA <span className="text-yellow-300">INQUIRIES</span>
              </h2>
              <p className="text-white/90 text-lg mb-8">
                For press inquiries, interview requests, or media partnerships, please reach out to our communications team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 shadow-2xl">
                    <a href="mailto:press@strike.com">
                      Contact Press Team
                      <ArrowRight className="ml-2" size={18} />
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 font-bold">
                    <a href="https://calendly.com/akash-digitace/30min" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2" size={18} />
                      Schedule Interview
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-bold tracking-widest uppercase mb-4">Downloads</span>
            <h2 className="font-display text-4xl text-foreground mb-4">
              BRAND <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">ASSETS</span>
            </h2>
            <p className="text-muted-foreground">
              Download our official logos and brand guidelines for media use.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 bg-white border border-gray-200 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="mb-6 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                <span className="font-display text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">STRIKE</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">Primary Logo (Light)</p>
              <Button variant="outline" size="sm" className="w-full">
                <Download className="mr-2" size={16} />
                Download
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="mb-6 p-6 bg-white/10 rounded-2xl">
                <span className="font-display text-4xl text-white">STRIKE</span>
              </div>
              <p className="text-white/60 text-sm mb-4">Primary Logo (Dark)</p>
              <Button variant="outline" size="sm" className="w-full border-white/30 text-white hover:bg-white/10">
                <Download className="mr-2" size={16} />
                Download
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 bg-gradient-to-br from-primary to-purple-600 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="mb-6 p-6 bg-white/20 rounded-2xl">
                <Sparkles className="w-12 h-12 mx-auto text-white" />
              </div>
              <p className="text-white/80 text-sm mb-4">Brand Guidelines</p>
              <Button size="sm" className="w-full bg-white text-primary hover:bg-white/90">
                <Download className="mr-2" size={16} />
                Download PDF
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Press;

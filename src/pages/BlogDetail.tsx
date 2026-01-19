import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, Share2, Twitter, Linkedin, Facebook, ArrowRight, Tag, Bookmark, ThumbsUp, MessageCircle, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

// Mock blog post data
const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorImage: string;
  authorBio: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string[];
}> = {
  "future-of-ai-in-film-production": {
    title: "The Future of AI in Film Production: What to Expect in 2025",
    excerpt: "Explore how artificial intelligence is transforming the filmmaking industry and what it means for creative professionals.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
    author: "Alex Kumar",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    authorBio: "Creative Director at Strike with 15+ years of experience in film production and emerging technologies.",
    date: "January 10, 2025",
    readTime: "8 min read",
    category: "Technology",
    tags: ["AI", "Film Production", "Innovation", "Future Tech"],
    content: [
      "Artificial intelligence is revolutionizing every aspect of film production, from pre-production planning to post-production editing. As we enter 2025, the integration of AI tools in filmmaking has reached unprecedented levels, offering both exciting opportunities and important considerations for creative professionals.",
      "In pre-production, AI-powered tools are now capable of analyzing scripts to predict audience engagement, suggest visual treatments, and even generate preliminary storyboards. These tools don't replace human creativity but augment it, allowing filmmakers to explore multiple creative directions quickly and efficiently.",
      "Production has seen the introduction of AI-assisted camera systems that can track subjects more intelligently, suggest optimal lighting setups, and even help with real-time color grading on set. Virtual production techniques, enhanced by AI, are becoming more accessible to productions of all sizes.",
      "Post-production is perhaps where AI has made the most significant impact. From automated editing assistants that can create rough cuts based on shot analysis, to AI-powered visual effects that once required massive render farms, the tools available today are transforming what's possible.",
      "However, with these advances come important questions about creativity, authorship, and the role of human artists in an increasingly automated industry. The most successful filmmakers are those who view AI as a collaborative tool rather than a replacement for human vision and artistry.",
      "Looking ahead, we expect to see even more sophisticated AI tools that understand context, emotion, and narrative in ways that more closely mirror human understanding. The key for production companies like Strike is to stay at the forefront of these developments while maintaining the human touch that makes great storytelling resonate.",
    ],
  },
  "creating-compelling-brand-stories": {
    title: "Creating Compelling Brand Stories That Resonate",
    excerpt: "Learn the art of storytelling and how to craft narratives that connect with your audience on an emotional level.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop",
    author: "Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    authorBio: "Head of Production at Strike, specializing in brand storytelling and creative strategy.",
    date: "January 5, 2025",
    readTime: "6 min read",
    category: "Creative",
    tags: ["Storytelling", "Branding", "Marketing", "Content"],
    content: [
      "In today's crowded media landscape, brands that tell compelling stories stand out from the noise. But what makes a brand story truly resonate with audiences? It starts with understanding that great stories are not about the brand itself—they're about the people the brand serves.",
      "The most effective brand narratives focus on transformation. They show how a product or service enables customers to overcome challenges, achieve goals, or become the best version of themselves. This hero's journey framework, adapted for commercial storytelling, creates an emotional connection that pure feature-based marketing cannot achieve.",
      "Authenticity is crucial. Modern audiences are highly attuned to inauthentic messaging. The stories that resonate are those that reflect genuine brand values and real customer experiences. This means being willing to be vulnerable, to show imperfection, and to connect on a human level.",
      "Visual storytelling amplifies emotional impact. The combination of compelling imagery, thoughtful pacing, and evocative sound design can communicate in seconds what might take paragraphs of text to convey. This is where professional production value makes a measurable difference in audience engagement.",
      "Finally, the best brand stories are consistent across touchpoints while being adapted for each platform's unique characteristics. A brand narrative should feel cohesive whether experienced as a 30-second TV spot, a social media story, or a long-form documentary.",
    ],
  },
};

const relatedPosts = [
  {
    slug: "cinematography-techniques-modern-advertising",
    title: "Cinematography Techniques for Modern Advertising",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=250&fit=crop",
    category: "Production",
    date: "December 15, 2024",
  },
  {
    slug: "social-media-video-trends-2025",
    title: "Social Media Video Trends to Watch in 2025",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
    category: "Marketing",
    date: "December 20, 2024",
  },
  {
    slug: "behind-the-scenes-luxury-campaign",
    title: "Behind the Scenes: Award-Winning Campaign",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=250&fit=crop",
    category: "Case Study",
    date: "December 28, 2024",
  },
];

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsData[slug || ""] || blogPostsData["future-of-ai-in-film-production"];

  return (
    <Layout>
      {/* Hero Section - NEW */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        
        {/* Animated Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />

        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-32 right-32 hidden lg:block"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-500 shadow-xl flex items-center justify-center">
            <Sparkles className="text-white" size={24} />
          </div>
        </motion.div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-bold rounded-full mb-6"
            >
              {post.category}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/80 mb-8 max-w-3xl"
            >
              {post.excerpt}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-14 h-14 rounded-full object-cover border-3 border-white/30"
                />
                <div>
                  <div className="font-bold text-white">{post.author}</div>
                  <div className="text-sm text-white/60">Author</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <Calendar size={16} />
                  {post.date}
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <Clock size={16} />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Tags Section */}
      <section className="py-8 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <Tag className="text-muted-foreground" size={18} />
            {post.tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-8"
            >
              {/* Featured Image in Content */}
              <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                {post.content.map((paragraph, index) => (
                  <motion.p 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground leading-relaxed mb-6 text-lg"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Engagement Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
                    >
                      <ThumbsUp size={18} className="text-primary" />
                      <span className="text-sm font-medium">Like</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
                    >
                      <Bookmark size={18} className="text-primary" />
                      <span className="text-sm font-medium">Save</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
                    >
                      <MessageCircle size={18} className="text-primary" />
                      <span className="text-sm font-medium">Comment</span>
                    </motion.button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Share:</span>
                    <motion.a whileHover={{ scale: 1.1 }} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                      <Twitter size={18} className="text-blue-400" />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                      <Linkedin size={18} className="text-blue-600" />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                      <Facebook size={18} className="text-blue-700" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                {/* Author Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 bg-gradient-to-br from-white to-purple-50 border border-gray-100 rounded-3xl shadow-lg"
                >
                  <h4 className="font-display text-xl text-foreground mb-6">About the Author</h4>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div>
                      <div className="font-bold text-foreground text-lg">{post.author}</div>
                      <div className="text-sm text-primary font-medium">Creative Director</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{post.authorBio}</p>
                  <Button variant="outline" className="w-full mt-4">
                    View Profile
                  </Button>
                </motion.div>

                {/* Newsletter Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 bg-gradient-to-br from-primary to-purple-600 rounded-3xl text-white"
                >
                  <h4 className="font-display text-xl mb-4">Stay Updated</h4>
                  <p className="text-white/80 text-sm mb-4">Get the latest insights delivered to your inbox.</p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:border-white/50 mb-3"
                  />
                  <Button className="w-full bg-white text-primary hover:bg-white/90">
                    Subscribe
                  </Button>
                </motion.div>

                {/* Related Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-6 bg-white border border-gray-100 rounded-3xl shadow-lg"
                >
                  <h4 className="font-display text-xl text-foreground mb-6">Related Articles</h4>
                  <div className="space-y-4">
                    {relatedPosts.map((related, index) => (
                      <motion.div
                        key={related.slug}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <Link
                          to={`/blog/${related.slug}`}
                          className="group block"
                        >
                          <div className="aspect-video rounded-2xl overflow-hidden mb-3 shadow-md">
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <span className="text-primary text-xs font-bold uppercase">{related.category}</span>
                          <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm mt-1">
                            {related.title}
                          </h5>
                          <span className="text-xs text-muted-foreground">{related.date}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4">Keep Reading</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                MORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">ARTICLES</span>
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/blog" className="flex items-center gap-2">
                View All <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-primary text-sm font-bold">{post.category}</span>
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors mt-2">
                    {post.title}
                  </h3>
                  <span className="text-muted-foreground text-sm">{post.date}</span>
                </Link>
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
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center"
            >
              <Play className="text-white ml-1" size={36} />
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              READY TO CREATE <span className="text-yellow-300">TOGETHER</span>?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let's bring your vision to life with Strike Productions.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 shadow-2xl">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;

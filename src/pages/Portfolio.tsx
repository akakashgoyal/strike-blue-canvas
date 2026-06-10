import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Play,
  ArrowRight,
  Film,
  Sparkles,
  Award,
  Eye,
  Calendar,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import usePageTitle from "@/hooks/usePageTitle";
import QuoteModal from "@/components/common/QuoteModal";

type Category =
  | "All"
  | "BOBCard"
  | "Bank Of Baroda"
  | "BOB X Chhat Puja"
  | "Laxmipati Sarees X Chhat Puja"
  | "Songs";

const portfolioItems = [
  {
    id: 1,
    title: "Bank Of Baroda | Ek Khas Dost",
    type: "Bank Of Baroda",
    client: "Bank Of Baroda",
    thumbnail: "https://img.youtube.com/vi/dumi861BdrY/maxresdefault.jpg",
    color: "from-amber-500 to-orange-600",
    video_url: "https://youtu.be/dumi861BdrY?si=fNcbV1CRKUd3FfxB",
    // year: 2024
  },
  {
    id: 2,
    title: "Bank Of Baroda | Pradhan Mantri Vidyalaxmi Yojana",
    type: "Bank Of Baroda",
    client: "Bank Of Baroda",
    thumbnail: "https://img.youtube.com/vi/VWQxzq3w2kA/maxresdefault.jpg",
    color: "from-amber-500 to-orange-600",
    video_url: "https://youtu.be/VWQxzq3w2kA?feature=shared",
    // year: 2024
  },
  {
    id: 3,
    title: "छठ के बरत बड़ा पावन",
    type: "BOB X Chhat Puja",
    client: "BOB X Chhat Puja",
    thumbnail: "https://img.youtube.com/vi/Nd5Q32acpS8/maxresdefault.jpg",
    color: "from-yellow-400 to-orange-500",
    video_url: "https://youtu.be/Nd5Q32acpS8",
    // year: 2024
  },
  {
    id: 4,
    title: "बरतिन पर होई ना सहाय",
    type: "BOB X Chhat Puja",
    client: "BOB X Chhat Puja",
    thumbnail: "https://img.youtube.com/vi/HytO02X1DHs/maxresdefault.jpg",
    color: "from-yellow-400 to-orange-500",
    video_url: "https://youtu.be/HytO02X1DHs?si=GIYa9DGEzO_wXrRy",
    // year: 2024
  },
  {
    id: 5,
    title: "छठ बरतिन करेली गुहार",
    type: "Laxmipati Sarees X Chhat Puja",
    client: "Laxmipati Sarees X Chhat Puja",
    thumbnail: "https://img.youtube.com/vi/ZAw9gQ5TTrc/maxresdefault.jpg",
    color: "from-yellow-400 to-orange-500",
    video_url: "https://youtu.be/ZAw9gQ5TTrc?si=fCbwLiCVgpRrEGh",
    // year: 2024
  },
  {
    id: 6,
    title: "BOBCard",
    type: "BOBCard",
    client: "BOBCard",
    thumbnail: "https://img.youtube.com/vi/u8AM508UURg/maxresdefault.jpg",
    color: "from-blue-500 to-purple-600",
    video_url: "https://youtu.be/u8AM508UURg?si=7UpsihHsWZpDq7a0",
    // year: 2024
  },
  {
    id: 7,
    title:
      "Krispy Rishtey | Nakash Aziz | Jagat Singh | Diljott | Wedding Song | Hungama Hindi",
    type: "Songs",
    client: "Songs",
    thumbnail: "https://img.youtube.com/vi/blTESV3VcGQ/maxresdefault.jpg",
    color: "from-blue-500 to-purple-600",
    video_url: "https://youtu.be/blTESV3VcGQ?si=ettM8z8GlA6urc03",
    // year: 2024
  },
  {
    id: 8,
    title:
      "Rabba | Richa Sharma | Altamash Faridi | Sabri Brothers | Sufi Song | Krispy Rishtey | Hungama Hindi",
    type: "Songs",
    client: "Songs",
    thumbnail: "https://img.youtube.com/vi/EEpbeD6KTS8/maxresdefault.jpg",
    color: "from-blue-500 to-purple-600",
    video_url: "https://youtu.be/EEpbeD6KTS8?si=56FWVUJclj7qQEgs",
    // year: 2024
  },
  {
    id: 9,
    title:
      "Pal Pal | Rajasthani Folk | Neha Karode | Shivang Upadhyay | Krispy Rishtey",
    type: "Songs",
    client: "Songs",
    thumbnail: "https://img.youtube.com/vi/6zO9NQh-cZw/maxresdefault.jpg",
    color: "from-blue-500 to-purple-600",
    video_url: "https://youtu.be/6zO9NQh-cZw?si=fOcKI1FWE5lY9tUs",
    // year: 2024
  },
  {
    id: 10,
    title:
      "Ab Tujhse | Shreya Ghoshal | Romantic Song | Krispy Rishtey | Jagat, Apernit, Diljott | Hungama Hindi",
    type: "Songs",
    client: "Songs",
    thumbnail: "https://img.youtube.com/vi/sSfONcQatxE/maxresdefault.jpg",
    color: "from-blue-500 to-purple-600",
    video_url: "https://youtu.be/sSfONcQatxE?si=PwXoClTyjhare-7P",
    // year: 2024
  },
  {
    id: 11,
    title:
      "Khwaab Jeete | KK | Romantic Song | Krispy Rishtey | Jagat Singh, Diljott | Hungama Hindi",
    type: "Songs",
    client: "Songs",
    thumbnail: "https://img.youtube.com/vi/NErItC3kqgE/maxresdefault.jpg",
    color: "from-blue-500 to-purple-600",
    video_url: "https://youtu.be/NErItC3kqgE?si=PkfFgWam2q8HhVwZ",
    // year: 2024
  },
  {
    id: 12,
    title:
      "Ishq-e-Raza | Krispy Rishtey | Mohit Chauhan | Jagat Singh | Ronit Kapill | Diljott | Hungama Hindi",
    type: "Songs",
    client: "Songs",
    thumbnail: "https://img.youtube.com/vi/o0Udx2hHZJc/maxresdefault.jpg",
    color: "from-blue-500 to-purple-600",
    video_url: "https://youtu.be/o0Udx2hHZJc?si=skzHh4OBbO_71DL8",
    // year: 2024
  },
  {
    id: 13,
    title:
      "Mere Jeene Ka | Vikrant Bhartiya | Romantic Song | Krispy Rishtey | Diljott | Hungama Hindi",
    type: "Songs",
    client: "Songs",
    thumbnail: "https://img.youtube.com/vi/PCSRnGA3oII/maxresdefault.jpg",
    color: "from-blue-500 to-purple-600",
    video_url: "https://youtu.be/PCSRnGA3oII?si=kFheq6ya60WF92FE",
    // year: 2024
  },
];

const stats = [
  { icon: Film, value: "500+", label: "Projects" },
  { icon: Eye, value: "50M+", label: "Total Views" },
  { icon: Award, value: "25+", label: "Awards" },
  { icon: Users, value: "150+", label: "Clients" },
];

const Portfolio = () => {
  usePageTitle("Portfolio");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const categories = [
    "All",
    ...Array.from(new Set(portfolioItems.map((item) => item.type))),
  ] as Category[];

  const getCategoryColor = (category: Category) => {
    if (category === "All") {
      return "from-primary to-purple-500";
    }

    return (
      portfolioItems.find((item) => item.type === category)?.color ||
      "from-blue-400 to-cyan-500"
    );
  };

  const getCategoryIcon = (category: Category) => {
    if (category === "All") {
      return Sparkles;
    }

    return category === "Songs" ? Play : Film;
  };

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "All" || item.type === activeCategory,
  );

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
                FEATURED{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r  to-[#38b6f0]  from-[#de4445]">
                  WORK
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">
                Explore our collection of award-winning films and commercials
                that have captivated audiences worldwide.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <QuoteModal
                    title="Start your project today"
                    trigger={
                      <Button
                        size="lg"
                        className="bg-gradient-to-r  to-[#38b6f0]  from-[#de4445] text-white font-bold shadow-xl"
                      >
                        Start a project
                      </Button>
                    }
                  />
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
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
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
                      <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                        Featured
                      </span>
                      <h3 className="font-display text-2xl text-white mt-2">
                        Award-Winning Campaign
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl cursor-pointer">
                      <Play
                        className="text-primary ml-1"
                        size={32}
                        fill="currentColor"
                      />
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
                <div className="font-display text-4xl text-white">
                  {stat.value}
                </div>
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
              {categories.map((category) => {
                const Icon = getCategoryIcon(category);
                const label = category === "All" ? "All Projects" : category;
                const color = getCategoryColor(category);

                return (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${activeCategory === category ? `bg-gradient-to-r ${color} text-white shadow-lg` : "bg-gray-100 text-muted-foreground hover:bg-gray-200"}`}
                  >
                    <Icon size={18} /> {label}
                  </motion.button>
                );
              })}
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
                className="group relative"
              >
                <a
                  href={item.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-2xl backdrop-blur-sm"
                      >
                        <Play
                          className="text-primary ml-1"
                          size={28}
                          fill="currentColor"
                        />
                      </motion.div>
                    </div>

                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span
                        className={`px-3 py-1.5 bg-gradient-to-r ${item.color} text-white text-xs font-bold rounded-full shadow-lg`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        {item.client}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-foreground  group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {/* Hover Arrow */}
                    <div className="flex items-center gap-2 mt-4 text-primary opacity-0 group-hover:opacity-100 transition-all">
                      <span className="text-sm font-bold">
                        Watch on YouTube
                      </span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      {/* <section className="py-20 bg-white">
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
      </section> */}

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
              Start Your <span className="text-yellow-300">Next Project</span>?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Tell us what you need—we’ll take it from there.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <QuoteModal
                  title="Start your project today"
                  trigger={
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 font-bold px-10 shadow-2xl"
                    >
                      Start a project
                      <ArrowRight className="mr-2" size={18} />
                    </Button>
                  }
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import usePageTitle from "@/hooks/usePageTitle";

const sections = [
  { id: "intro", title: "1. Introduction", icon: FileText },
  { id: "collect", title: "2. Information We Collect", icon: Eye },
  { id: "use", title: "3. How We Use Your Information", icon: Shield },
  { id: "share", title: "4. Sharing Your Information", icon: Lock },
  { id: "security", title: "5. Data Security", icon: Shield },
  { id: "rights", title: "6. Your Rights", icon: FileText },
];

const Privacy = () => {
  usePageTitle("Privacy Policy");
  
  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section className="min-h-[50vh] py-32 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl"
        />
        
        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-32 right-32 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-xl flex items-center justify-center">
            <Shield className="text-white" size={28} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-40 left-40 hidden lg:block"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-xl flex items-center justify-center">
            <Lock className="text-white" size={24} />
          </div>
        </motion.div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white shadow-lg border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-6"
            >
              🔒 Legal
            </motion.span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              PRIVACY <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">POLICY</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {sections.map((section, index) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium whitespace-nowrap transition-all"
              >
                <section.icon size={14} />
                {section.title}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-12">
                <div id="intro" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                      <FileText className="text-white" size={20} />
                    </div>
                    <h2 className="font-display text-2xl text-foreground">1. Introduction</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to Strike Productions ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                  </p>
                </div>

                <div id="collect" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                      <Eye className="text-white" size={20} />
                    </div>
                    <h2 className="font-display text-2xl text-foreground">2. Information We Collect</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-none space-y-2 text-muted-foreground mb-4">
                    {["Name, email address, and contact information", "Company name and job title", "Project requirements and budget information", "Communications you send to us", "Any other information you choose to provide"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We also automatically collect certain information when you visit our website, including:
                  </p>
                  <ul className="list-none space-y-2 text-muted-foreground">
                    {["IP address and browser type", "Device information and operating system", "Pages viewed and time spent on our website", "Referring website addresses"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="use" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <Shield className="text-white" size={20} />
                    </div>
                    <h2 className="font-display text-2xl text-foreground">3. How We Use Your Information</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-none space-y-2 text-muted-foreground">
                    {["Respond to your inquiries and provide customer service", "Process and manage your project requests", "Send you marketing communications (with your consent)", "Improve our website and services", "Comply with legal obligations", "Protect against fraudulent or illegal activity"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="share" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                      <Lock className="text-white" size={20} />
                    </div>
                    <h2 className="font-display text-2xl text-foreground">4. Sharing Your Information</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-none space-y-2 text-muted-foreground mb-4">
                    {["Service providers who assist in our operations", "Professional advisors such as lawyers and accountants", "Business partners with your consent", "Law enforcement when required by law"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    We do not sell your personal information to third parties.
                  </p>
                </div>

                <div id="security" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                      <Shield className="text-white" size={20} />
                    </div>
                    <h2 className="font-display text-2xl text-foreground">5. Data Security</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div id="rights" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                      <FileText className="text-white" size={20} />
                    </div>
                    <h2 className="font-display text-2xl text-foreground">6. Your Rights</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-none space-y-2 text-muted-foreground">
                    {["Access to your personal information", "Correction of inaccurate data", "Deletion of your personal information", "Objection to processing of your data", "Data portability", "Withdrawal of consent"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                {/* Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 bg-gradient-to-br from-primary to-purple-600 rounded-3xl text-white"
                >
                  <h4 className="font-display text-xl mb-4">Questions?</h4>
                  <p className="text-white/80 text-sm mb-6">
                    If you have any questions about this Privacy Policy, please contact us.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-white/70" />
                      <span className="text-sm">privacy@strike.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-white/70" />
                      <span className="text-sm">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-white/70" />
                      <span className="text-sm">Mumbai, India</span>
                    </div>
                  </div>
                </motion.div>

                {/* Schedule Meeting */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 bg-white border border-gray-200 rounded-3xl shadow-lg"
                >
                  <h4 className="font-display text-lg text-foreground mb-4">Need to Discuss?</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Schedule a call with our team to discuss any privacy concerns.
                  </p>
                  <Button asChild className="w-full">
                    <a href="https://calendly.com/akash-digitace/30min" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2" size={16} />
                      Schedule a Call
                    </a>
                  </Button>
                </motion.div>

                {/* Other Policies */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-6 bg-gray-50 rounded-3xl"
                >
                  <h4 className="font-display text-lg text-foreground mb-4">Related Policies</h4>
                  <div className="space-y-2">
                    <Link to="/terms" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                      Terms of Service
                    </Link>
                    <Link to="/cookies" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                      Cookie Policy
                    </Link>
                  </div>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;

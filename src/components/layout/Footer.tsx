import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import strikeLogo from "@/assets/strike-films-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-background via-secondary/30 to-background border-t border-border overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link to="/" className="inline-block">
              <img 
                src={strikeLogo} 
                alt="Strike Films" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium film and TV ads production company crafting compelling visual stories that captivate audiences worldwide.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, color: "hover:bg-pink-500" },
                { icon: Linkedin, color: "hover:bg-blue-600" },
                { icon: Youtube, color: "hover:bg-red-500" },
                { icon: Twitter, color: "hover:bg-sky-500" },
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground ${social.color} hover:text-white transition-all duration-300 shadow-sm`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="font-display text-xl tracking-wide text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Services", "Portfolio", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="font-display text-xl tracking-wide text-foreground">Services</h4>
            <ul className="space-y-3">
              {[
                "Creative Development",
                "Film Production",
                "TV Commercials",
                "Corporate Films",
                "Digital Marketing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="font-display text-xl tracking-wide text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-primary" />
                </div>
                <span className="text-muted-foreground text-sm">
                  123 Production Street, Film District, Mumbai 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-primary" />
                </div>
                <a href="tel:+917091877256" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +91 7091877256
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <a href="mailto:info@strikefilmss.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    info@strikefilmss.com
                  </a>
                  <a href="mailto:strikefilmspvtltd@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    strikefilmspvtltd@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1 flex-wrap justify-center md:justify-start">
            © 2026 Strike Productions. Design & Developed by{" "}
            <a 
              href="https://digitacetechsolutions.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Digitace Tech Solutions
            </a>
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

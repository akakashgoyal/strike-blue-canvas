import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Sparkles, MessageCircle, Calendar, ArrowRight, Globe, Headphones, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import usePageTitle from "@/hooks/usePageTitle";
import { useForm, ValidationError } from '@formspree/react';

const contactMethods = [
  { icon: Mail, title: "Email Us", content: "info@strikefilmss.com", color: "from-blue-400 to-cyan-500", desc: "strikefilmspvtltd@gmail.com" },
  { icon: Phone, title: "Call Us", content: "+91 7091877256", color: "from-purple-400 to-pink-500", desc: "Mon-Fri, 10AM - 7PM IST" },
  { icon: MapPin, title: "Visit Us", content: "123 Production Street, Mumbai", color: "from-orange-400 to-red-500", desc: "Film District, Maharashtra" },
  { icon: Clock, title: "Business Hours", content: "Mon-Fri: 10AM - 7PM", color: "from-green-400 to-teal-500", desc: "Weekend by appointment" },
];

const faqs = [
  { q: "How long does a typical project take?", a: "Project timelines vary based on scope. A typical commercial takes 4-8 weeks from concept to delivery." },
  { q: "What's included in your production services?", a: "We offer end-to-end services including creative development, production, post-production, and delivery optimization." },
  { q: "Do you work with startups?", a: "Absolutely! We work with companies of all sizes and have flexible packages to suit different budgets." },
];

const Contact = () => {
  usePageTitle("Contact Us");
  const { toast } = useToast();
  const [state, handleFormspreeSubmit] = useForm("maqordwa");
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "", service: "", budget: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  const res = await handleFormspreeSubmit(e);

  if (state.succeeded) {
    toast({
      title: "Message Sent Successfully!",
      description: "We’ve received your message and will contact you within 24 hours 🚀",
    });

    e.currentTarget.reset();
    setFormData({
      name: "", email: "", company: "", phone: "", service: "", budget: "", message: "",
    });
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section className="min-h-[60vh] py-32 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: 360, x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: -360, y: [0, 50, 0] }}
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
            <MessageCircle className="text-white" size={28} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-40 left-40 hidden lg:block"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-xl flex items-center justify-center">
            <Mail className="text-white" size={24} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-24 hidden xl:block"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg flex items-center justify-center">
            <Phone className="text-white" size={20} />
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
                ✨ Get In Touch
              </motion.span>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
                LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">TALK</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">
                Ready to bring your vision to life? We'd love to hear about your project. Get in touch and let's create something amazing together.
              </p>
              
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-xl">
                    <a href="https://calendly.com/akash-digitace/30min" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2" size={20} />
                      Schedule a Call
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="border-2 font-bold">
                    <Phone className="mr-2" size={20} />
                    +91 98765 43210
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80"
                  alt="Contact Us"
                  className="rounded-3xl shadow-2xl border-4 border-white/50"
                />
                
                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">24hr Response</div>
                      <div className="text-sm text-muted-foreground">Guaranteed</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <item.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                <p className="font-semibold text-primary mb-1">{item.content}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                SEND US A <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">MESSAGE</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Full Name *</label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="bg-white border-gray-200 focus:border-primary h-14 rounded-xl text-base" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Email *</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required className="bg-white border-gray-200 focus:border-primary h-14 rounded-xl text-base" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Company</label>
                    <Input name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="bg-white border-gray-200 focus:border-primary h-14 rounded-xl text-base" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Phone</label>
                    <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="bg-white border-gray-200 focus:border-primary h-14 rounded-xl text-base" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-14 px-4 bg-white border border-gray-200 focus:border-primary rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a service</option>
                    <option value="creative">Creative Development</option>
                    <option value="production">Film & Video Production</option>
                    <option value="growth">Growth & Media Add-Ons</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Project Details *</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project, goals, and timeline..." required rows={6} className="bg-white border-gray-200 focus:border-primary resize-none rounded-xl text-base" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" size="lg" disabled={state.submitting} className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 text-white font-bold shadow-xl h-14 rounded-xl text-base">
                    {state.submitting ? "Submitting Form" : "Send Message"}
                    <Send className="ml-2" size={18} />
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map/Image */}
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl mb-8">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Our Office"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Schedule Meeting Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-gradient-to-br from-primary to-purple-600 rounded-3xl text-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Calendar className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl">Schedule a Meeting</h3>
                    <p className="text-white/80">Free 30-minute consultation</p>
                  </div>
                </div>
                <p className="text-white/90 mb-6">
                  Book a time that works for you and let's discuss your project in detail.
                </p>
                <Button asChild className="w-full bg-white text-primary hover:bg-white/90 font-bold">
                  <a href="https://calendly.com/akash-digitace/30min" target="_blank" rel="noopener noreferrer">
                    Book Now <ArrowRight className="ml-2" size={18} />
                  </a>
                </Button>
              </motion.div>

              {/* Support Card */}
              <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Headphones className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground">Need Quick Help?</h4>
                    <p className="text-muted-foreground text-sm">Our team is available for instant support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-bold tracking-widest uppercase mb-4">FAQ</span>
            <h2 className="font-display text-4xl text-foreground mb-4">
              FREQUENTLY ASKED <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">QUESTIONS</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <Globe className="text-white" size={40} />
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              READY TO <span className="text-yellow-300">START</span>?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join hundreds of brands who trust Strike for their visual content needs.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 shadow-2xl">
                <a href="https://calendly.com/akash-digitace/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2" size={20} />
                  Schedule Your Free Consultation
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

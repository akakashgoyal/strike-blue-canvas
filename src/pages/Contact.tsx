import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  ArrowRight,
  Globe,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import usePageTitle from "@/hooks/usePageTitle";
import ContactForm from "@/components/forms/ContactForm";
import QuoteModal from "@/components/common/QuoteModal";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info@strikefilmss.com",
    link: "mailto:info@strikefilmss.com",
    color: "from-blue-400 to-cyan-500",
    desc: "Reach to us via email",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 7977376669",
    link: "tel:+917977376669",
    color: "from-purple-400 to-pink-500",
    desc: "Mon-Fri, 10AM - 7PM IST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "513, 5th Floor, Strike Films, Standford Plaza, Anderi, 400053",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 10AM - 7PM",
    color: "from-green-400 to-teal-500",
    desc: "Weekend by appointment",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope. A typical commercial takes 4-8 weeks from concept to delivery.",
  },
  {
    q: "What's included in your production services?",
    a: "We offer end-to-end services including creative development, production, post-production, and delivery optimization.",
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely! We work with companies of all sizes and have flexible packages to suit different budgets.",
  },
];

const Contact = () => {
  usePageTitle("Contact Us");

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
                Let’s Build Something That
                <span className="text-transparent bg-clip-text bg-gradient-to-r  to-[#38b6f0]  from-[#de4445]">
                  {" "}
                  Stands Out
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">
                Bring us your idea we’ll turn it into powerful visual
                storytelling that captures attention and drives real impact.
              </p>

              {/* Quick Actions */}
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 font-bold"
                  >
                    <a href="tel:+917977376669">
                      <Phone className="mr-2" size={20} />
                      +91 79773 76669
                    </a>
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
                      <div className="font-bold text-foreground">
                        24hr Response
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Guaranteed
                      </div>
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
                <h3 className="font-display text-lg text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="font-semibold text-primary mb-1">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.content}
                  </a>
                </p>
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
                Tell us about your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                  Project
                </span>
              </h2>
              <p className="text-muted-foreground text-xl mb-10">
                Your brief is important to us.
              </p>
              <ContactForm />
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
              {/* <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-gradient-to-br from-primary to-purple-600 rounded-3xl text-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Calendar className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl">Free Consultation</h3>
                    <p className="text-white/80">
                      Book a 30-Minute Discovery Call{" "}
                    </p>
                  </div>
                </div>
                <p className="text-white/90 mb-6">
                  Skip the back-and-forth. Jump on a call with our creative
                  team. We'll listen, ask the right questions, and tell you
                  honestly what we can build for you.
                </p>
                <Button
                  asChild
                  className="w-full bg-white text-primary hover:bg-white/90 font-bold"
                >
                  <a
                    href="https://calendly.com/indira-strikefilms/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Your Free Call{" "}
                    <ArrowRight className="ml-2" size={18} />
                  </a>
                </Button>
                <p className="text-muted my-3">
                  Available Mon–Sat · 10am to 7pm IST
                </p>
              </motion.div> */}

              {/* Support Card */}
              <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Headphones className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground">
                      Need Quick Help?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Our team is available for instant support
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 bg-white">
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
      </section> */}

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
              NEED FASTER <span className="text-yellow-300"> ANSWER </span>?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Our team is online and ready to chat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold px-10 shadow-2xl"
                >
                  <a
                    href="https://wa.me/917091877256?text=Hi%20Strike%20Films%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>WhatsApp</title>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </Button>
              </motion.div>
              <motion.div className="" whileHover={{ scale: 1.05 }}>
                <QuoteModal
                  title="Get a Quote"
                  trigger={
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 font-bold px-10 shadow-2xl"
                    >
                      Get a Quote
                    </Button>
                  }
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold px-10 shadow-2xl"
                >
                  <a href="mailto:info@strikefilmss.com">
                    <Mail className="mr-2" size={20} />
                    Email Us
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

export default Contact;

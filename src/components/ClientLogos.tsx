import { motion } from "framer-motion";

const clients = [
  { 
    name: "Bank of Baroda", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bank_of_Baroda_logo.svg/200px-Bank_of_Baroda_logo.svg.png",
    color: "from-orange-400 to-red-500"
  },
  { 
    name: "BOB Card", 
    logo: "https://www.bobcard.co.in/images/bobcard-logo.png",
    color: "from-red-400 to-orange-500"
  },
  { 
    name: "Laxmipati Sarees", 
    logo: "https://www.laxmipati.com/pub/media/logo/stores/1/logo.png",
    color: "from-pink-400 to-rose-500"
  },
  { 
    name: "OBA Electric Vehicle", 
    logo: "https://placehold.co/200x80/1a1a2e/00d4ff?text=OBA+EV&font=montserrat",
    color: "from-cyan-400 to-blue-500"
  },
  { 
    name: "NXTEMobility", 
    logo: "https://placehold.co/200x80/0f172a/22c55e?text=NXTE&font=montserrat",
    color: "from-green-400 to-emerald-500"
  },
  { 
    name: "JSW", 
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/JSW_Group_logo.svg/200px-JSW_Group_logo.svg.png",
    color: "from-blue-400 to-indigo-500"
  },
];

const ClientLogos = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4">
            Trusted Partners
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">CLIENTS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Proudly working with India's leading brands
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <div className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${client.color} opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl`} />
                
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="font-display text-lg text-foreground">${client.name}</span>`;
                    }}
                  />
                </div>
                <p className="text-center text-xs text-muted-foreground mt-3 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {client.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated background elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 h-64 border-4 border-primary/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-80 h-80 border-4 border-purple-500/5 rounded-full"
        />
      </div>
    </section>
  );
};

export default ClientLogos;

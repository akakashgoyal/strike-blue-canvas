import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useForm } from "@formspree/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

type ContactFormProps = {
  submitLabel?: string;
  showSuccessState?: boolean;
  successTitle?: string;
  successDescription?: string;
  className?: string;
};

const initialFormData: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

const CONTACT_SUCCESS_TOAST = {
  title: "Message Sent Successfully!",
  description:
    "We’ve received your message and will contact you within 24 hours 🚀",
};

const ContactForm = ({
  submitLabel = "Send Message",
  showSuccessState = false,
  successTitle = "Your message is in",
  successDescription = "We’ve received your project details and will be in touch within 24 hours.",
  className,
}: ContactFormProps) => {
  const { toast } = useToast();
  const [state, handleFormspreeSubmit] = useForm("maqordwa");
  const [formData, setFormData] = useState<ContactFormValues>(initialFormData);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const handledSuccessRef = useRef(false);

  useEffect(() => {
    if (state.succeeded && !handledSuccessRef.current) {
      handledSuccessRef.current = true;
      toast(CONTACT_SUCCESS_TOAST);
      setFormData(initialFormData);

      if (showSuccessState) {
        setIsSuccessVisible(true);
      }
    }

    if (!state.succeeded) {
      handledSuccessRef.current = false;
    }
  }, [showSuccessState, state.succeeded, toast]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleFormspreeSubmit(e);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (showSuccessState && isSuccessVisible) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={cn(
          "rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-lg",
          className,
        )}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 shadow-lg"
        >
          <CheckCircle2 className="text-white" size={32} />
        </motion.div>
        <h3 className="font-display text-2xl text-foreground">
          {successTitle}
        </h3>
        <p className="mt-3 text-muted-foreground">{successDescription}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground">
            Full Name *
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="eg. Rahul Sharma"
            required
            className="bg-white border-gray-200 focus:border-primary h-14 rounded-xl text-base"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground">
            Business Email *
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
            className="bg-white border-gray-200 focus:border-primary h-14 rounded-xl text-base"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground">
            Brand / Company
          </label>
          <Input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Organization"
            className="bg-white border-gray-200 focus:border-primary h-14 rounded-xl text-base"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground">
            Phone Number
          </label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="bg-white border-gray-200 focus:border-primary h-14 rounded-xl text-base"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground">
          Service You Need
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full h-14 px-4 bg-white border border-gray-200 focus:border-primary rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="">-- Select a service --</option>
          <option value="tvc">TV Commercial Production</option>
          <option value="brand-film">Brand Film / Corporate Film</option>
          <option value="music-video">Music Video</option>
          <option value="digital-social">Digital & Social Content</option>
          <option value="documentary">Documentary</option>
          <option value="product-launch">Product Launch Film</option>
          <option value="event-coverage">Event Coverage</option>
          <option value="photoshoot">Photoshoot</option>
          <option value="not-sure">Not sure - let's discuss</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground">
          Tell Us More *
        </label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project, timeline, budget range, and what success looks like for you"
          required
          rows={6}
          className="bg-white border-gray-200 focus:border-primary resize-none rounded-xl text-base"
        />
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          size="lg"
          disabled={state.submitting}
          className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 text-white font-bold shadow-xl h-14 rounded-xl text-base"
        >
          {state.submitting ? "Submitting Form" : submitLabel}
          <Send className="ml-2" size={18} />
        </Button>
      </motion.div>
    </form>
  );
};

export default ContactForm;

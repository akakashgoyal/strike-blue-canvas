import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScheduleMeetingButton from "../ScheduleMeetingButton";
import StickyCTA from "@/components/common/StickyCTA";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-20 pb-28 sm:pb-32">{children}</main>
      <Footer />
      {/* <ScheduleMeetingButton /> */}
      <StickyCTA />
    </div>
  );
};

export default Layout;

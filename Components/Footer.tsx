import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import SocialFooterSection from "./SocialFooterSection";

const Footer = () => {
  return (
    <footer id="contact" className="border-t bg-background text-foreground py-6">
      <div className="mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start gap-1 text-sm text-muted-foreground">

          {/* Phone */}
          <Link 
            href="tel:+1234567890" 
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+1 234 567 890</span>
          </Link>

          {/* Email */}
          <Link
            href="mailto:info@keren-company.com"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>info@Romstream.com</span>
          </Link>
        </div>

        {/* MIDDLE SIDE  */}
        <div>
          <SocialFooterSection/>
        </div>

        {/* RIGHT SIDE */}
        <p className="text-sm text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} Romstream Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import {  SocialInstagram, SFacebook, Tiktok, Whatsapp, Linkedin } from "@/assets";
import Link from "next/link";

const navItems = [
  { href: "#", title: "Features" },
  { href: "#", title: "Developers" },
  { href: "#", title: "Company" },
  { href: "#", title: "Blog" },
  { href: "#", title: "Branding" },
];

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <span className="font-medium">SIRIUS</span>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            {navItems.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            {/* Link for Tiktok */}
            <a
              href="https://www.tiktok.com/@siriusmediaagency?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition"
            >
              <Tiktok/>
            </a>
            {/* Link for Instagram */}
            <a
              href="https://www.instagram.com/siriusmediaagecny/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition"
            >
              <SocialInstagram />
            </a>
            {/* Link for Facebook */}
            <a
              href="https://www.facebook.com/sirius.media.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition"
            >
              <SFacebook />
            </a>
                   {/* Link for linkein */}
                   <a
              href="https://www.linkedin.com/in/sirius-media-agency-875863338/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition"
            >
              <Linkedin/>
            </a>
                {/* Link for whatsapp */}
                <a
              href="https://wa.me/201152789825"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition"
            >
              <Whatsapp/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: <Linkedin className="text-xl" />, href: "https://www.linkedin.com/in/yogesh-ramasubramanian-941453276" },
    { icon: <Github className="text-xl" />, href: "#" },
    { icon: <Twitter className="text-xl" />, href: "#" },
    { icon: <Mail className="text-xl" />, href: "mailto:ryogesh2024@gmail.com" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Yogesh R</h3>
            <p className="text-slate-300 mb-4">
              Mechanical Engineering student passionate about innovation, design, and sustainable engineering solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                ryogesh2024@gmail.com
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91 9345773759
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Chennai, TN, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300">
            &copy; 2024 Yogesh R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

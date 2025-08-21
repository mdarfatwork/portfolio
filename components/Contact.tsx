import { Phone, Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold">Contact</h2>
        <div className="space-y-6 text-lg">
          <div className="flex items-center justify-center gap-3">
            <Phone className="w-5 h-5" />
            <a href="tel:+917020660977" className="hover:underline">
              +91 7020660977 (WhatsApp available)
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5" />
            <a href="mailto:arfat19118@gmail.com" className="hover:underline">
              arfat19118@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/momin-mohammed-arfat/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/mdarfatwork"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/navigation";
import { company } from "@/data/company";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "@/assets/salaah-tech-logo-white.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-secondary text-secondary-foreground">
      <div className="container-main section-padding pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="relative flex items-center justify-start select-none">
              <Image
                src={logo}
                alt="SalaahTech"
                width={150}
                height={52}
                className="h-[48px] w-auto object-contain object-left select-none"
                priority
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Enterprise software engineering partner. We build custom software, AI
              applications, CRM, ERP, SaaS platforms, and mobile apps for businesses
              worldwide.
            </p>
            <div className="mt-6 space-y-2 text-sm text-zinc-400">
              <p>
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </p>
              <p>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          {[
            { title: "Company", links: footerLinks.company },
            { title: "Services", links: footerLinks.services },
            { title: "Resources", links: footerLinks.resources },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {year} SalaahTech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

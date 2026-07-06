"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks, serviceNavGroups } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import logo from "@/assets/salaah-tech-logo.png";
import logoIcon from "@/assets/salaah-tech-icon.png";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-soft border-b border-surface-border"
          : "bg-transparent"
      )}
    >
      <div className="container-main px-3 sm:px-6 lg:px-8">
        <div className="flex h-[70px] md:h-[76px] lg:h-[84px] items-center justify-between transition-all duration-300 ease-in-out">
          <Link href="/" className="relative z-10 flex items-center justify-start select-none w-[60%] min-w-[145px] max-w-[210px] md:w-[140px] lg:w-[155px]">
            {/* Mobile View: [S Icon] SalaahTech */}
            <div className="flex md:hidden items-center gap-2 select-none w-full h-[42px]">
              <Image
                src={logoIcon}
                alt="S"
                width={39}
                height={42}
                className="h-[42px] w-auto object-contain select-none"
                priority
              />
              <span className="text-xl font-bold tracking-tight text-foreground select-none">
                SalaahTech
              </span>
            </div>
            {/* Tablet & Desktop View: Full Logo */}
            <div className="hidden md:block select-none h-[54px] lg:h-[60px] w-[140px] lg:w-[155px]">
              <Image
                src={logo}
                alt="SalaahTech"
                width={155}
                height={60}
                className="w-full h-full object-contain object-left select-none"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.href === "/services" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      pathname.startsWith("/services")
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    Services
                  </Link>

                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full z-50 mt-1 w-[640px] -translate-x-1/2 rounded-2xl border border-surface-border bg-surface p-6 shadow-card">
                      <div className="grid grid-cols-2 gap-6">
                        {serviceNavGroups.map((group) => (
                          <div key={group.title}>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                              {group.title}
                            </p>
                            <ul className="space-y-2">
                              {group.links.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary-muted hover:text-foreground"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 border-t border-surface-border pt-4">
                        <Link
                          href="/services"
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          View all services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/contact" variant="secondary" size="sm">
              Contact
            </Button>
            <Button href="/contact" size="sm">
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-surface-border lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-foreground transition-all",
                  mobileOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-foreground transition-all",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-foreground transition-all",
                  mobileOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[70px] z-40 bg-background/95 backdrop-blur-lg lg:hidden">
          <nav className="container-main flex flex-col gap-1 py-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "bg-primary-muted text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-surface-border pt-4">
              <Button href="/contact" className="w-full">
                Book Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

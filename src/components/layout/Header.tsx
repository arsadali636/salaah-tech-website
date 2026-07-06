"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks, serviceNavGroups, solutionsNavLinks } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import logo from "@/assets/salaah-tech-logo.png";
import logoIcon from "@/assets/salaah-tech-icon.png";
import {
  FaHome,
  FaCreditCard,
  FaGraduationCap,
  FaBuilding,
  FaUtensils,
  FaCar,
  FaWifi,
  FaHeartbeat,
  FaShoppingCart,
  FaCogs,
  FaWallet,
  FaDumbbell,
  FaTruck,
} from "react-icons/fa";

const getSolutionIcon = (iconName: string) => {
  switch (iconName) {
    case "home":
      return <FaHome className="text-emerald-500" size={18} />;
    case "payment":
      return <FaCreditCard className="text-green-500" size={18} />;
    case "education":
      return <FaGraduationCap className="text-cyan-500" size={18} />;
    case "real-estate":
      return <FaBuilding className="text-emerald-600" size={18} />;
    case "food":
      return <FaUtensils className="text-rose-500" size={18} />;
    case "taxi":
      return <FaCar className="text-amber-500" size={18} />;
    case "iot":
      return <FaWifi className="text-blue-500" size={18} />;
    case "healthcare":
      return <FaHeartbeat className="text-blue-600" size={18} />;
    case "ecommerce":
      return <FaShoppingCart className="text-purple-500" size={18} />;
    case "erp":
      return <FaCogs className="text-yellow-500" size={18} />;
    case "fintech":
      return <FaWallet className="text-indigo-500" size={18} />;
    case "fitness":
      return <FaDumbbell className="text-teal-500" size={18} />;
    case "logistics":
      return <FaTruck className="text-sky-500" size={18} />;
    default:
      return <FaHome className="text-primary" size={18} />;
  }
};


export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <div
        className={cn(
          "absolute inset-0 -z-10 border-b transition-all duration-300",
          scrolled
            ? "bg-surface/95 backdrop-blur-lg border-surface-border shadow-soft"
            : "bg-surface/80 backdrop-blur-lg border-surface-border/40"
        )}
      />
      <div className="container-main px-3 sm:px-6 lg:px-8">
        <div className="flex h-[92px] md:h-[88px] lg:h-[96px] items-center justify-between transition-all duration-300 ease-in-out">
          <Link href="/" className="relative z-10 flex items-center justify-start select-none w-[75%] max-w-[240px] md:w-[186px] lg:w-[208px] h-[60px] md:h-[68px] lg:h-[76px]">
            <Image
              src={logo}
              alt="SalaahTech"
              width={208}
              height={80}
              className="w-full h-full object-contain object-left select-none transition-all duration-300 ease-in-out"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              if (link.href === "/services") {
                return (
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
                        pathname.startsWith("/services") && !solutionsNavLinks.some((s) => pathname.startsWith(s.href))
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
                );
              }

              if (link.href === "/solutions") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <Link
                      href="#"
                      className={cn(
                        "rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                        pathname.startsWith("/services") && solutionsNavLinks.some((s) => pathname.startsWith(s.href))
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      Solutions
                    </Link>

                    {solutionsOpen && (
                      <div className="absolute left-1/2 top-full z-50 mt-1 w-[640px] -translate-x-1/2 rounded-2xl border border-surface-border bg-surface p-6 shadow-card">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                          {solutionsNavLinks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-primary-muted hover:text-foreground"
                            >
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                                {getSolutionIcon(item.iconName)}
                              </span>
                              <span className="font-medium text-foreground/90">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 border-t border-surface-border pt-4">
                          <Link
                            href="/portfolio"
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            View all case studies →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
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
              );
            })}
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
        <div className="fixed inset-x-0 bottom-0 top-[92px] md:top-[88px] z-40 overflow-y-auto bg-background/98 backdrop-blur-lg lg:hidden">
          <nav className="container-main flex flex-col gap-1 py-6" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              if (link.href === "/solutions") {
                return (
                  <div key={link.href} className="flex flex-col">
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-muted w-full text-left"
                    >
                      <span>Solutions</span>
                      <span
                        className="text-[10px] transition-transform duration-200"
                        style={{ transform: mobileSolutionsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        ▼
                      </span>
                    </button>
                    {mobileSolutionsOpen && (
                      <div className="pl-6 pr-4 py-2 flex flex-col gap-2 bg-muted/30 rounded-xl mt-1">
                        {solutionsNavLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                          >
                            {getSolutionIcon(subLink.iconName)}
                            <span>{subLink.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.href === "/services") {
                return (
                  <div key={link.href} className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-muted w-full text-left"
                    >
                      <span>Services</span>
                      <span
                        className="text-[10px] transition-transform duration-200"
                        style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        ▼
                      </span>
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-6 pr-4 py-2 flex flex-col gap-4 bg-muted/30 rounded-xl mt-1">
                        {serviceNavGroups.map((group) => (
                          <div key={group.title} className="flex flex-col gap-1">
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                              {group.title}
                            </span>
                            <div className="flex flex-col gap-2 pl-2">
                              {group.links.map((subLink) => (
                                <Link
                                  key={subLink.href}
                                  href={subLink.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="py-1 text-sm text-muted-foreground hover:text-foreground"
                                >
                                  {subLink.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary-muted text-primary"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
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

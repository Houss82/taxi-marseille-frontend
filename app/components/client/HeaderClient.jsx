"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

export default function HeaderClient({ navItems, children }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  
  // Sur la page d'accueil, on commence transparent, sinon on commence avec le fond
  const [isScrolled, setIsScrolled] = useState(!isHomePage)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    // Si on n'est pas sur la page d'accueil, toujours avoir le fond
    if (!isHomePage) {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  // Nettoyer le timeout au démontage
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div
      className={`transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className={isScrolled ? "[&_span]:text-foreground" : "[&_span]:text-white"}>
          {children}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            if (item.subItems && item.subItems.length > 0) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    // Annuler le timeout de fermeture s'il existe
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current)
                      timeoutRef.current = null
                    }
                    setOpenDropdown(item.href)
                  }}
                  onMouseLeave={() => {
                    // Délai avant de fermer le dropdown pour permettre de naviguer vers le menu
                    timeoutRef.current = setTimeout(() => {
                      setOpenDropdown(null)
                    }, 200)
                  }}
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 ${
                      isScrolled
                        ? "text-foreground hover:text-accent"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      openDropdown === item.href ? "rotate-180" : ""
                    }`} />
                  </Link>
                  {openDropdown === item.href && (
                    <div
                      className="absolute top-full left-0 pt-2 w-64 z-50"
                      onMouseEnter={() => {
                        // Annuler le timeout de fermeture quand on survole le dropdown
                        if (timeoutRef.current) {
                          clearTimeout(timeoutRef.current)
                          timeoutRef.current = null
                        }
                      }}
                      onMouseLeave={() => {
                        // Fermer le dropdown quand on quitte le dropdown
                        setOpenDropdown(null)
                      }}
                    >
                      <div className="bg-background rounded-lg shadow-lg border border-border py-2">
                      <Link
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {item.label === "Nos secteurs" ? "Tous les secteurs" : `Tous les ${item.label.toLowerCase()}`}
                      </Link>
                      <div className="border-t border-border my-1"></div>
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled
                    ? "text-foreground hover:text-accent"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="/reservation"
            className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Réserver
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => {
                if (item.subItems && item.subItems.length > 0) {
                  return (
                    <div key={item.href} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="text-foreground hover:text-accent transition-colors font-medium flex-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                          className="text-foreground hover:text-accent transition-colors p-1"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            openDropdown === item.href ? "rotate-180" : ""
                          }`} />
                        </button>
                      </div>
                      {openDropdown === item.href && (
                        <div className="flex flex-col gap-2 pl-4 border-l-2 border-accent/20">
                          <Link
                            href={item.href}
                            className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label === "Nos secteurs" ? "Tous les secteurs" : `Tous les ${item.label.toLowerCase()}`}
                          </Link>
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="text-foreground/70 hover:text-accent transition-colors text-sm"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-accent transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link
                href="/reservation"
                className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity w-fit"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Réserver
              </Link>
            </div>
          </nav>
        )}
      </div>
    </div>
  )
}

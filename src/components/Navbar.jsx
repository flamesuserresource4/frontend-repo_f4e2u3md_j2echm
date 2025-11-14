import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-800 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
              <span className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Radnaa Clone</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:hello@example.com" className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                <Mail className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                <Github className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                <Linkedin className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

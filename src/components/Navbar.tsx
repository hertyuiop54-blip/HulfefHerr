import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, HeartPulse } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Formations", path: "/formations" },
    { name: "À Propos", path: "/a-propos" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-purple-900 p-2 rounded-lg group-hover:bg-purple-800 transition-colors">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-purple-900">
              Urgences<span className="text-orange-500">Simplifiées</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-purple-900 ${
                  isActive(link.path)
                    ? "text-purple-900 font-semibold"
                    : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/formations"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Accéder maintenant
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-purple-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "bg-purple-50 text-purple-900"
                    : "text-slate-700 hover:bg-slate-50 hover:text-purple-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/formations"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-base font-semibold transition-colors shadow-sm"
              >
                Accéder maintenant
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

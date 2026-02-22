import { Link } from "react-router-dom";
import { HeartPulse, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-purple-900/50 p-2 rounded-lg border border-purple-800/50">
                <HeartPulse className="w-6 h-6 text-purple-400" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Urgences<span className="text-orange-500">Simplifiées</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              La plateforme de référence pour maîtriser la médecine d'urgence en
              Algérie. Pratique, claire et adaptée à la réalité du terrain.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/formations"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Nos Formations
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Formations */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Programmes
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/formations"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Urgences Métaboliques
                </Link>
              </li>
              <li>
                <Link
                  to="/formations"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  30 Conduites Pratiques
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm">contact@urgences-simplifiees.dz</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a
                  href="#"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Rejoindre la communauté Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Urgences Simplifiées. Tous droits
            réservés.
          </p>
          <div className="flex gap-4">
            <span className="text-sm text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">
              Mentions légales
            </span>
            <span className="text-sm text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">
              CGV
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

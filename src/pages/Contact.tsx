import React, { useState } from "react";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert(
      "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.",
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Contactez-<span className="text-purple-900">Nous</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Une question sur nos formations ? Un problème technique ? N'hésitez
            pas à nous écrire ou à rejoindre notre communauté.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 mb-4">
                Notre équipe vous répond sous 24h ouvrées.
              </p>
              <a
                href="mailto:contact@urgences-simplifiees.dz"
                className="text-purple-900 font-semibold hover:text-orange-500 transition-colors"
              >
                contact@urgences-simplifiees.dz
              </a>
            </div>

            <div className="bg-purple-900 p-8 rounded-3xl shadow-lg text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageCircle className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-purple-800 rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Communauté Telegram</h3>
                <p className="text-purple-200 mb-8">
                  Rejoignez des centaines de médecins algériens pour échanger
                  sur des cas cliniques et partager vos expériences.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-colors shadow-md gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Rejoindre le groupe
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-900 focus:border-purple-900 transition-shadow outline-none"
                      placeholder="Dr. Ahmed Benali"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Adresse email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-900 focus:border-purple-900 transition-shadow outline-none"
                      placeholder="ahmed@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-900 focus:border-purple-900 transition-shadow outline-none"
                    placeholder="Question sur la formation des urgences métaboliques"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-900 focus:border-purple-900 transition-shadow outline-none resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-purple-900 hover:bg-purple-800 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-purple-900/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

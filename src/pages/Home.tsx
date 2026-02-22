import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
  BookOpen,
  Clock,
  Users,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question:
        "Les formations sont-elles adaptées aux étudiants en médecine ?",
      answer:
        "Absolument. Nos formations sont conçues pour combler le fossé entre la théorie universitaire et la pratique clinique réelle. Elles sont idéales pour les étudiants en fin de cursus, les internes et les jeunes médecins.",
    },
    {
      question: "Les protocoles sont-ils applicables en Algérie ?",
      answer:
        "Oui, c'est notre force principale. Tous nos protocoles tiennent compte des médicaments et des moyens réellement disponibles dans les structures de santé algériennes.",
    },
    {
      question: "Aurais-je accès aux mises à jour ?",
      answer:
        "Oui, l'accès à la formation inclut toutes les futures mises à jour des protocoles et recommandations scientifiques.",
    },
    {
      question: "Comment se déroule le paiement ?",
      answer:
        "Nous proposons plusieurs méthodes de paiement sécurisées adaptées à l'Algérie (CCP, BaridiMob, virement bancaire) ainsi que le paiement en ligne par carte.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/medical/1920/1080?blur=10')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-slate-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-900 font-medium text-sm mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
            La référence en médecine d'urgence pratique
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Maîtrisez les urgences médicales avec des{" "}
            <span className="text-purple-900">protocoles clairs</span> et{" "}
            <span className="text-orange-500">pratiques</span>.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Soyez prêt(e) à agir efficacement aux urgences dès votre premier
            jour. Développez votre confiance clinique avec des formations
            adaptées à la réalité du terrain en Algérie.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/formations"
              className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              Découvrir les formations
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/formations"
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 hover:border-purple-900 hover:text-purple-900 text-slate-700 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
            >
              Accéder maintenant
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              Paiement sécurisé
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              Accès à vie
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Pourquoi tant de jeunes médecins se sentent{" "}
                <span className="text-orange-500">perdus aux urgences</span> ?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Un fossé théorie-pratique
                    </h3>
                    <p className="mt-2 text-slate-600">
                      La faculté enseigne des maladies, mais aux urgences, vous
                      faites face à des symptômes aigus nécessitant des
                      décisions rapides.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Protocoles inadaptés
                    </h3>
                    <p className="mt-2 text-slate-600">
                      Les guidelines internationaux utilisent souvent des
                      molécules indisponibles dans nos hôpitaux algériens.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Le stress de l'erreur
                    </h3>
                    <p className="mt-2 text-slate-600">
                      La peur de se tromper de dosage ou de rater une urgence
                      vitale paralyse la prise de décision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-900 rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <img
                src="https://picsum.photos/seed/doctor-stress/800/1000"
                alt="Médecin aux urgences"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Ce qui rend notre approche{" "}
            <span className="text-orange-500">différente</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors">
              <div className="w-14 h-14 bg-purple-900/50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Stethoscope className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">100% Pratique</h3>
              <p className="text-slate-400 leading-relaxed">
                Fini la théorie interminable. Nous allons droit au but avec des
                conduites à tenir claires, étape par étape.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-orange-500 transition-colors">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Adapté à l'Algérie</h3>
              <p className="text-slate-400 leading-relaxed">
                Nos protocoles utilisent exclusivement les traitements et bilans
                réellement disponibles dans nos structures.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors">
              <div className="w-14 h-14 bg-purple-900/50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ordonnances Types</h3>
              <p className="text-slate-400 leading-relaxed">
                Des prescriptions prêtes à l'emploi avec les posologies exactes
                pour ne plus jamais hésiter devant votre ordonnancier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Nos programmes phares
            </h2>
            <p className="text-lg text-slate-600">
              Choisissez la formation qui correspond à vos besoins actuels pour
              exceller aux urgences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Course 1 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col transition-transform hover:-translate-y-1 duration-300">
              <div className="h-48 bg-purple-900 relative">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/metabolic/800/400?blur=2')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full w-fit mb-3 uppercase tracking-wider">
                    Nouveau
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    Formation des Urgences Métaboliques
                  </h3>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-600 mb-6">
                  Maîtrisez les déséquilibres métaboliques les plus complexes
                  avec des algorithmes simplifiés.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "Dysnatrémie & Dyskaliémie",
                    "Acidocétose diabétique",
                    "Syndrome hyperosmolaire",
                    "Insuffisance Rénale Aiguë",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/formations"
                  className="w-full block text-center py-4 bg-purple-50 text-purple-900 font-bold rounded-xl hover:bg-purple-100 transition-colors"
                >
                  Voir le programme détaillé
                </Link>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-orange-500 flex flex-col transition-transform hover:-translate-y-1 duration-300 relative">
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-xl font-bold text-sm z-10">
                Le plus populaire
              </div>
              <div className="h-48 bg-slate-900 relative">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/emergency/800/400?blur=2')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    Les 30 Conduites Pratiques en Médecine d'Urgence
                  </h3>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-600 mb-6">
                  30 conduites 100% pratiques que l'on rencontre quotidiennement
                  aux urgences.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "OAP & Poussée hypertensive",
                    "Crise d'asthme & EP",
                    "Intoxications & Envenimations",
                    "Ordonnances types incluses",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/formations"
                  className="w-full block text-center py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
                >
                  Voir le programme détaillé
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Ils ont gagné en confiance
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Amina B.",
                role: "Médecin Généraliste",
                text: "Cette formation a complètement changé ma façon d'aborder les gardes. Les algorithmes sont clairs et je sais exactement quoi prescrire sans hésiter.",
              },
              {
                name: "Karim S.",
                role: "Interne en Médecine",
                text: "Le module sur les urgences métaboliques est une pépite. Ce qui me paraissait flou à la fac est devenu d'une logique implacable. Merci !",
              },
              {
                name: "Dr. Yassine M.",
                role: "Médecin de Garde",
                text: "Enfin une formation adaptée à nos hôpitaux ! Savoir gérer une DKA avec les moyens du bord m'a sauvé la mise plus d'une fois.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative"
              >
                <div className="text-orange-500 mb-4">{"★".repeat(5)}</div>
                <p className="text-slate-700 italic mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-900 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Questions Fréquentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080')] opacity-5 mix-blend-overlay"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Prêt(e) à transformer vos gardes aux urgences ?
          </h2>
          <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
            Rejoignez des centaines de médecins qui ont choisi la clarté et la
            confiance.
          </p>
          <Link
            to="/formations"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-orange-500/40 gap-2"
          >
            Accéder aux formations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import {
  CheckCircle2,
  ShieldCheck,
  FileText,
  Activity,
  Zap,
  CreditCard,
  Lock,
} from "lucide-react";

export default function Courses() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Nos Programmes de <span className="text-purple-900">Formation</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Des protocoles clairs, des posologies exactes et des conduites à
            tenir adaptées à la réalité des urgences en Algérie.
          </p>
        </div>

        {/* Course 1: Urgences Métaboliques */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 mb-24">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14 bg-purple-900 text-white relative">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/metabolic/800/800?blur=4')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-sm font-bold rounded-full mb-6 uppercase tracking-wider shadow-md">
                  Nouveau Programme
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Formation des Urgences Métaboliques
                </h2>
                <p className="text-purple-200 text-lg mb-10 leading-relaxed">
                  Démystifiez les déséquilibres hydro-électrolytiques et
                  acido-basiques. Fini les calculs complexes, place à l'action
                  clinique.
                </p>

                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-orange-400" />
                  Ce que vous allez maîtriser :
                </h3>
                <ul className="space-y-4 mb-10">
                  {[
                    "Dysnatrémie (Hyper et Hyponatrémie)",
                    "Dyskaliémie (Hyper et Hypokaliémie)",
                    "Dyscalcémie",
                    "Acidocétose diabétique (DKA)",
                    "Syndrome d'hyperglycémie hyperosmolaire",
                    "Hypoglycémie sévère",
                    "Insuffisance Rénale Aiguë (IRA)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                      <span className="text-purple-50 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Inclus dans ce programme :
                </h3>
                <div className="space-y-6 mb-12">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-purple-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        Physiopathologie simplifiée
                      </h4>
                      <p className="text-slate-600 mt-1">
                        Comprendre le "pourquoi" pour mieux appliquer le
                        "comment".
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-purple-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        Algorithmes de traitement
                      </h4>
                      <p className="text-slate-600 mt-1">
                        Des arbres décisionnels clairs avec les posologies
                        exactes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-purple-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        Cas cliniques réels
                      </h4>
                      <p className="text-slate-600 mt-1">
                        Mise en situation pour valider vos acquis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <div className="flex items-end gap-4 mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">
                    4 500 DA
                  </span>
                  <span className="text-lg text-slate-500 line-through mb-1">
                    7 000 DA
                  </span>
                </div>
                <button className="w-full py-4 bg-purple-900 hover:bg-purple-800 text-white font-bold rounded-xl text-lg transition-colors shadow-lg flex items-center justify-center gap-2">
                  <Lock className="w-5 h-5" />
                  Accéder à la formation
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
                  <CreditCard className="w-4 h-4" />
                  Paiement sécurisé (CCP, BaridiMob, Carte)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course 2: 30 Conduites Pratiques */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-orange-500 relative">
          <div className="absolute top-0 right-0 bg-orange-500 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm z-20 shadow-md">
            Le plus populaire
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14 bg-slate-900 text-white relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/emergency/800/800?blur=4')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Les 30 Conduites Pratiques en Médecine d'Urgence
                </h2>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                  30 conduites 100% pratiques que l'on rencontre quotidiennement
                  aux urgences. Le guide de survie ultime pour vos gardes.
                </p>

                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-orange-400" />
                  Parmi les thèmes abordés :
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "OAP",
                    "Accident aux AVK",
                    "Poussée hypertensive",
                    "Embolie pulmonaire",
                    "Crise d'asthme",
                    "Angine (enfant/adulte)",
                    "Rhinosinusite aiguë",
                    "Intoxications (CO, paracétamol...)",
                    "Envenimation scorpionique",
                    "Anaphylaxie",
                    "AVC ischémique/hémorragique",
                    "HNF et HBPM (posologie)",
                    "Migraine",
                    "Électrisation",
                    "Constat de décès",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-10 lg:p-14 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Inclus dans ce programme :
                </h3>
                <div className="space-y-6 mb-12">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        Ordonnances types prêtes à l'emploi
                      </h4>
                      <p className="text-slate-600 mt-1">
                        Ne cherchez plus les posologies, tout est rédigé pour
                        vous.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        Traitements disponibles en Algérie
                      </h4>
                      <p className="text-slate-600 mt-1">
                        Des protocoles réalistes basés sur les moyens de nos
                        hôpitaux.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        Astuces pour jeunes médecins
                      </h4>
                      <p className="text-slate-600 mt-1">
                        Les pièges à éviter et les réflexes à acquérir
                        d'urgence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                <div className="flex items-end gap-4 mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">
                    6 500 DA
                  </span>
                  <span className="text-lg text-slate-500 line-through mb-1">
                    9 000 DA
                  </span>
                </div>
                <button className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors shadow-lg flex items-center justify-center gap-2">
                  <Lock className="w-5 h-5" />
                  Accéder à la formation
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
                  <CreditCard className="w-4 h-4" />
                  Paiement sécurisé (CCP, BaridiMob, Carte)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { HeartPulse, Target, Eye, Award, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            À Propos d'
            <span className="text-purple-900">Urgences Simplifiées</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Notre mission est de transformer l'angoisse des premières gardes en
            assurance clinique grâce à des protocoles clairs et adaptés.
          </p>
        </div>

        {/* Instructor Profile */}
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 rounded-3xl transform -translate-x-4 translate-y-4 opacity-20"></div>
              <img
                src="https://picsum.photos/seed/doctor-portrait/800/800"
                alt="Dr. Instructeur"
                className="relative rounded-3xl shadow-xl object-cover w-full aspect-square"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-900 font-medium text-sm mb-6">
                <Award className="w-4 h-4" />
                L'Instructeur
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Un médecin urgentiste de terrain
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  "J'ai créé Urgences Simplifiées parce que je me souviens de
                  mes premières gardes. La peur de faire une erreur,
                  l'hésitation devant une ordonnance, le décalage énorme entre
                  les gros livres de médecine et la réalité chaotique des
                  urgences."
                </p>
                <p>
                  Après des années de pratique dans les hôpitaux algériens, j'ai
                  compilé, simplifié et structuré les conduites à tenir qui
                  sauvent des vies au quotidien.
                </p>
                <p>
                  Mon objectif n'est pas de vous apprendre la médecine – vous
                  l'avez déjà apprise à la fac. Mon objectif est de vous
                  apprendre à l'appliquer{" "}
                  <strong className="text-slate-900">
                    rapidement, efficacement et sans stress
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-purple-900 p-10 lg:p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-800 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Notre Mission</h3>
              <p className="text-purple-100 text-lg leading-relaxed">
                Simplifier la médecine d'urgence pour la rendre accessible et
                applicable immédiatement. Nous voulons que chaque jeune médecin
                ou étudiant puisse aborder ses gardes avec confiance, en sachant
                exactement quoi faire, comment le faire, et avec quels moyens.
              </p>
            </div>
          </div>

          <div className="bg-orange-500 p-10 lg:p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Eye className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Notre Vision</h3>
              <p className="text-orange-50 text-lg leading-relaxed">
                Une médecine pratique, totalement adaptée à la réalité
                algérienne. Fini les protocoles inapplicables nécessitant des
                bilans ou des molécules introuvables. Nous formons les médecins
                à exceller avec les moyens réels de nos structures de santé.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Nos Valeurs Fondamentales
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartPulse className="w-8 h-8 text-purple-900" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Pragmatisme
              </h4>
              <p className="text-slate-600">
                La théorie est importante, mais la pratique sauve des vies. Nous
                allons droit au but.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Sécurité
              </h4>
              <p className="text-slate-600">
                Des protocoles validés pour protéger le patient et sécuriser la
                pratique du médecin.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-purple-900" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Excellence
              </h4>
              <p className="text-slate-600">
                Une mise à jour constante de nos contenus selon les dernières
                recommandations scientifiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import {
  MapPin,
  FileText,
  Users,
  Clock,
  AlertCircle,
  CheckCircle,
  Globe,
  Heart,
} from "lucide-react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

export default function ConditionsEntreeQuebec() {
  return (
    <>
      <Hero
        title="Conditions d'entrée au Quebec"
        subtitle="Guide complet pour immigrer et s'établir dans la Belle Province"
        description="D'autres ressources utiles"
        heroButton="Commencez votre aventure"
        heroButton2="D'autres ressources utiles"
        gradient="from-purple-500 to-indigo-500"
        isImg={true}
        imgSrc="/entrer.webp"
      />
      <div className="min-h-screen">
        <div className="max-w-[80%] mx-auto px-6 py-8">
          {/* Navigation rapide */}
          <nav className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Navigation rapide
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="#programmes"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-50"
              >
                <Users className="w-5 h-5" />
                Programmes
              </a>
              <a
                href="#documents"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-50"
              >
                <FileText className="w-5 h-5" />
                Documents
              </a>
              <a
                href="#processus"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-50"
              >
                <Clock className="w-5 h-5" />
                Processus
              </a>
              <a
                href="#exigences"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-50"
              >
                <CheckCircle className="w-5 h-5" />
                Exigences
              </a>
            </div>
          </nav>

          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Bienvenue au Québec
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Le Québec accueille chaque année des milliers de nouveaux
                  résidents permanents et temporaires. Cette province
                  francophone du Canada offre de nombreuses opportunités
                  d'immigration adaptées aux différents profils de candidats.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <p className="text-blue-800">
                      <strong>Important :</strong> Le Québec a ses propres
                      critères de sélection en plus des exigences fédérales
                      canadiennes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Programmes d'immigration */}
          <section
            id="programmes"
            className="bg-white rounded-lg shadow-md p-8 mb-8 w-full"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Programmes d'immigration
            </h2>

            <div className="grid md:grid-cols-2 gap-6 w-full">
              {/* Programme régulier des travailleurs qualifiés */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Programme régulier des travailleurs qualifiés (PRTQ)
                </h3>
                <p className="text-gray-600 mb-4">
                  Destiné aux personnes qui souhaitent s'installer au Québec de
                  façon permanente et qui ont les qualifications
                  professionnelles recherchées.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Âge : 18 ans et plus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Formation : Diplôme d'études secondaires minimum
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Expérience professionnelle requise
                    </span>
                  </div>
                </div>
              </div>

              {/* Programme de l'expérience québécoise */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Programme de l'expérience québécoise (PEQ)
                </h3>
                <p className="text-gray-600 mb-4">
                  Pour les diplômés d'établissements d'enseignement québécois et
                  les travailleurs temporaires ayant une expérience au Québec.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Diplôme québécois eligible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Connaissance du français (niveau B2)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Intention de résider au Québec
                    </span>
                  </div>
                </div>
              </div>

              {/* Programme des investisseurs */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Programme des investisseurs
                </h3>
                <p className="text-gray-600 mb-4">
                  Pour les personnes disposant d'un patrimoine net élevé et
                  souhaitant investir au Québec.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Avoir un patrimoine net de 2 000 000 $ CAD minimum
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Investissement de 1 200 000 $ CAD
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Expérience en gestion d'entreprise
                    </span>
                  </div>
                </div>
              </div>

              {/* Programme des entrepreneurs */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Programme des entrepreneurs
                </h3>
                <p className="text-gray-600 mb-4">
                  Pour les personnes souhaitant créer ou acquérir une entreprise
                  au Québec.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Avoir un patrimoine net de 900 000 $ CAD minimum
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Créer ou acquérir une entreprise
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Créer au moins un emploi</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Documents requis */}
          <section
            id="documents"
            className="bg-white rounded-lg shadow-md p-8 mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-8 h-8 text-blue-600 mt-1" />
              <h2 className="text-3xl font-bold text-gray-800">
                Documents requis
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Documents d'identité
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Passeport valide</li>
                  <li>• Acte de naissance</li>
                  <li>• Certificat de mariage (si applicable)</li>
                  <li>• Certificat de divorce (si applicable)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Documents d'études
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Diplômes et certificats</li>
                  <li>• Relevés de notes</li>
                  <li>• Évaluation comparative des études (si requis)</li>
                  <li>• Attestations de formation professionnelle</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Documents professionnels
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Lettres d'emploi</li>
                  <li>• Certificats de travail</li>
                  <li>• Références professionnelles</li>
                  <li>• Permis d'exercer (si applicable)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Documents financiers
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Relevés bancaires</li>
                  <li>• Preuve de fonds</li>
                  <li>• Déclarations de revenus</li>
                  <li>• Attestations d'emploi avec salaire</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Tests linguistiques
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Test de français (TEF, TCF, DELF/DALF)</li>
                  <li>• Test d'anglais (IELTS, TEF) - optionnel</li>
                  <li>• Certificats de cours de langues</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Documents médicaux
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Examen médical (si requis)</li>
                  <li>• Certificat de vaccination</li>
                  <li>• Dossier médical complet</li>
                  <li>• Radiographie pulmonaire</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Processus de demande */}
          <section
            id="processus"
            className="bg-white rounded-lg shadow-md p-8 mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <Clock className="w-8 h-8 text-blue-600 mt-1" />
              <h2 className="text-3xl font-bold text-gray-800">
                Processus de demande
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Évaluation de l'admissibilité
                  </h3>
                  <p className="text-gray-600">
                    Vérifiez si vous répondez aux critères du programme choisi
                    en utilisant les outils d'auto-évaluation en ligne.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Préparation du dossier
                  </h3>
                  <p className="text-gray-600">
                    Rassemblez tous les documents requis, obtenez les
                    traductions certifiées et passez les tests linguistiques
                    nécessaires.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Soumission de la demande
                  </h3>
                  <p className="text-gray-600">
                    Remplissez les formulaires en ligne et soumettez votre
                    demande avec tous les documents requis et les frais de
                    traitement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Évaluation par le MIDI
                  </h3>
                  <p className="text-gray-600">
                    Le Ministère de l'Immigration évalue votre dossier selon les
                    critères de sélection du Québec.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Certificat de sélection du Québec (CSQ)
                  </h3>
                  <p className="text-gray-600">
                    Si accepté, vous recevrez le CSQ, document nécessaire pour
                    la demande de résidence permanente au fédéral.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  6
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Demande fédérale
                  </h3>
                  <p className="text-gray-600">
                    Soumettez votre demande de résidence permanente aux
                    autorités fédérales canadiennes avec votre CSQ.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Exigences linguistiques */}
          <section
            id="exigences"
            className="bg-white rounded-lg shadow-md p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Exigences linguistiques
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Français (obligatoire)
                </h3>
                <p className="text-gray-600 mb-4">
                  Le français est la langue officielle du Québec. La maîtrise du
                  français est essentielle pour la plupart des programmes
                  d'immigration.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Niveaux acceptés :
                  </h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• DELF B2 ou DALF C1/C2</li>
                    <li>• TEF : 541-698 points (B2) ou plus</li>
                    <li>• TCF : 400-499 points (B2) ou plus</li>
                    <li>• Diplôme d'études en français au Québec</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Anglais (optionnel mais avantageux)
                </h3>
                <p className="text-gray-600 mb-4">
                  Bien que non obligatoire, la connaissance de l'anglais peut
                  vous donner des points supplémentaires dans la grille de
                  sélection.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Tests acceptés :
                  </h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• IELTS General : minimum 6.0 par compétence</li>
                    <li>• TEF Canada : minimum 207 points par compétence</li>
                    <li>• CELPIP-General : minimum 7 par compétence</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Délais et frais */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Délais et frais
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Délais de traitement
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">PRTQ</span>
                    <span className="font-semibold text-blue-600">
                      12-24 mois
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">PEQ</span>
                    <span className="font-semibold text-blue-600">
                      6-12 mois
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Investisseurs</span>
                    <span className="font-semibold text-blue-600">
                      24-36 mois
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Entrepreneurs</span>
                    <span className="font-semibold text-blue-600">
                      18-30 mois
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Frais de traitement
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Demandeur principal</span>
                    <span className="font-semibold text-blue-600">
                      822 $ CAD
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Conjoint/conjointe</span>
                    <span className="font-semibold text-blue-600">
                      176 $ CAD
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Enfant à charge</span>
                    <span className="font-semibold text-blue-600">
                      176 $ CAD
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">
                      Frais de droit de résidence permanente
                    </span>
                    <span className="font-semibold text-blue-600">
                      515 $ CAD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conseils pratiques */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="w-8 h-8 text-red-500 mt-1" />
              <h2 className="text-3xl font-bold text-gray-800">
                Conseils pour réussir
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Préparez-vous linguistiquement
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Investissez du temps dans l'apprentissage du français.
                      Plus votre niveau est élevé, plus vous avez de chances
                      d'être sélectionné.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Validez vos diplômes
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Obtenez une évaluation comparative de vos études
                      étrangères pour maximiser les points accordés à votre
                      formation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Documentez votre expérience
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Rassemblez toutes les preuves de votre expérience
                      professionnelle avec des descriptions détaillées de vos
                      tâches.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Soyez patient et persévérant
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Le processus peut être long. Gardez vos documents à jour
                      et répondez rapidement aux demandes d'information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Consultez un professionnel
                    </h4>
                    <p className="text-gray-600 text-sm">
                      N'hésitez pas à faire appel à un consultant en immigration
                      réglementé pour vous accompagner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Préparez votre intégration
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Renseignez-vous sur le marché du travail québécois et les
                      démarches d'installation avant votre arrivée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact et ressources */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ressources utiles
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-black ">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Site officiel</h3>
                <p className="text-sm opacity-90">
                  Ministère de l'Immigration, de la Francisation et de
                  l'Intégration (MIFI)
                </p>
                <p className="text-sm opacity-75 mt-2">quebec.ca/immigration</p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Mon projet Québec</h3>
                <p className="text-sm opacity-90">
                  Outil d'auto-évaluation en ligne pour tester votre
                  admissibilité
                </p>
                <p className="text-sm opacity-75 mt-2">
                  monprojetquebec.gouv.qc.ca
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Services d'aide</h3>
                <p className="text-sm opacity-90">
                  Organismes d'aide aux immigrants et services d'intégration
                </p>
                <p className="text-sm opacity-75 mt-2">
                  Disponibles dans toutes les régions
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
              <p className="text-center">
                <strong>Avertissement :</strong> Les informations présentées
                sont à titre indicatif. Consultez toujours les sources
                officielles pour les critères et procédures les plus récents.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

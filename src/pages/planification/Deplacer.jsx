import React from "react";
import {
  MapPin,
  Car,
  Bus,
  Train,
  Plane,
  Bike,
  CreditCard,
  Clock,
  AlertCircle,
  CheckCircle,
  Navigation,
  Snowflake,
  Heart,
} from "lucide-react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

export default function SeDeplacerQuebec() {
  return (
    <>
      <Hero
        title="Se déplacer au Québec"
        subtitle="Guide complet des transports et moyens de déplacement dans la Belle Province"
        description="Toutes les options pour voyager efficacement"
        heroButton="Explorez vos options"
        heroButton2="Conseils pratiques"
        gradient="from-green-500 to-teal-500"
        isImg={true}
        imgSrc="/road.jpg"
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
                href="#transports-publics"
                className="flex items-center gap-2 text-green-600 hover:text-green-800 p-2 rounded hover:bg-green-50"
              >
                <Bus className="w-5 h-5" />
                Transports publics
              </a>
              <a
                href="#vehicule-personnel"
                className="flex items-center gap-2 text-green-600 hover:text-green-800 p-2 rounded hover:bg-green-50"
              >
                <Car className="w-5 h-5" />
                Véhicule personnel
              </a>
              <a
                href="#transport-aerien"
                className="flex items-center gap-2 text-green-600 hover:text-green-800 p-2 rounded hover:bg-green-50"
              >
                <Plane className="w-5 h-5" />
                Transport aérien
              </a>
              <a
                href="#conseils-hiver"
                className="flex items-center gap-2 text-green-600 hover:text-green-800 p-2 rounded hover:bg-green-50"
              >
                <Snowflake className="w-5 h-5" />
                Conseils hiver
              </a>
            </div>
          </nav>

          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start gap-4">
              <Navigation className="w-8 h-8 text-green-600 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Découvrez le Québec en mouvement
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Le Québec offre un réseau de transport diversifié adapté à ses
                  vastes territoires et ses conditions climatiques
                  particulières. Que vous souhaitiez explorer les villes ou
                  découvrir les régions éloignées, plusieurs options s'offrent à
                  vous.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-green-800">
                      <strong>Important :</strong> Les conditions de transport
                      peuvent varier considérablement selon les saisons,
                      particulièrement en hiver.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Transports publics */}
          <section
            id="transports-publics"
            className="bg-white rounded-lg shadow-md p-8 mb-8 w-full"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Transports publics
            </h2>

            <div className="grid md:grid-cols-2 gap-6 w-full">
              {/* Métro de Montréal */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Métro de Montréal (STM)
                </h3>
                <p className="text-gray-600 mb-4">
                  Réseau souterrain efficace couvrant l'île de Montréal avec 4
                  lignes et 68 stations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Ouvert de 5h30 à 1h00 (2h00 le weekend)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Tarif unique : 3,70$ CAD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Carte OPUS recommandée</span>
                  </div>
                </div>
              </div>

              {/* Autobus urbains */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Autobus urbains
                </h3>
                <p className="text-gray-600 mb-4">
                  Réseau d'autobus complémentaire au métro et principal moyen de
                  transport dans les autres villes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      STM Montréal, RTC Québec, STS Sherbrooke
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Tarifs variables selon la ville
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Applications mobiles disponibles
                    </span>
                  </div>
                </div>
              </div>

              {/* Train de banlieue */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Train de banlieue (exo)
                </h3>
                <p className="text-gray-600 mb-4">
                  Service ferroviaire reliant la banlieue de Montréal au
                  centre-ville.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">6 lignes principales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Service principalement aux heures de pointe
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Tarification zonale</span>
                  </div>
                </div>
              </div>

              {/* Transport interurbain */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Transport interurbain
                </h3>
                <p className="text-gray-600 mb-4">
                  Liaisons entre les principales villes du Québec et vers
                  d'autres provinces.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Orléans Express, Limocar, Greyhound
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Réservation en ligne recommandée
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      Tarifs réduits pour étudiants et aînés
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Véhicule personnel */}
          <section
            id="vehicule-personnel"
            className="bg-white rounded-lg shadow-md p-8 mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <Car className="w-8 h-8 text-green-600 mt-1" />
              <h2 className="text-3xl font-bold text-gray-800">
                Véhicule personnel
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Permis de conduire
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Permis international valide 6 mois</li>
                  <li>• Échange de permis étranger possible</li>
                  <li>• Examen théorique et pratique requis</li>
                  <li>• Formation obligatoire pour nouveaux conducteurs</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Assurance automobile
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Assurance obligatoire</li>
                  <li>• Responsabilité civile minimum 50 000$</li>
                  <li>• SAAQ pour dommages corporels</li>
                  <li>• Assureurs privés pour dommages matériels</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Immatriculation
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Immatriculation obligatoire</li>
                  <li>• Frais annuels variables selon le véhicule</li>
                  <li>• Vignette d'immatriculation à afficher</li>
                  <li>• Renouvellement annuel requis</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Code de la route
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Conduite à droite</li>
                  <li>• Virage à droite au feu rouge autorisé</li>
                  <li>• Priorité aux piétons</li>
                  <li>• Alcoolémie max : 0,08% (0,00% pour nouveaux)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Stationnement
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Stationnement payant en centre-ville</li>
                  <li>• Applications mobiles de paiement</li>
                  <li>• Restrictions d'hiver (déneigement)</li>
                  <li>• Stationnements résidentiels avec vignette</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Carburant et péages
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Essence, diesel, électrique disponibles</li>
                  <li>• Prix affichés en cents par litre</li>
                  <li>• Peu de péages (ponts principalement)</li>
                  <li>• Bornes de recharge électrique en expansion</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conseils conduite hiver */}
          <section
            id="conseils-hiver"
            className="bg-white rounded-lg shadow-md p-8 mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <Snowflake className="w-8 h-8 text-blue-600 mt-1" />
              <h2 className="text-3xl font-bold text-gray-800">
                Conduite hivernale
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Pneus d'hiver obligatoires
                </h3>
                <p className="text-blue-700">
                  Du 1er décembre au 15 mars, les pneus d'hiver sont
                  obligatoires sur tous les véhicules de tourisme.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">
                    Équipement essentiel
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Pneus d'hiver avec symbole flocon</li>
                    <li>• Grattoir et balai à neige</li>
                    <li>• Liquide lave-glace antigel</li>
                    <li>• Trousse d'urgence (couvertures, nourriture)</li>
                    <li>• Câbles de survoltage</li>
                    <li>• Pelle pliante</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">
                    Techniques de conduite
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Réduire la vitesse et augmenter les distances</li>
                    <li>• Accélérer et freiner graduellement</li>
                    <li>• Éviter les mouvements brusques du volant</li>
                    <li>• Déneiger complètement le véhicule</li>
                    <li>• Garder le réservoir au moins à moitié plein</li>
                    <li>• Vérifier les conditions routières avant de partir</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Transport aérien */}
          <section
            id="transport-aerien"
            className="bg-white rounded-lg shadow-md p-8 mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <Plane className="w-8 h-8 text-green-600 mt-1" />
              <h2 className="text-3xl font-bold text-gray-800">
                Transport aérien
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Aéroports principaux
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">
                      Montréal-Trudeau (YUL)
                    </span>
                    <span className="font-semibold text-blue-600">
                      International
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">
                      Québec-Jean Lesage (YQB)
                    </span>
                    <span className="font-semibold text-blue-600">
                      National/International
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Bagotville (YBG)</span>
                    <span className="font-semibold text-blue-600">
                      Régional
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Sept-Îles (YZV)</span>
                    <span className="font-semibold text-blue-600">
                      Régional
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Compagnies aériennes
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded">
                    <h4 className="font-semibold text-gray-800">Air Canada</h4>
                    <p className="text-sm text-gray-600">
                      Compagnie nationale, vols domestiques et internationaux
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <h4 className="font-semibold text-gray-800">WestJet</h4>
                    <p className="text-sm text-gray-600">
                      Vols domestiques et vers les destinations soleil
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <h4 className="font-semibold text-gray-800">Air Transat</h4>
                    <p className="text-sm text-gray-600">
                      Spécialisée dans les vols vacances
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <h4 className="font-semibold text-gray-800">
                      Porter Airlines
                    </h4>
                    <p className="text-sm text-gray-600">
                      Vols régionaux de l'est du Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Transport alternatif */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Transports alternatifs
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <Bike className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">
                  BIXI / Vélo
                </h3>
                <p className="text-sm text-gray-600">
                  Système de vélos en libre-service disponible à Montréal et
                  Québec.
                </p>
              </div>

              <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <Car className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">
                  Covoiturage
                </h3>
                <p className="text-sm text-gray-600">
                  Platforms comme Poparide, BlaBlaCar pour partager les trajets.
                </p>
              </div>

              <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">
                  Taxi / Uber
                </h3>
                <p className="text-sm text-gray-600">
                  Services de taxi traditionnels et plateformes de VTC
                  disponibles.
                </p>
              </div>

              <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <Car className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">
                  Autopartage
                </h3>
                <p className="text-sm text-gray-600">
                  Communauto, Car2Go pour louer des véhicules à l'heure.
                </p>
              </div>
            </div>
          </section>

          {/* Tarifs et cartes */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <CreditCard className="w-8 h-8 text-green-600 mt-1" />
              <h2 className="text-3xl font-bold text-gray-800">
                Tarifs et cartes de transport
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Montréal (STM)
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Passage simple</span>
                    <span className="font-semibold text-blue-600">
                      3,70$ CAD
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Carte mensuelle</span>
                    <span className="font-semibold text-blue-600">97$ CAD</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Étudiants (mensuel)</span>
                    <span className="font-semibold text-blue-600">57$ CAD</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Aînés 65+ (mensuel)</span>
                    <span className="font-semibold text-blue-600">27$ CAD</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Québec (RTC)
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Passage simple</span>
                    <span className="font-semibold text-blue-600">
                      3,75$ CAD
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Carte mensuelle</span>
                    <span className="font-semibold text-blue-600">95$ CAD</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Étudiants (mensuel)</span>
                    <span className="font-semibold text-blue-600">55$ CAD</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Aînés 65+ (mensuel)</span>
                    <span className="font-semibold text-blue-600">30$ CAD</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">
                Carte OPUS (Montréal)
              </h4>
              <p className="text-blue-700 text-sm">
                Carte rechargeable utilisable sur tous les transports de la
                région métropolitaine. Coût initial : 6$ CAD. Disponible dans
                les stations et dépanneurs.
              </p>
            </div>
          </section>

          {/* Conseils pratiques */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="w-8 h-8 text-red-500 mt-1" />
              <h2 className="text-3xl font-bold text-gray-800">
                Conseils pratiques
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Planifiez vos déplacements
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Utilisez les applications Transit, Citymapper ou Google
                      Maps pour planifier vos trajets en temps réel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Adaptez-vous aux saisons
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Prévoyez plus de temps en hiver et vérifiez les conditions
                      météorologiques avant de partir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Explorez les régions
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Pour découvrir les régions éloignées, considérez la
                      location de véhicule ou les circuits organisés.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Gardez votre monnaie
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Certains transports publics n'acceptent que la monnaie
                      exacte. Les cartes sont plus pratiques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

import Link from 'next/link';
import { Users, Target, Shield, Zap } from 'lucide-react';

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-stonefast-gray-light">
      {/* Hero Section */}
      <section className="bg-stonefast-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              À propos de StoneFast
            </h1>
            <p className="text-xl text-stonefast-gray-light">
              Découvrez notre histoire et notre mission
            </p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stonefast-gray-dark mb-6">
                Notre histoire
              </h2>
              <p className="text-lg text-stonefast-gray-dark mb-4">
                StoneFast est né d'une vision simple : rendre la location de voitures accessible à tous, 
                sans complication et avec un service de qualité.
              </p>
              <p className="text-lg text-stonefast-gray-dark mb-4">
                Fondée par Sébastien et Désiré, deux entrepreneurs passionnés par l'automobile et 
                l'innovation, notre entreprise s'est donnée pour mission de simplifier l'expérience 
                de location tout en garantissant un service premium.
              </p>
              <p className="text-lg text-stonefast-gray-dark">
                Aujourd'hui, StoneFast est reconnu pour sa rapidité, sa transparence et son 
                engagement envers la satisfaction client.
              </p>
            </div>
            <div className="bg-stonefast-gray-light p-8 rounded-lg">
              <div className="text-center">
                <Users className="w-16 h-16 text-stonefast-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">
                  Une équipe passionnée
                </h3>
                <p className="text-stonefast-gray-dark">
                  Notre équipe dédiée est là pour vous accompagner à chaque étape de votre location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre mission */}
      <section className="py-16 bg-stonefast-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stonefast-gray-dark mb-4">
              Notre mission
            </h2>
            <p className="text-lg text-stonefast-gray-dark">
              Permettre à tous de louer simplement, rapidement et en toute confiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-stonefast-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">Accessibilité</h3>
              <p className="text-stonefast-gray-dark">
                Rendre la location de voitures accessible à tous les budgets
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-stonefast-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">Rapidité</h3>
              <p className="text-stonefast-gray-dark">
                Processus de réservation simple et validation rapide
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-stonefast-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">Sécurité</h3>
              <p className="text-stonefast-gray-dark">
                Véhicules entretenus et assurances complètes incluses
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-stonefast-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">Service</h3>
              <p className="text-stonefast-gray-dark">
                Accompagnement personnalisé et support client réactif
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stonefast-gray-dark mb-4">
              Notre équipe
            </h2>
            <p className="text-lg text-stonefast-gray-dark">
              Découvrez les fondateurs de StoneFast
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sébastien */}
            <div className="bg-stonefast-gray-light p-8 rounded-lg text-center">
              <div className="w-24 h-24 bg-stonefast-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">S</span>
              </div>
              <h3 className="text-2xl font-semibold text-stonefast-gray-dark mb-2">
                Sébastien
              </h3>
              <p className="text-stonefast-blue font-semibold mb-4">Co-fondateur & CEO</p>
              <p className="text-stonefast-gray-dark mb-4">
                Passionné d'automobile et d'innovation, Sébastien apporte son expertise 
                technique et sa vision stratégique à StoneFast.
              </p>
              <p className="text-stonefast-gray-dark">
                Son objectif : créer une expérience de location simple, rapide et accessible 
                à tous, sans compromis sur la qualité.
              </p>
            </div>

            {/* Désiré */}
            <div className="bg-stonefast-gray-light p-8 rounded-lg text-center">
              <div className="w-24 h-24 bg-stonefast-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">D</span>
              </div>
              <h3 className="text-2xl font-semibold text-stonefast-gray-dark mb-2">
                Désiré
              </h3>
              <p className="text-stonefast-blue font-semibold mb-4">Co-fondateur & COO</p>
              <p className="text-stonefast-gray-dark mb-4">
                Expert en gestion d'entreprise et relations clients, Désiré s'assure que 
                chaque client bénéficie d'un service exceptionnel.
              </p>
              <p className="text-stonefast-gray-dark">
                Sa mission : garantir la satisfaction client et l'opérationnalité 
                parfaite de nos services de location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-16 bg-stonefast-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stonefast-gray-dark mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-stonefast-gray-dark">
              Les principes qui guident nos actions au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-4">
                Transparence
              </h3>
              <p className="text-stonefast-gray-dark mb-4">
                Nous croyons en la transparence totale. Pas de frais cachés, pas de mauvaises 
                surprises. Nos tarifs sont clairs et nos conditions transparentes.
              </p>
              <ul className="space-y-2 text-stonefast-gray-dark">
                <li>• Tarifs affichés sans surprise</li>
                <li>• Conditions claires et lisibles</li>
                <li>• Communication honnête</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-4">
                Excellence
              </h3>
              <p className="text-stonefast-gray-dark mb-4">
                Nous visons l'excellence dans tous nos services. De la qualité de nos véhicules 
                à notre service client, chaque détail compte.
              </p>
              <ul className="space-y-2 text-stonefast-gray-dark">
                <li>• Véhicules entretenus régulièrement</li>
                <li>• Service client réactif</li>
                <li>• Expérience utilisateur optimale</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-4">
                Innovation
              </h3>
              <p className="text-stonefast-gray-dark mb-4">
                Nous innovons constamment pour améliorer votre expérience. Technologie moderne 
                et processus optimisés pour votre confort.
              </p>
              <ul className="space-y-2 text-stonefast-gray-dark">
                <li>• Plateforme moderne et intuitive</li>
                <li>• Processus simplifiés</li>
                <li>• Solutions adaptées à vos besoins</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Message de Sébastien */}
      <section className="py-16 bg-stonefast-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Un message de Sébastien
          </h2>
          <blockquote className="text-xl italic mb-8">
            "Chez StoneFast, nous croyons que la location de voitures doit être simple, 
            rapide et accessible à tous. Notre mission est de vous offrir une expérience 
            exceptionnelle, sans complication, avec un service de qualité professionnelle. 
            Nous travaillons chaque jour pour mériter votre confiance et vous accompagner 
            dans tous vos déplacements."
          </blockquote>
          <p className="text-lg">
            <strong>Sébastien</strong> - Co-fondateur de StoneFast
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stonefast-gray-dark mb-6">
            Prêt à nous faire confiance ?
          </h2>
          <p className="text-lg text-stonefast-gray-dark mb-8">
            Découvrez notre service et réservez votre véhicule dès maintenant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vehicules"
              className="bg-stonefast-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-blue-dark transition-colors duration-200"
            >
              Voir nos véhicules
            </Link>
            <Link
              href="/contact"
              className="border-2 border-stonefast-blue text-stonefast-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-blue hover:text-white transition-colors duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
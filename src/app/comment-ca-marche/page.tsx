import Link from 'next/link';
import { Car, CheckCircle, Clock, Shield, Users, Zap } from 'lucide-react';

export default function CommentCaMarchePage() {
  const steps = [
    {
      number: 1,
      title: 'Choisissez le véhicule',
      description: 'Parcourez notre catalogue et sélectionnez le véhicule qui correspond à vos besoins',
      icon: Car,
      color: 'bg-stonefast-blue'
    },
    {
      number: 2,
      title: 'Faites une demande simple',
      description: 'Remplissez notre formulaire en ligne avec vos informations et dates de location',
      icon: CheckCircle,
      color: 'bg-stonefast-blue'
    },
    {
      number: 3,
      title: 'On valide et vous partez !',
      description: 'Nous validons votre demande rapidement et vous récupérez votre véhicule',
      icon: Zap,
      color: 'bg-stonefast-blue'
    }
  ];

  const advantages = [
    {
      title: 'Simplicité',
      description: 'Processus de réservation en quelques clics',
      icon: CheckCircle
    },
    {
      title: 'Sécurité',
      description: 'Véhicules entretenus et assurances incluses',
      icon: Shield
    },
    {
      title: 'Rapidité',
      description: 'Validation et mise à disposition rapides',
      icon: Clock
    },
    {
      title: 'Transparence',
      description: 'Tarifs clairs, pas de mauvaises surprises',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-stonefast-gray-light">
      {/* Hero Section */}
      <section className="bg-stonefast-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Comment ça marche ?
            </h1>
            <p className="text-xl text-stonefast-gray-light">
              Un processus simple en 3 étapes pour louer votre véhicule
            </p>
          </div>
        </div>
      </section>

      {/* Étapes du processus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-stonefast-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-stonefast-gray-dark">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-stonefast-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stonefast-gray-dark mb-4">
              Nos engagements
            </h2>
            <p className="text-lg text-stonefast-gray-dark">
              Pourquoi nous choisir pour votre location de véhicule
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-stonefast-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">
                  {advantage.title}
                </h3>
                <p className="text-stonefast-gray-dark">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options de location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stonefast-gray-dark mb-4">
              Options de location
            </h2>
            <p className="text-lg text-stonefast-gray-dark">
              Choisissez la formule qui vous convient
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location sans chauffeur */}
            <div className="bg-stonefast-gray-light p-8 rounded-lg">
              <div className="text-center mb-6">
                <Car className="w-16 h-16 text-stonefast-blue mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-stonefast-gray-dark mb-2">
                  Location sans chauffeur
                </h3>
                <p className="text-stonefast-gray-dark">
                  Conduisez vous-même votre véhicule
                </p>
              </div>
              <ul className="space-y-3 text-stonefast-gray-dark">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-stonefast-blue mr-3" />
                  Liberté totale de déplacement
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-stonefast-blue mr-3" />
                  Tarifs plus économiques
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-stonefast-blue mr-3" />
                  Disponible 24h/24
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-stonefast-blue mr-3" />
                  Assurance tous risques incluse
                </li>
              </ul>
            </div>

            {/* Location avec chauffeur */}
            <div className="bg-stonefast-gray-light p-8 rounded-lg">
              <div className="text-center mb-6">
                <Users className="w-16 h-16 text-stonefast-blue mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-stonefast-gray-dark mb-2">
                  Location avec chauffeur
                </h3>
                <p className="text-stonefast-gray-dark">
                  Profitez d'un service premium
                </p>
              </div>
              <ul className="space-y-3 text-stonefast-gray-dark">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-stonefast-blue mr-3" />
                  Chauffeur professionnel
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-stonefast-blue mr-3" />
                  Service personnalisé
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-stonefast-blue mr-3" />
                  Ponctualité garantie
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-stonefast-blue mr-3" />
                  Idéal pour événements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-stonefast-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stonefast-gray-dark mb-4">
              Questions fréquentes
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-2">
                Quels documents sont nécessaires ?
              </h3>
              <p className="text-stonefast-gray-dark">
                Permis de conduire valide, pièce d'identité et justificatif de domicile.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-2">
                Quelle est la durée minimale de location ?
              </h3>
              <p className="text-stonefast-gray-dark">
                La durée minimale est de 24h. Nous proposons aussi des locations à la journée, semaine ou mois.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-2">
                L'assurance est-elle incluse ?
              </h3>
              <p className="text-stonefast-gray-dark">
                Oui, toutes nos locations incluent une assurance tous risques avec franchise réduite.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-2">
                Comment se passe la remise des clés ?
              </h3>
              <p className="text-stonefast-gray-dark">
                Nous vous remettons le véhicule à l'adresse de votre choix ou dans nos locaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stonefast-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à réserver ?
          </h2>
          <p className="text-xl mb-8">
            Commencez votre location en quelques clics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vehicules"
              className="bg-stonefast-white text-stonefast-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-gray-light transition-colors duration-200"
            >
              Voir nos véhicules
            </Link>
            <Link
              href="/contact"
              className="border-2 border-stonefast-white text-stonefast-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-white hover:text-stonefast-blue transition-colors duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
import Link from 'next/link';
import { Car, Clock, Shield, Users } from 'lucide-react';
import FadeInOnScroll from '@/components/FadeInOnScroll';
import HoverCard from '@/components/HoverCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section avec vidéo en arrière-plan - Pleine hauteur */}
      <section className="relative h-screen bg-gradient-to-br from-stonefast-blue to-stonefast-blue-dark text-white overflow-hidden">
        {/* Vidéo en arrière-plan */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
            poster="/hero-bg.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-video.webm" type="video/webm" />
            {/* Fallback si la vidéo ne charge pas */}
          </video>
          {/* Image de fallback si la vidéo ne se charge pas */}
          <div className="absolute inset-0 bg-gradient-to-br from-stonefast-blue to-stonefast-blue-dark opacity-80"></div>
        </div>
        
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Contenu principal centré verticalement */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInOnScroll delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                La rapidité au service de la performance
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-stonefast-gray-light">
                Location de voitures simples, accessibles et rapides
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/vehicules"
                  className="bg-stonefast-white text-stonefast-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-gray-light transition-colors duration-200"
                >
                  Voir les véhicules
                </Link>
                <Link
                  href="/reservation/informations"
                  className="border-2 border-stonefast-white text-stonefast-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-white hover:text-stonefast-blue transition-colors duration-200"
                >
                  Réserver maintenant
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-stonefast-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stonefast-gray-dark mb-4">
              Pourquoi choisir StoneFast ?
            </h2>
            <p className="text-lg text-stonefast-gray-dark">
              Une expérience de location simple, rapide et fiable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <HoverCard delay={0.1}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-stonefast-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">Rapide</h3>
                <p className="text-stonefast-gray-dark">Réservation en quelques clics, véhicule disponible rapidement</p>
              </div>
            </HoverCard>
            
            <HoverCard delay={0.2}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-stonefast-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">Sécurisé</h3>
                <p className="text-stonefast-gray-dark">Véhicules entretenus et assurances incluses</p>
              </div>
            </HoverCard>
            
            <HoverCard delay={0.3}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-stonefast-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">Accessible</h3>
                <p className="text-stonefast-gray-dark">Tarifs transparents, pas de mauvaises surprises</p>
              </div>
            </HoverCard>
            
            <HoverCard delay={0.4}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-stonefast-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">Qualité</h3>
                <p className="text-stonefast-gray-dark">Flotte moderne et bien entretenue</p>
              </div>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Véhicule en vedette */}
      <section className="py-16 bg-stonefast-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stonefast-gray-dark mb-4">
              Notre véhicule en vedette
            </h2>
            <p className="text-lg text-stonefast-gray-dark">
              Découvrez notre Mercedes GLC Coupé AMG 2024
            </p>
          </div>
          
          <div className="flex justify-center">
            <HoverCard delay={0.2}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md">
                <div className="h-48 bg-stonefast-gray flex items-center justify-center">
                  <Car className="w-16 h-16 text-stonefast-gray-dark" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">Mercedes GLC Coupé AMG 2024</h3>
                  <p className="text-stonefast-gray-dark mb-4">SUV coupé de luxe avec performances AMG exceptionnelles</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-stonefast-blue">200€/jour</span>
                    <Link
                      href="/reservation/informations?vehicle=Mercedes GLC Coupé AMG 2024&price=200"
                      className="bg-stonefast-blue text-white px-4 py-2 rounded-lg hover:bg-stonefast-blue-dark transition-colors"
                    >
                      Réserver
                    </Link>
                  </div>
                </div>
              </div>
            </HoverCard>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/vehicules"
              className="bg-stonefast-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-blue-dark transition-colors duration-200"
            >
              Voir le véhicule
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stonefast-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à partir ?
          </h2>
          <p className="text-xl mb-8">
            Réservez votre Mercedes GLC Coupé AMG 2024 en quelques clics
          </p>
          <Link
            href="/reservation/informations?vehicle=Mercedes GLC Coupé AMG 2024&price=200"
            className="bg-stonefast-white text-stonefast-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-gray-light transition-colors duration-200"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}

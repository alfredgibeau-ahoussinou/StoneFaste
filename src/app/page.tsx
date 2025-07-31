'use client';

import Link from 'next/link';
import { Car, Clock, Shield, Users, Sparkles, Star } from 'lucide-react';
import FadeInOnScroll from '@/components/FadeInOnScroll';
import HoverCard from '@/components/HoverCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section avec vidéo en arrière-plan - Pleine hauteur */}
      <section className="relative h-screen text-stonefast-gray-dark overflow-hidden">
        {/* Vidéo en arrière-plan */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/hero-bg.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-video.webm" type="video/webm" />
          </video>
        </div>
        
        {/* Particules décoratives */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-stonefast-gold rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-stonefast-silver rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-stonefast-gold-light rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Contenu principal centré verticalement */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInOnScroll delay={0.2}>
              <div className="mb-6">
                <Sparkles className="w-8 h-8 text-stonefast-gold mx-auto mb-4 animate-glow" />
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                  La rapidité au service de la{' '}
                  <span className="text-stonefast-gold-light">performance</span>
                </h1>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.4}>
              <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Location de voitures simples, accessibles et rapides. 
                Une expérience premium pour vos déplacements.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/vehicules"
                  className="glass border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-stonefast-gray-dark transition-all duration-300 transform hover:scale-105"
                >
                  <Car className="w-5 h-5 mr-2 inline" />
                  Voir les véhicules
                </Link>
                <Link
                  href="/reservation/informations"
                  className="glass border-2 border-stonefast-gold/50 text-stonefast-gold-light px-8 py-4 rounded-xl font-semibold text-lg hover:bg-stonefast-gold hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Réserver maintenant
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </div>

        {/* Indicateur de scroll élégant */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-stonefast-gold rounded-full flex justify-center animate-bounce glass">
            <div className="w-1 h-3 bg-stonefast-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <FadeInOnScroll delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-stonefast-gray-dark mb-6">
                Pourquoi choisir{' '}
                <span className="text-gradient">StoneFast</span> ?
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.4}>
              <p className="text-xl text-stonefast-gray-muted max-w-2xl mx-auto">
                Une expérience de location simple, rapide et fiable
              </p>
            </FadeInOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <HoverCard delay={0.1}>
              <div className="glass rounded-2xl text-center p-8 group border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-stonefast-blue/80 to-stonefast-blue-dark/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow backdrop-blur-sm">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-stonefast-gray-dark mb-4">Rapide</h3>
                <p className="text-stonefast-gray-muted leading-relaxed">Réservation en quelques clics, véhicule disponible rapidement</p>
              </div>
            </HoverCard>
            
            <HoverCard delay={0.2}>
              <div className="glass rounded-2xl text-center p-8 group border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-stonefast-blue/80 to-stonefast-blue-dark/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow backdrop-blur-sm">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-stonefast-gray-dark mb-4">Sécurisé</h3>
                <p className="text-stonefast-gray-muted leading-relaxed">Véhicules entretenus et assurances complètes incluses</p>
              </div>
            </HoverCard>
            
            <HoverCard delay={0.3}>
              <div className="glass rounded-2xl text-center p-8 group border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-stonefast-blue/80 to-stonefast-blue-dark/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow backdrop-blur-sm">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-stonefast-gray-dark mb-4">Service</h3>
                <p className="text-stonefast-gray-muted leading-relaxed">Équipe dédiée et support client disponible 24/7</p>
              </div>
            </HoverCard>
            
            <HoverCard delay={0.4}>
              <div className="glass rounded-2xl text-center p-8 group border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-stonefast-gold/80 to-stonefast-gold-light/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow backdrop-blur-sm">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-stonefast-gray-dark mb-4">Premium</h3>
                <p className="text-stonefast-gray-muted leading-relaxed">Flotte de véhicules haut de gamme et expérience luxueuse</p>
              </div>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Véhicule en vedette Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <FadeInOnScroll delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-stonefast-gray-dark mb-6">
                Véhicule en{' '}
                <span className="text-gradient-gold">vedette</span>
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.4}>
              <p className="text-xl text-stonefast-gray-muted max-w-2xl mx-auto">
                Découvrez notre Mercedes GLC Coupé AMG 2024
              </p>
            </FadeInOnScroll>
          </div>
          
          <FadeInOnScroll delay={0.6}>
            <div className="glass rounded-3xl border border-white/20 shadow-elegant">
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-stonefast-gray-dark mb-4">
                        Mercedes GLC Coupé AMG 2024
                      </h3>
                      <p className="text-lg text-stonefast-gray-muted leading-relaxed mb-6">
                        SUV coupé de luxe avec performances AMG exceptionnelles. 
                        Design audacieux et technologie de pointe pour une expérience de conduite incomparable.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 glass rounded-xl border border-white/20">
                        <div className="text-2xl font-bold text-stonefast-blue">258</div>
                        <div className="text-sm text-stonefast-gray-muted">Chevaux</div>
                      </div>
                      <div className="text-center p-4 glass rounded-xl border border-white/20">
                        <div className="text-2xl font-bold text-stonefast-blue">200€</div>
                        <div className="text-sm text-stonefast-gray-muted">Par jour</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/reservation/informations?vehicle=1&price=200"
                        className="glass border-2 border-stonefast-blue/30 text-stonefast-blue px-6 py-3 rounded-xl font-semibold hover:bg-stonefast-blue hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
                      >
                        Réserver maintenant
                      </Link>
                      <Link
                        href="/vehicules/1"
                        className="glass border-2 border-stonefast-gray-dark/30 text-stonefast-gray-dark px-6 py-3 rounded-xl font-semibold hover:bg-stonefast-gray-dark hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
                      >
                        Voir les détails
                      </Link>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="h-80 bg-stonefast-gray rounded-2xl overflow-hidden shadow-elegant">
                      <img
                        src="/2024-AMG-GLC-COUPE-LTG-01-DR.webp"
                        alt="Mercedes GLC Coupé AMG 2024"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 glass border border-white/20 text-stonefast-gold px-4 py-2 rounded-full text-sm font-semibold shadow-elegant">
                      Nouveau
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-luxury text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <FadeInOnScroll delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à vivre l'expérience{' '}
              <span className="text-stonefast-gold-light">StoneFast</span> ?
            </h2>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.4}>
            <p className="text-xl mb-12 text-stonefast-gray-light max-w-2xl mx-auto">
              Réservez votre véhicule en quelques clics et profitez d'un service premium
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.6}>
            <Link
              href="/reservation/informations"
              className="btn-luxury inline-flex items-center"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Réserver maintenant
            </Link>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}

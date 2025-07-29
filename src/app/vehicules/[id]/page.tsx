'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { Car, Calendar, MapPin, Users, Shield, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { vehicles } from '@/data/vehicles';

export default function VehiculeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const vehicleId = parseInt(params.id as string);
  
  const vehicle = vehicles.find(v => v.id === vehicleId);

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null && vehicle) {
      setSelectedImageIndex((selectedImageIndex + 1) % vehicle.gallery.length);
    }
  };

  const previousImage = () => {
    if (selectedImageIndex !== null && vehicle) {
      setSelectedImageIndex(selectedImageIndex === 0 ? vehicle.gallery.length - 1 : selectedImageIndex - 1);
    }
  };

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-stonefast-gray-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stonefast-gray-dark mb-4">
            Véhicule non trouvé
          </h1>
          <Link
            href="/vehicules"
            className="bg-stonefast-blue text-white px-6 py-3 rounded-lg hover:bg-stonefast-blue-dark transition-colors"
          >
            Retour aux véhicules
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stonefast-gray-light">
      {/* Hero Section */}
      <section className="bg-stonefast-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {vehicle.name}
            </h1>
            <p className="text-xl text-stonefast-gray-light mb-6">
              {vehicle.description}
            </p>
            <div className="flex justify-center items-center gap-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Année {vehicle.specifications.year}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{vehicle.specifications.mileage}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>{vehicle.specifications.seats} places</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Colonne principale */}
          <div className="lg:col-span-2">
            {/* Galerie d'images */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              {/* Image principale */}
              <div className="h-96 bg-stonefast-gray overflow-hidden">
                <img 
                  src={vehicle.gallery[0]} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-4">
                  Galerie photos
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {vehicle.gallery.map((image, index) => (
                    <div 
                      key={index} 
                      className="h-24 bg-stonefast-gray rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                      onClick={() => openImageModal(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${vehicle.name} - Vue ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description détaillée */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
                Description
              </h2>
              <p className="text-stonefast-gray-dark leading-relaxed mb-6">
                {vehicle.longDescription}
              </p>
              <p className="text-stonefast-gray-dark leading-relaxed">
                Ce véhicule de luxe combine élégance, performance et technologie de pointe pour offrir une expérience de conduite exceptionnelle. Idéal pour vos déplacements professionnels ou vos escapades de luxe.
              </p>
            </div>

            {/* Caractéristiques */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
                Caractéristiques principales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-5 h-5 text-stonefast-blue mr-3" />
                    <span className="text-stonefast-gray-dark">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Équipements */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
                Équipements inclus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vehicle.equipment.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Shield className="w-4 h-4 text-stonefast-blue mr-3" />
                    <span className="text-stonefast-gray-dark text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Carte de réservation */}
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-stonefast-gray-dark mb-4">
                Réserver ce véhicule
              </h3>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-stonefast-blue mb-2">
                  {vehicle.price}€
                </div>
                <div className="text-stonefast-gray-dark">par jour</div>
              </div>

              {/* Spécifications rapides */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-stonefast-gray-dark">Moteur</span>
                  <span className="font-medium text-stonefast-gray-dark">{vehicle.specifications.engine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stonefast-gray-dark">Puissance</span>
                  <span className="font-medium text-stonefast-gray-dark">{vehicle.specifications.power}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stonefast-gray-dark">Transmission</span>
                  <span className="font-medium text-stonefast-gray-dark">{vehicle.specifications.transmission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stonefast-gray-dark">Carburant</span>
                  <span className="font-medium text-stonefast-gray-dark">{vehicle.specifications.fuelType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stonefast-gray-dark">Places</span>
                  <span className="font-medium text-stonefast-gray-dark">{vehicle.specifications.seats}</span>
                </div>
              </div>

              <Link
                href={`/reservation/informations?vehicle=${vehicle.name}&price=${vehicle.price}`}
                className="w-full bg-stonefast-blue text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-stonefast-blue-dark transition-colors mb-4"
              >
                Réserver maintenant
              </Link>
              
              <Link
                href="/contact"
                className="w-full border-2 border-stonefast-blue text-stonefast-blue py-3 px-6 rounded-lg font-semibold text-center block hover:bg-stonefast-blue hover:text-white transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal pour afficher les images en plein écran */}
      {selectedImageIndex !== null && vehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-7xl max-h-full p-4">
            {/* Bouton fermer */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Boutons navigation */}
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image principale */}
            <img
              src={vehicle.gallery[selectedImageIndex]}
              alt={`${vehicle.name} - Vue ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Indicateur de position */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {selectedImageIndex + 1} / {vehicle.gallery.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
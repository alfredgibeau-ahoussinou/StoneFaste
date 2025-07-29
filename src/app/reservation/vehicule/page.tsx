'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Car, ArrowRight, ArrowLeft as ArrowLeftIcon } from 'lucide-react';
import { vehicles } from '@/data/vehicles';

interface VehicleSelection {
  vehicleId: string;
}

function VehiculePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [vehicleSelection, setVehicleSelection] = useState<VehicleSelection>({
    vehicleId: ''
  });

  // Pré-remplir le véhicule si spécifié dans l'URL
  useEffect(() => {
    const vehicleParam = searchParams.get('vehicle');
    if (vehicleParam) {
      const vehicle = vehicles.find(v => v.name === vehicleParam);
      if (vehicle) {
        setVehicleSelection({ vehicleId: vehicle.id.toString() });
      }
    }
  }, [searchParams]);

  const handleVehicleSelect = (vehicleId: string) => {
    setVehicleSelection({ vehicleId });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!vehicleSelection.vehicleId) {
      alert('Veuillez sélectionner un véhicule');
      return;
    }
    
    // Sauvegarder la sélection dans localStorage
    localStorage.setItem('reservation_vehicle', JSON.stringify(vehicleSelection));
    
    // Rediriger vers la page suivante
    router.push('/reservation/dates');
  };

  const selectedVehicle = vehicles.find(v => v.id.toString() === vehicleSelection.vehicleId);

  return (
    <div className="min-h-screen bg-stonefast-gray-light">
      {/* Hero Section */}
      <section className="bg-stonefast-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Choisissez votre véhicule
            </h1>
            <p className="text-xl text-white/80">
              Étape 2 sur 4 - Sélection du véhicule
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Liste des véhicules */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
              Nos véhicules disponibles
            </h2>
            
            {vehicles.map(vehicle => (
              <div
                key={vehicle.id}
                className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-200 ${
                  vehicleSelection.vehicleId === vehicle.id.toString()
                    ? 'ring-2 ring-stonefast-blue border-stonefast-blue'
                    : 'hover:shadow-xl'
                }`}
                onClick={() => handleVehicleSelect(vehicle.id.toString())}
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-16 bg-stonefast-gray rounded flex items-center justify-center">
                    <Car className="w-8 h-8 text-stonefast-gray-dark" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-stonefast-gray-dark">
                      {vehicle.name}
                    </h3>
                    <p className="text-stonefast-gray-dark text-sm mb-2">
                      {vehicle.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="bg-stonefast-gray-light text-stonefast-gray-dark px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-stonefast-blue">
                      {vehicle.price}€
                    </div>
                    <div className="text-sm text-stonefast-gray-dark">par jour</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Détails du véhicule sélectionné */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-stonefast-gray-dark mb-6">
                Véhicule sélectionné
              </h3>
              
              {selectedVehicle ? (
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-12 bg-stonefast-gray rounded flex items-center justify-center">
                        <Car className="w-6 h-6 text-stonefast-gray-dark" />
                      </div>
                      <div>
                        <p className="font-medium text-stonefast-gray-dark">{selectedVehicle.name}</p>
                        <p className="text-sm text-stonefast-gray-dark">{selectedVehicle.price}€/jour</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-stonefast-gray-dark mb-2">
                      Caractéristiques
                    </h4>
                    <ul className="space-y-1 text-sm text-stonefast-gray-dark">
                      <li>• Moteur: {selectedVehicle.specifications.engine}</li>
                      <li>• Puissance: {selectedVehicle.specifications.power}</li>
                      <li>• Transmission: {selectedVehicle.specifications.transmission}</li>
                      <li>• Carburant: {selectedVehicle.specifications.fuelType}</li>
                      <li>• Places: {selectedVehicle.specifications.seats}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stonefast-gray-dark mb-2">
                      Équipements inclus
                    </h4>
                    <ul className="space-y-1 text-sm text-stonefast-gray-dark">
                      {selectedVehicle.equipment.slice(0, 5).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                      {selectedVehicle.equipment.length > 5 && (
                        <li className="text-stonefast-blue">• Et plus encore...</li>
                      )}
                    </ul>
                  </div>

                  <form onSubmit={handleSubmit} className="pt-4">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-stonefast-blue text-white rounded-lg font-semibold hover:bg-stonefast-blue-dark transition-colors flex items-center justify-center gap-2"
                    >
                      Continuer
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Car className="w-12 h-12 text-stonefast-gray-dark mx-auto mb-4" />
                  <p className="text-stonefast-gray-dark">
                    Sélectionnez un véhicule pour voir les détails
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VehiculePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-stonefast-gray-light flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stonefast-blue mx-auto mb-4"></div>
          <p className="text-stonefast-gray-dark">Chargement...</p>
        </div>
      </div>
    }>
      <VehiculePageContent />
    </Suspense>
  );
} 
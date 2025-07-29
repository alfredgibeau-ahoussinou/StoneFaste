'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { vehicles } from '@/data/vehicles';

interface DateSelection {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  deliveryOption: 'pickup' | 'delivery';
  deliveryAddress: string;
}

export default function DatesPage() {
  const router = useRouter();
  const [dateSelection, setDateSelection] = useState<DateSelection>({
    startDate: '',
    endDate: '',
    startTime: '09:00',
    endTime: '17:00',
    deliveryOption: 'pickup',
    deliveryAddress: ''
  });

  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  // Récupérer les données précédentes
  useEffect(() => {
    const vehicleData = localStorage.getItem('reservation_vehicle');
    if (vehicleData) {
      const vehicle = JSON.parse(vehicleData);
      const vehicleInfo = vehicles.find(v => v.id.toString() === vehicle.vehicleId);
      setSelectedVehicle(vehicleInfo);
    }
  }, []);

  const handleInputChange = (field: keyof DateSelection, value: string) => {
    setDateSelection(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateDuration = () => {
    if (!dateSelection.startDate || !dateSelection.endDate) return 0;
    const start = new Date(dateSelection.startDate);
    const end = new Date(dateSelection.endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateBasePrice = () => {
    if (!selectedVehicle) return 0;
    const duration = calculateDuration();
    return selectedVehicle.price * duration;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!dateSelection.startDate || !dateSelection.endDate) {
      alert('Veuillez sélectionner les dates de début et de fin');
      return;
    }
    
    // Sauvegarder la sélection dans localStorage
    localStorage.setItem('reservation_dates', JSON.stringify(dateSelection));
    
    // Rediriger vers la page suivante
    router.push('/reservation/options');
  };

  const duration = calculateDuration();
  const basePrice = calculateBasePrice();

  return (
    <div className="min-h-screen bg-stonefast-gray-light">


      {/* Hero Section */}
      <section className="bg-stonefast-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Choisissez vos dates
            </h1>
            <p className="text-xl text-white/80">
              Étape 3 sur 4 - Dates et horaires
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de dates */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                    Date de début *
                  </label>
                  <input
                    type="date"
                    required
                    value={dateSelection.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                    Date de fin *
                  </label>
                  <input
                    type="date"
                    required
                    value={dateSelection.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    min={dateSelection.startDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                    Heure de début
                  </label>
                  <input
                    type="time"
                    value={dateSelection.startTime}
                    onChange={(e) => handleInputChange('startTime', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                    Heure de fin
                  </label>
                  <input
                    type="time"
                    value={dateSelection.endTime}
                    onChange={(e) => handleInputChange('endTime', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stonefast-gray-dark mb-4">
                  Mode de récupération
                </label>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="pickup"
                      checked={dateSelection.deliveryOption === 'pickup'}
                      onChange={(e) => handleInputChange('deliveryOption', e.target.value)}
                      className="mr-3"
                    />
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-stonefast-blue" />
                      <div>
                        <div className="font-medium text-stonefast-gray-dark">Récupération en agence</div>
                        <div className="text-sm text-stonefast-gray-dark">54-56 Avenue Hoche, Paris 75008</div>
                      </div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="delivery"
                      checked={dateSelection.deliveryOption === 'delivery'}
                      onChange={(e) => handleInputChange('deliveryOption', e.target.value)}
                      className="mr-3"
                    />
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-stonefast-blue" />
                      <div>
                        <div className="font-medium text-stonefast-gray-dark">Livraison à domicile</div>
                        <div className="text-sm text-stonefast-gray-dark">+25€ de frais de livraison</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {dateSelection.deliveryOption === 'delivery' && (
                <div>
                  <label className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                    Adresse de livraison
                  </label>
                  <input
                    type="text"
                    value={dateSelection.deliveryAddress}
                    onChange={(e) => handleInputChange('deliveryAddress', e.target.value)}
                    placeholder="Adresse complète de livraison"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark placeholder-gray-400"
                  />
                </div>
              )}

              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  className="px-8 py-3 bg-stonefast-blue text-white rounded-lg font-semibold hover:bg-stonefast-blue-dark transition-colors flex items-center gap-2"
                >
                  Continuer
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Résumé */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-stonefast-gray-dark mb-6">
                Résumé de votre réservation
              </h3>
              
              {selectedVehicle ? (
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-stonefast-gray-dark mb-2">
                      Véhicule sélectionné
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-12 bg-stonefast-gray rounded flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-stonefast-gray-dark" />
                      </div>
                      <div>
                        <p className="font-medium text-stonefast-gray-dark">{selectedVehicle.name}</p>
                        <p className="text-sm text-stonefast-gray-dark">{selectedVehicle.price}€/jour</p>
                      </div>
                    </div>
                  </div>

                  {duration > 0 && (
                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-stonefast-gray-dark mb-2">
                        Durée de location
                      </h4>
                      <p className="text-stonefast-gray-dark">
                        {duration} jour{duration > 1 ? 's' : ''}
                      </p>
                      <p className="text-sm text-stonefast-gray-dark">
                        Du {dateSelection.startDate} au {dateSelection.endDate}
                      </p>
                      <p className="text-sm text-stonefast-gray-dark">
                        {dateSelection.startTime} - {dateSelection.endTime}
                      </p>
                    </div>
                  )}

                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-stonefast-gray-dark mb-2">
                      Mode de récupération
                    </h4>
                    <p className="text-stonefast-gray-dark">
                      {dateSelection.deliveryOption === 'pickup' ? 'Récupération en agence' : 'Livraison à domicile'}
                    </p>
                    {dateSelection.deliveryOption === 'delivery' && dateSelection.deliveryAddress && (
                      <p className="text-sm text-stonefast-gray-dark mt-1">
                        {dateSelection.deliveryAddress}
                      </p>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-stonefast-gray-dark mb-2">
                      Prix de base
                    </h4>
                    <p className="text-2xl font-bold text-stonefast-blue">
                      {basePrice}€
                    </p>
                    <p className="text-sm text-stonefast-gray-dark">
                      {selectedVehicle.price}€ × {duration} jour{duration > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-stonefast-gray-dark mx-auto mb-4" />
                  <p className="text-stonefast-gray-dark">
                    Aucun véhicule sélectionné
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
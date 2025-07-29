'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Shield, Users, Send, CheckCircle } from 'lucide-react';
import { vehicles } from '@/data/vehicles';

interface OptionsSelection {
  insurance: boolean;
  additionalDriver: boolean;
  message: string;
}

export default function OptionsPage() {
  const router = useRouter();
  const [optionsSelection, setOptionsSelection] = useState<OptionsSelection>({
    insurance: true,
    additionalDriver: false,
    message: ''
  });

  const [reservationData, setReservationData] = useState<any>({
    customerInfo: null,
    vehicle: null,
    dates: null
  });

  // Récupérer toutes les données précédentes
  useEffect(() => {
    const customerInfo = localStorage.getItem('reservation_customer_info');
    const vehicleData = localStorage.getItem('reservation_vehicle');
    const datesData = localStorage.getItem('reservation_dates');

    if (customerInfo && vehicleData && datesData) {
      const customer = JSON.parse(customerInfo);
      const vehicle = JSON.parse(vehicleData);
      const dates = JSON.parse(datesData);
      
      const vehicleInfo = vehicles.find(v => v.id.toString() === vehicle.vehicleId);
      
      setReservationData({
        customerInfo: customer,
        vehicle: vehicleInfo,
        dates: dates
      });
    }
  }, []);

  const handleInputChange = (field: keyof OptionsSelection, value: string | boolean) => {
    setOptionsSelection(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateDuration = () => {
    if (!reservationData.dates?.startDate || !reservationData.dates?.endDate) return 0;
    const start = new Date(reservationData.dates.startDate);
    const end = new Date(reservationData.dates.endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateTotalPrice = () => {
    if (!reservationData.vehicle) return 0;
    
    const duration = calculateDuration();
    let basePrice = reservationData.vehicle.price * duration;
    
    // Suppléments
    if (optionsSelection.insurance) basePrice += 15 * duration; // 15€/jour d'assurance
    if (optionsSelection.additionalDriver) basePrice += 10 * duration; // 10€/jour conducteur supplémentaire
    if (reservationData.dates?.deliveryOption === 'delivery') basePrice += 25; // 25€ de livraison
    
    return basePrice;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sauvegarder les options dans localStorage
    localStorage.setItem('reservation_options', JSON.stringify(optionsSelection));
    
    // Créer l'objet de réservation complet
    const completeReservation = {
      customerInfo: reservationData.customerInfo,
      vehicle: reservationData.vehicle,
      dates: reservationData.dates,
      options: optionsSelection,
      totalPrice: calculateTotalPrice()
    };
    
    // Sauvegarder la réservation complète
    localStorage.setItem('complete_reservation', JSON.stringify(completeReservation));
    
    // Rediriger vers la page de confirmation
    router.push('/reservation/confirmation');
  };

  const duration = calculateDuration();
  const totalPrice = calculateTotalPrice();

  if (!reservationData.customerInfo || !reservationData.vehicle || !reservationData.dates) {
    return (
      <div className="min-h-screen bg-stonefast-gray-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stonefast-gray-dark mb-4">
            Données manquantes
          </h1>
          <p className="text-stonefast-gray-dark mb-6">
            Veuillez recommencer le processus de réservation
          </p>
          <Link
            href="/reservation/informations"
            className="bg-stonefast-blue text-white px-6 py-3 rounded-lg hover:bg-stonefast-blue-dark transition-colors"
          >
            Recommencer
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Options supplémentaires
            </h1>
            <p className="text-xl text-white/80">
              Étape 4 sur 4 - Finalisation
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Options */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
                Options de location
              </h2>
              
              <div className="space-y-4">
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={optionsSelection.insurance}
                    onChange={(e) => handleInputChange('insurance', e.target.checked)}
                    className="mr-3"
                  />
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-stonefast-blue" />
                    <div>
                      <div className="font-medium text-stonefast-gray-dark">Assurance tous risques</div>
                      <div className="text-sm text-stonefast-gray-dark">+15€/jour - Protection complète</div>
                    </div>
                  </div>
                </label>
                
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={optionsSelection.additionalDriver}
                    onChange={(e) => handleInputChange('additionalDriver', e.target.checked)}
                    className="mr-3"
                  />
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-stonefast-blue" />
                    <div>
                      <div className="font-medium text-stonefast-gray-dark">Conducteur supplémentaire</div>
                      <div className="text-sm text-stonefast-gray-dark">+10€/jour - Permet à un autre conducteur</div>
                    </div>
                  </div>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  rows={4}
                  value={optionsSelection.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Précisez vos besoins, questions ou demandes spéciales..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark placeholder-gray-400"
                />
              </div>

              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  className="px-8 py-3 bg-stonefast-blue text-white rounded-lg font-semibold hover:bg-stonefast-blue-dark transition-colors flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Confirmer la réservation
                </button>
              </div>
            </form>
          </div>

          {/* Résumé complet */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-stonefast-gray-dark mb-6">
                Résumé complet
              </h3>
              
              <div className="space-y-4">
                {/* Informations client */}
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-stonefast-gray-dark mb-2">
                    Client
                  </h4>
                  <p className="text-stonefast-gray-dark">
                    {reservationData.customerInfo.firstName} {reservationData.customerInfo.lastName}
                  </p>
                  <p className="text-sm text-stonefast-gray-dark">
                    {reservationData.customerInfo.email}
                  </p>
                  <p className="text-sm text-stonefast-gray-dark">
                    {reservationData.customerInfo.phone}
                  </p>
                </div>

                {/* Véhicule */}
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-stonefast-gray-dark mb-2">
                    Véhicule
                  </h4>
                  <p className="font-medium text-stonefast-gray-dark">
                    {reservationData.vehicle.name}
                  </p>
                  <p className="text-sm text-stonefast-gray-dark">
                    {reservationData.vehicle.price}€/jour
                  </p>
                </div>

                {/* Dates */}
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-stonefast-gray-dark mb-2">
                    Période
                  </h4>
                  <p className="text-stonefast-gray-dark">
                    {duration} jour{duration > 1 ? 's' : ''}
                  </p>
                  <p className="text-sm text-stonefast-gray-dark">
                    Du {reservationData.dates.startDate} au {reservationData.dates.endDate}
                  </p>
                  <p className="text-sm text-stonefast-gray-dark">
                    {reservationData.dates.startTime} - {reservationData.dates.endTime}
                  </p>
                </div>

                {/* Livraison */}
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-stonefast-gray-dark mb-2">
                    Livraison
                  </h4>
                  <p className="text-stonefast-gray-dark">
                    {reservationData.dates.deliveryOption === 'pickup' ? 'Récupération en agence' : 'Livraison à domicile'}
                  </p>
                  {reservationData.dates.deliveryOption === 'delivery' && reservationData.dates.deliveryAddress && (
                    <p className="text-sm text-stonefast-gray-dark">
                      {reservationData.dates.deliveryAddress}
                    </p>
                  )}
                </div>

                {/* Options sélectionnées */}
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-stonefast-gray-dark mb-2">
                    Options
                  </h4>
                  <ul className="space-y-1 text-sm text-stonefast-gray-dark">
                    {optionsSelection.insurance && (
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Assurance tous risques (+{15 * duration}€)
                      </li>
                    )}
                    {optionsSelection.additionalDriver && (
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Conducteur supplémentaire (+{10 * duration}€)
                      </li>
                    )}
                    {reservationData.dates.deliveryOption === 'delivery' && (
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Livraison à domicile (+25€)
                      </li>
                    )}
                  </ul>
                </div>

                {/* Total */}
                <div>
                  <h4 className="font-semibold text-stonefast-gray-dark mb-2">
                    Total
                  </h4>
                  <p className="text-3xl font-bold text-stonefast-blue">
                    {totalPrice}€
                  </p>
                  <p className="text-sm text-stonefast-gray-dark">
                    Prix final à confirmer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
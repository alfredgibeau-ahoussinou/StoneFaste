'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Mail, Phone, MapPin, Car, Calendar, Shield, Users } from 'lucide-react';

export default function ConfirmationPage() {
  const router = useRouter();
  const [reservation, setReservation] = useState<any>(null);

  useEffect(() => {
    const reservationData = localStorage.getItem('complete_reservation');
    if (reservationData) {
      setReservation(JSON.parse(reservationData));
    }
  }, []);

  const handleSubmit = () => {
    // Ici vous pouvez ajouter la logique d'envoi de la réservation
    console.log('Réservation envoyée:', reservation);
    
    // Nettoyer le localStorage
    localStorage.removeItem('reservation_customer_info');
    localStorage.removeItem('reservation_vehicle');
    localStorage.removeItem('reservation_dates');
    localStorage.removeItem('reservation_options');
    localStorage.removeItem('complete_reservation');
    
    alert('Votre réservation a été envoyée avec succès ! Nous vous recontacterons dans les plus brefs délais pour confirmer.');
    router.push('/');
  };

  if (!reservation) {
    return (
      <div className="min-h-screen bg-stonefast-gray-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stonefast-gray-dark mb-4">
            Aucune réservation trouvée
          </h1>
          <Link
            href="/reservation/informations"
            className="bg-stonefast-blue text-white px-6 py-3 rounded-lg hover:bg-stonefast-blue-dark transition-colors"
          >
            Nouvelle réservation
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
            <CheckCircle className="w-20 h-20 mx-auto mb-6 text-green-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Réservation créée !
            </h1>
            <p className="text-xl text-white/80">
              Votre demande de réservation a été enregistrée
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
            Récapitulatif de votre réservation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informations client */}
            <div>
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-stonefast-blue" />
                Informations client
              </h3>
              <div className="space-y-2 text-stonefast-gray-dark">
                <p><strong>Nom :</strong> {reservation.customerInfo.firstName} {reservation.customerInfo.lastName}</p>
                <p><strong>Email :</strong> {reservation.customerInfo.email}</p>
                <p><strong>Téléphone :</strong> {reservation.customerInfo.phone}</p>
              </div>
            </div>

            {/* Véhicule */}
            <div>
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-stonefast-blue" />
                Véhicule sélectionné
              </h3>
              <div className="space-y-2 text-stonefast-gray-dark">
                <p><strong>Modèle :</strong> {reservation.vehicle.name}</p>
                <p><strong>Prix :</strong> {reservation.vehicle.price}€/jour</p>
                <p><strong>Type :</strong> {reservation.vehicle.type}</p>
              </div>
            </div>

            {/* Dates */}
            <div>
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-stonefast-blue" />
                Période de location
              </h3>
              <div className="space-y-2 text-stonefast-gray-dark">
                <p><strong>Du :</strong> {reservation.dates.startDate} à {reservation.dates.startTime}</p>
                <p><strong>Au :</strong> {reservation.dates.endDate} à {reservation.dates.endTime}</p>
                <p><strong>Durée :</strong> {Math.ceil((new Date(reservation.dates.endDate).getTime() - new Date(reservation.dates.startDate).getTime()) / (1000 * 60 * 60 * 24))} jours</p>
              </div>
            </div>

            {/* Livraison */}
            <div>
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-stonefast-blue" />
                Mode de récupération
              </h3>
              <div className="space-y-2 text-stonefast-gray-dark">
                <p><strong>Option :</strong> {reservation.dates.deliveryOption === 'pickup' ? 'Récupération en agence' : 'Livraison à domicile'}</p>
                {reservation.dates.deliveryOption === 'pickup' && (
                  <p><strong>Adresse :</strong> 54-56 Avenue Hoche, Paris 75008</p>
                )}
                {reservation.dates.deliveryOption === 'delivery' && reservation.dates.deliveryAddress && (
                  <p><strong>Adresse :</strong> {reservation.dates.deliveryAddress}</p>
                )}
              </div>
            </div>
          </div>

          {/* Options sélectionnées */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-4">
              Options sélectionnées
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reservation.options.insurance && (
                <div className="flex items-center gap-2 text-stonefast-gray-dark">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Assurance tous risques</span>
                </div>
              )}
              {reservation.options.additionalDriver && (
                <div className="flex items-center gap-2 text-stonefast-gray-dark">
                  <Users className="w-5 h-5 text-green-500" />
                  <span>Conducteur supplémentaire</span>
                </div>
              )}
            </div>
          </div>

          {/* Message */}
          {reservation.options.message && (
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-4">
                Message
              </h3>
              <p className="text-stonefast-gray-dark bg-stonefast-gray-light p-4 rounded-lg">
                {reservation.options.message}
              </p>
            </div>
          )}

          {/* Total */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-stonefast-gray-dark">
                Total estimé
              </h3>
              <p className="text-3xl font-bold text-stonefast-blue">
                {reservation.totalPrice}€
              </p>
            </div>
            <p className="text-sm text-stonefast-gray-dark mt-2">
              Prix final à confirmer par notre équipe
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleSubmit}
            className="bg-stonefast-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-blue-dark transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Confirmer et envoyer
          </button>
          
          <Link
            href="/reservation/informations"
            className="border-2 border-stonefast-blue text-stonefast-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-blue hover:text-white transition-colors duration-200 text-center"
          >
            Nouvelle réservation
          </Link>
        </div>

        {/* Informations de contact */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-stonefast-gray-dark mb-6 text-center">
            Besoin d'aide ?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 text-stonefast-blue mx-auto mb-3" />
              <h4 className="font-semibold text-stonefast-gray-dark mb-2">Téléphone</h4>
              <p className="text-stonefast-gray-dark">06 66 45 14 53</p>
              <p className="text-stonefast-gray-dark">06 24 54 77 47</p>
            </div>
            
            <div className="text-center">
              <Mail className="w-8 h-8 text-stonefast-blue mx-auto mb-3" />
              <h4 className="font-semibold text-stonefast-gray-dark mb-2">Email</h4>
              <p className="text-stonefast-gray-dark">contact@stonefast.fr</p>
            </div>
            
            <div className="text-center">
              <MapPin className="w-8 h-8 text-stonefast-blue mx-auto mb-3" />
              <h4 className="font-semibold text-stonefast-gray-dark mb-2">Adresse</h4>
              <p className="text-stonefast-gray-dark">54-56 Avenue Hoche</p>
              <p className="text-stonefast-gray-dark">Paris 75008</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, Phone, Mail, ArrowRight } from 'lucide-react';

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

function InformationsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sauvegarder les informations dans localStorage
    localStorage.setItem('reservation_customer_info', JSON.stringify(customerInfo));
    
    // Rediriger vers la page suivante avec les paramètres existants
    const vehicleParam = searchParams.get('vehicle');
    const priceParam = searchParams.get('price');
    
    let nextUrl = '/reservation/vehicule';
    if (vehicleParam) {
      nextUrl += `?vehicle=${vehicleParam}`;
      if (priceParam) {
        nextUrl += `&price=${priceParam}`;
      }
    }
    
    router.push(nextUrl);
  };

  return (
    <div className="min-h-screen bg-stonefast-gray-light">
      {/* Hero Section */}
      <section className="bg-stonefast-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Informations personnelles
            </h1>
            <p className="text-xl text-white/80">
              Étape 1 sur 4 - Vos coordonnées
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  required
                  value={customerInfo.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark placeholder-gray-400"
                  placeholder="Votre prénom"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  required
                  value={customerInfo.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark placeholder-gray-400"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={customerInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark placeholder-gray-400"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  value={customerInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark placeholder-gray-400"
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>

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
      </div>
    </div>
  );
}

export default function InformationsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-stonefast-gray-light flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stonefast-blue mx-auto mb-4"></div>
          <p className="text-stonefast-gray-dark">Chargement...</p>
        </div>
      </div>
    }>
      <InformationsPageContent />
    </Suspense>
  );
} 
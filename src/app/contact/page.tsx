'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Users, Award, Shield, Car, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-stonefast-gray-light">
      {/* Hero Section */}
      <section className="bg-stonefast-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/80">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark placeholder-gray-400"
                    placeholder="Votre prénom"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark placeholder-gray-400"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark placeholder-gray-400"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark placeholder-gray-400"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="demande-info">Demande d'information</option>
                  <option value="devis">Demande de devis</option>
                  <option value="reclamation">Réclamation</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stonefast-gray-dark mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre demande ou question..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-stonefast-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-stonefast-blue-dark transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Contact direct */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
                Contactez-nous directement
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-stonefast-blue" />
                  <div>
                    <p className="font-semibold text-stonefast-gray-dark">Téléphone</p>
                    <p className="text-stonefast-gray-dark">06 66 45 14 53 / 06 24 54 77 47</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-stonefast-blue" />
                  <div>
                    <p className="font-semibold text-stonefast-gray-dark">Email</p>
                    <p className="text-stonefast-gray-dark">contact@stonefast.fr</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-stonefast-blue" />
                  <div>
                    <p className="font-semibold text-stonefast-gray-dark">Adresse</p>
                    <p className="text-stonefast-gray-dark">54-56 Avenue Hoche, Paris 75008</p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-6 space-y-3">
                <a
                  href="https://wa.me/33666451453"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                
                <a
                  href="https://www.snapchat.com/add/stonefas.paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.244c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.796 1.418 1.947 1.418 3.244s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.118-7.705c-.49-.49-1.141-.796-1.947-.796s-1.457.306-1.947.796c-.49.49-.796 1.141-.796 1.947s.306 1.457.796 1.947c.49.49 1.141.796 1.947.796s1.457-.306 1.947-.796c.49-.49.796-1.141.796-1.947s-.306-1.457-.796-1.947z"/>
                  </svg>
                  Snapchat
                </a>
                
                <a
                  href="https://www.instagram.com/stonefast.paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-stonefast-gray-dark mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-stonefast-blue" />
                Horaires d'ouverture
              </h3>
              <div className="space-y-2 text-stonefast-gray-dark">
                <p><strong>Lundi - Vendredi :</strong> 8h00 - 19h00</p>
                <p><strong>Samedi :</strong> 9h00 - 17h00</p>
                <p><strong>Dimanche :</strong> Fermé</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-stonefast-gray-dark mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-stonefast-blue" />
                Nos services
              </h3>
              <ul className="space-y-2 text-stonefast-gray-dark">
                <li>• Location courte durée (24h à 1 semaine)</li>
                <li>• Location longue durée (1 mois et plus)</li>
                <li>• Location avec chauffeur</li>
                <li>• Livraison à domicile</li>
                <li>• Service événementiel</li>
                <li>• Flotte d'entreprise</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stonefast-gray-dark mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-stonefast-gray-dark">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-3">
                Quels documents sont nécessaires pour louer ?
              </h3>
              <p className="text-stonefast-gray-dark">
                Permis de conduire valide, pièce d'identité, justificatif de domicile et carte bancaire au nom du locataire principal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-3">
                Y a-t-il un âge minimum pour louer ?
              </h3>
              <p className="text-stonefast-gray-dark">
                Oui, vous devez avoir au moins 21 ans et être titulaire du permis depuis plus de 2 ans pour la plupart de nos véhicules.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-3">
                L'assurance est-elle incluse ?
              </h3>
              <p className="text-stonefast-gray-dark">
                Une assurance de base est incluse dans tous nos tarifs. Une assurance tous risques est disponible en option.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-3">
                Puis-je annuler ma réservation ?
              </h3>
              <p className="text-stonefast-gray-dark">
                Oui, vous pouvez annuler gratuitement jusqu'à 24h avant le début de la location. Au-delà, des frais peuvent s'appliquer.
              </p>
            </div>
          </div>
        </div>

        {/* Témoignages clients */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stonefast-gray-dark mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-stonefast-gray-dark">
              Découvrez les avis de nos clients satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-stonefast-gray-dark mb-4">
                "Service exceptionnel ! L'équipe est très professionnelle et les véhicules sont impeccables. Je recommande vivement."
              </p>
              <p className="font-semibold text-stonefast-gray-dark">- Marie L.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-stonefast-gray-dark mb-4">
                "Location simple et rapide. Le véhicule était parfait et la livraison à domicile très pratique."
              </p>
              <p className="font-semibold text-stonefast-gray-dark">- Pierre D.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-stonefast-gray-dark mb-4">
                "Excellent rapport qualité-prix. L'équipe est à l'écoute et propose des solutions adaptées à nos besoins."
              </p>
              <p className="font-semibold text-stonefast-gray-dark">- Sophie M.</p>
            </div>
          </div>
        </div>

        {/* Pourquoi nous choisir */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stonefast-gray-dark mb-4">
              Pourquoi choisir StoneFaste ?
            </h2>
            <p className="text-lg text-stonefast-gray-dark">
              Découvrez nos atouts qui font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-stonefast-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-2">
                Sécurité garantie
              </h3>
              <p className="text-stonefast-gray-dark">
                Tous nos véhicules sont parfaitement entretenus et assurés
              </p>
            </div>

            <div className="text-center">
              <div className="bg-stonefast-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-2">
                Disponibilité 24/7
              </h3>
              <p className="text-stonefast-gray-dark">
                Service client disponible même en dehors des heures d'ouverture
              </p>
            </div>

            <div className="text-center">
              <div className="bg-stonefast-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-2">
                Qualité premium
              </h3>
              <p className="text-stonefast-gray-dark">
                Flotte de véhicules haut de gamme et récents
              </p>
            </div>

            <div className="text-center">
              <div className="bg-stonefast-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-stonefast-gray-dark mb-2">
                Équipe experte
              </h3>
              <p className="text-stonefast-gray-dark">
                Personnel qualifié et à l'écoute de vos besoins
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
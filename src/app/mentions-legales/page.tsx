import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-stonefast-gray-light">
      {/* Hero Section */}
      <section className="bg-stonefast-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mentions légales
            </h1>
            <p className="text-xl text-stonefast-gray-light">
              Informations légales de StoneFast
            </p>
          </div>
        </div>
      </section>

      {/* Contenu à venir */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-stonefast-gray rounded-full flex items-center justify-center mx-auto mb-8">
            <FileText className="w-12 h-12 text-stonefast-gray-dark" />
          </div>
          
          <h2 className="text-3xl font-bold text-stonefast-gray-dark mb-6">
            Page en cours de construction
          </h2>
          
          <p className="text-lg text-stonefast-gray-dark mb-8">
            Les mentions légales de StoneFast sont en cours de rédaction. 
            Cette page sera bientôt disponible avec toutes les informations légales nécessaires.
          </p>
          
          <div className="bg-stonefast-gray-light p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-4">
              Informations provisoires
            </h3>
            <div className="text-left space-y-4 text-stonefast-gray-dark">
              <div>
                <strong>Éditeur :</strong> StoneFast
              </div>
              <div>
                <strong>Adresse :</strong> 54-56 Avenue Hoche, Paris 75008
              </div>
              <div>
                <strong>Email :</strong> contact@stonefast.fr
              </div>
              <div>
                <strong>Téléphone :</strong> 06 66 45 14 53 / 06 24 54 77 47
              </div>
            </div>
          </div>
          
          <Link
            href="/"
            className="bg-stonefast-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-blue-dark transition-colors duration-200"
          >
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </div>
  );
} 
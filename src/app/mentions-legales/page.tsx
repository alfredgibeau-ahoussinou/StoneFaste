import Link from 'next/link';
import { FileText, Mail, Phone, MapPin, Shield, Users, Building } from 'lucide-react';

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
            <p className="text-xl text-white/80">
              Informations légales et réglementaires de StoneFast
            </p>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Éditeur */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6 flex items-center gap-3">
                <Building className="w-6 h-6 text-stonefast-blue" />
                Éditeur du site
              </h2>
              <div className="bg-stonefast-gray-light p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stonefast-gray-dark">
                  <div>
                    <strong>Raison sociale :</strong> StoneFast
                  </div>
                  <div>
                    <strong>Forme juridique :</strong> Société à responsabilité limitée (SARL)
                  </div>
                  <div>
                    <strong>Capital social :</strong> 50 000 €
                  </div>
                  <div>
                    <strong>SIRET :</strong> 123 456 789 00012
                  </div>
                  <div>
                    <strong>RCS :</strong> Paris B 123 456 789
                  </div>
                  <div>
                    <strong>N° TVA intracommunautaire :</strong> FR12345678901
                  </div>
                </div>
              </div>
            </div>

            {/* Coordonnées */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-stonefast-blue" />
                Coordonnées
              </h2>
              <div className="bg-stonefast-gray-light p-6 rounded-lg">
                <div className="space-y-4 text-stonefast-gray-dark">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-stonefast-blue" />
                    <span><strong>Adresse :</strong> 54-56 Avenue Hoche, 75008 Paris, France</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-stonefast-blue" />
                    <span><strong>Téléphone :</strong> 06 66 45 14 53 / 06 24 54 77 47</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-stonefast-blue" />
                    <span><strong>Email :</strong> contact@stonefast.fr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Directeur de publication */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-stonefast-blue" />
                Directeur de publication
              </h2>
              <div className="bg-stonefast-gray-light p-6 rounded-lg">
                <p className="text-stonefast-gray-dark">
                  Le directeur de la publication est M. [Nom du directeur], en sa qualité de gérant de la société StoneFast.
                </p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-stonefast-blue" />
                Hébergement
              </h2>
              <div className="bg-stonefast-gray-light p-6 rounded-lg">
                <div className="space-y-4 text-stonefast-gray-dark">
                  <div>
                    <strong>Hébergeur :</strong> Vercel Inc.
                  </div>
                  <div>
                    <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
                  </div>
                  <div>
                    <strong>Site web :</strong> <a href="https://vercel.com" className="text-stonefast-blue hover:underline">https://vercel.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
                Propriété intellectuelle
              </h2>
              <div className="bg-stonefast-gray-light p-6 rounded-lg">
                <div className="space-y-4 text-stonefast-gray-dark">
                  <p>
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                    Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                  </p>
                  <p>
                    La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                  </p>
                  <p>
                    La marque "StoneFast" et le logo associé sont des marques déposées. Toute reproduction ou représentation, totale ou partielle, 
                    de ces marques sans autorisation préalable est interdite.
                  </p>
                </div>
              </div>
            </div>

            {/* Protection des données */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
                Protection des données personnelles
              </h2>
              <div className="bg-stonefast-gray-light p-6 rounded-lg">
                <div className="space-y-4 text-stonefast-gray-dark">
                  <p>
                    Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, 
                    et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, 
                    de suppression et d'opposition aux données personnelles vous concernant.
                  </p>
                  <p>
                    Pour exercer ces droits, vous pouvez nous contacter par email à <strong>contact@stonefast.fr</strong> 
                    ou par courrier à l'adresse suivante : StoneFast, 54-56 Avenue Hoche, 75008 Paris.
                  </p>
                  <p>
                    Les données collectées sur ce site sont destinées à traiter vos demandes de réservation et à vous tenir informé 
                    de nos services. Elles ne seront en aucun cas transmises à des tiers à des fins commerciales.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
                Cookies
              </h2>
              <div className="bg-stonefast-gray-light p-6 rounded-lg">
                <div className="space-y-4 text-stonefast-gray-dark">
                  <p>
                    Ce site utilise des cookies pour améliorer votre expérience de navigation. Ces cookies sont nécessaires 
                    au bon fonctionnement du site et ne collectent aucune information personnelle.
                  </p>
                  <p>
                    Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter 
                    le bon fonctionnement de certaines fonctionnalités du site.
                  </p>
                </div>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
                Limitation de responsabilité
              </h2>
              <div className="bg-stonefast-gray-light p-6 rounded-lg">
                <div className="space-y-4 text-stonefast-gray-dark">
                  <p>
                    Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, 
                    mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                  </p>
                  <p>
                    Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir 
                    le signaler par email à l'adresse <strong>contact@stonefast.fr</strong> en décrivant le problème de la manière 
                    la plus précise possible.
                  </p>
                  <p>
                    Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. 
                    En conséquence, StoneFast ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur 
                    de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.
                  </p>
                </div>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
                Droit applicable
              </h2>
              <div className="bg-stonefast-gray-light p-6 rounded-lg">
                <div className="space-y-4 text-stonefast-gray-dark">
                  <p>
                    Tout litige en relation avec l'utilisation du site <strong>stonefast.fr</strong> est soumis au droit français. 
                    Hormis les cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                  </p>
                </div>
              </div>
            </div>

            {/* Dernière mise à jour */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-stonefast-gray-dark mb-6">
                Dernière mise à jour
              </h2>
              <div className="bg-stonefast-gray-light p-6 rounded-lg">
                <p className="text-stonefast-gray-dark">
                  Ces mentions légales ont été mises à jour le <strong>15 janvier 2024</strong>.
                </p>
              </div>
            </div>

            {/* Bouton retour */}
            <div className="text-center mt-12">
              <Link
                href="/"
                className="bg-stonefast-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-blue-dark transition-colors duration-200 inline-flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Retour à l'accueil
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
} 
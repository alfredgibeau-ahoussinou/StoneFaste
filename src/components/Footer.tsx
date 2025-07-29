import Link from 'next/link';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stonefast-gray-dark text-stonefast-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-stonefast-blue rounded-lg flex items-center justify-center">
                <span className="text-stonefast-white font-bold text-lg">S</span>
              </div>
              <span className="text-stonefast-white font-bold text-xl">StoneFast</span>
            </div>
            <p className="text-stonefast-gray-light mb-4">
              La rapidité au service de la performance. Location de voitures simples, accessibles et rapides.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/33666451453"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              
              <a
                href="https://www.snapchat.com/add/stonefas.paris"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.244c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.796 1.418 1.947 1.418 3.244s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.118-7.705c-.49-.49-1.141-.796-1.947-.796s-1.457.306-1.947.796c-.49.49-.796 1.141-.796 1.947s.306 1.457.796 1.947c.49.49 1.141.796 1.947.796s1.457-.306 1.947-.796c.49-.49.796-1.141.796-1.947s-.306-1.457-.796-1.947z"/>
                </svg>
              </a>
              
              <a
                href="https://www.instagram.com/stonefast.paris"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vehicules" className="text-stonefast-gray-light hover:text-stonefast-white transition-colors">
                  Nos véhicules
                </Link>
              </li>
              <li>
                <Link href="/comment-ca-marche" className="text-stonefast-gray-light hover:text-stonefast-white transition-colors">
                  Comment ça marche ?
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stonefast-gray-light hover:text-stonefast-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-stonefast-gray-light hover:text-stonefast-white transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-stonefast-gray-light">
              <p>📧 contact@stonefast.fr</p>
              <p>📞 06 66 45 14 53 / 06 24 54 77 47</p>
              <p>📍 54-56 Avenue Hoche, Paris 75008</p>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-stonefast-gray mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stonefast-gray-light text-sm">
              © 2024 StoneFast. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-stonefast-gray-light hover:text-stonefast-white text-sm transition-colors">
                Mentions légales
              </Link>
              <Link href="/cgv" className="text-stonefast-gray-light hover:text-stonefast-white text-sm transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
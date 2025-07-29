# 🚗 StoneFaste - Location de Voitures Premium

**La rapidité au service de la performance** - Location de voitures simples, accessibles et rapides.

## 📋 Description du Site

StoneFaste est une plateforme moderne de location de voitures premium développée avec Next.js 15 et TypeScript. Le site offre une expérience utilisateur fluide avec des animations discrètes et un processus de réservation en plusieurs étapes.

### 🎯 Objectif
Permettre aux clients de louer facilement des véhicules haut de gamme avec un processus simple et transparent, en mettant l'accent sur la rapidité et la qualité de service.

## ✨ Fonctionnalités Principales

### 🏠 **Page d'Accueil**
- **Hero Section** : Vidéo en arrière-plan avec overlay dynamique
- **Section Avantages** : 4 points clés (Rapide, Sécurisé, Accessible, Qualité)
- **Véhicule en Vedette** : Mise en avant du Mercedes GLC Coupé AMG 2024
- **Call-to-Action** : Boutons de navigation vers la réservation

### 🚗 **Catalogue de Véhicules**
- **Liste des véhicules** : Affichage en grille avec images et prix
- **Page détail** : Galerie d'images avec modal interactif
- **Caractéristiques** : Spécifications techniques détaillées
- **Équipements** : Liste complète des options incluses

### 📝 **Système de Réservation Multi-Étapes**
1. **Informations personnelles** : Prénom, nom, email, téléphone
2. **Sélection du véhicule** : Choix parmi la flotte disponible
3. **Dates et livraison** : Période de location et mode de récupération
4. **Options supplémentaires** : Assurance, conducteur supplémentaire
5. **Confirmation** : Récapitulatif complet de la réservation

### 📞 **Page de Contact**
- **Formulaire de contact** : Demande d'information, devis, réclamation
- **Informations directes** : Téléphone, email, adresse
- **Réseaux sociaux** : WhatsApp, Snapchat, Instagram
- **FAQ** : Questions fréquentes avec réponses
- **Témoignages clients** : Avis et recommandations
- **Avantages** : Pourquoi choisir StoneFaste

### 📄 **Pages Informatives**
- **À propos** : Histoire et valeurs de l'entreprise
- **Comment ça marche** : Processus de location détaillé
- **CGV** : Conditions générales de vente
- **Mentions légales** : Informations légales

## 🛠️ Technologies Utilisées

### **Frontend**
- **Next.js 15** : Framework React avec App Router
- **TypeScript** : Typage statique pour la robustesse
- **Tailwind CSS** : Framework CSS utilitaire
- **Framer Motion** : Animations et transitions fluides
- **Lucide React** : Icônes modernes et cohérentes

### **Fonctionnalités Avancées**
- **Responsive Design** : Adaptation mobile, tablette, desktop
- **Animations discrètes** : Transitions entre pages et éléments
- **LocalStorage** : Persistance des données de réservation
- **Dynamic Routing** : Pages dynamiques pour les véhicules
- **SEO Optimisé** : Métadonnées et structure sémantique

## 🎨 Design et UX

### **Charte Graphique**
- **Couleurs** : Bleu StoneFast (#0066CC), gris, blanc
- **Typographie** : Inter (Google Fonts)
- **Style** : Moderne, professionnel, premium

### **Animations**
- **Transitions de pages** : Fade in/out avec mouvement subtil
- **Apparition au scroll** : Éléments qui apparaissent progressivement
- **Hover effects** : Interactions discrètes sur les cartes
- **Loading states** : Spinners de chargement élégants

### **Responsive**
- **Mobile First** : Design optimisé pour mobile
- **Breakpoints** : sm, md, lg, xl
- **Navigation** : Menu hamburger sur mobile
- **Images** : Optimisées pour tous les écrans

## 📁 Architecture du Projet

```
StoneFaste/
├── public/                 # Assets statiques
│   ├── images/            # Images des véhicules
│   ├── hero-video.mp4     # Vidéo d'arrière-plan
│   └── icons/             # Icônes SVG
├── src/
│   ├── app/               # Pages Next.js (App Router)
│   │   ├── page.tsx       # Page d'accueil
│   │   ├── vehicules/     # Catalogue de véhicules
│   │   ├── reservation/   # Système de réservation
│   │   ├── contact/       # Page de contact
│   │   └── layout.tsx     # Layout principal
│   ├── components/        # Composants réutilisables
│   │   ├── Navigation.tsx # Navigation principale
│   │   ├── Footer.tsx     # Pied de page
│   │   └── animations/    # Composants d'animation
│   └── data/              # Données centralisées
│       └── vehicles.ts    # Données des véhicules
├── tailwind.config.ts     # Configuration Tailwind
└── package.json           # Dépendances
```

## 🚀 Installation et Démarrage

### **Prérequis**
- Node.js 18+ 
- npm ou yarn

### **Installation**
```bash
# Cloner le repository
git clone https://github.com/alfredgibeau-ahoussinou/StoneFaste.git
cd StoneFaste

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### **Scripts Disponibles**
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code
```

## 🌐 Déploiement

### **Vercel (Recommandé)**
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### **Autres Plateformes**
- **Netlify** : Compatible avec Next.js
- **Railway** : Déploiement simple
- **AWS Amplify** : Solution cloud complète

## 📱 Fonctionnalités Mobile

- **Navigation tactile** : Optimisée pour les écrans tactiles
- **Performance** : Chargement rapide sur mobile
- **PWA Ready** : Prêt pour Progressive Web App
- **Offline Support** : Fonctionnalités hors ligne

## 🔧 Configuration

### **Variables d'Environnement**
```env
NEXT_PUBLIC_SITE_URL=https://stonefast.fr
NEXT_PUBLIC_CONTACT_EMAIL=contact@stonefast.fr
NEXT_PUBLIC_PHONE=06 66 45 14 53
```

### **Personnalisation**
- **Couleurs** : Modifier `tailwind.config.ts`
- **Données** : Éditer `src/data/vehicles.ts`
- **Animations** : Ajuster les composants dans `src/components/`

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Email** : contact@stonefast.fr
- **Téléphone** : 06 66 45 14 53 / 06 24 54 77 47
- **Adresse** : 54-56 Avenue Hoche, Paris 75008
- **Réseaux sociaux** : 
  - Snapchat : @stonefas.paris
  - Instagram : @stonefast.paris
  - WhatsApp : +33 6 66 45 14 53

---

**StoneFaste** - La rapidité au service de la performance 🚗✨

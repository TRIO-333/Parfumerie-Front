Bien sûr, ajoutons les technologies utilisées au README.

---

# Parfumerie Application

## Description

Bienvenue dans l'univers enchanteur de la Parfumerie, une application élégante qui vous permet de découvrir, de parcourir et d'acheter des parfums exquis. Cette plateforme a été conçue pour offrir une expérience utilisateur raffinée, vous permettant de naviguer facilement parmi une large sélection de produits de luxe.

## Fonctionnalités

- **Inscription et Connexion des utilisateurs** : Créez un compte et connectez-vous pour accéder à des offres exclusives.
- **Gestion des Produits** : Découvrez notre catalogue de parfums soigneusement sélectionnés.
- **Gestion des Commandes** : Passez des commandes en toute simplicité et suivez vos achats.
- **Administration** : Gérez les produits, mettez à jour les informations et gérez les stocks.

## Prérequis

- Node.js
- MySQL
- npm (Node Package Manager)

## Installation

### Cloner le Dépôt
```bash
git clone https://github.com/votre-repo/parfumerie.git
cd parfumerie
```

### Configuration du Backend

1. **Allez dans le dossier `back-end`** :
   ```bash
   cd back-end
   ```
2. **Installez les dépendances** :
   ```bash
   npm install
   ```
3. **Configurez la base de données MySQL** :
   - Ajoutez vos informations de connexion à MySQL dans le fichier `config/db.js`.
4. **Démarrez le serveur** :
   ```bash
   node server.js
   ```

### Configuration du Frontend

1. **Allez dans le dossier `front-end`** :
   ```bash
   cd ../front-end
   ```
2. **Installez les dépendances** :
   ```bash
   npm install
   ```
3. **Démarrez l'application React** :
   ```bash
   npm start
   ```

## Arborescence du Projet

```
parfumerie/
├── front-end/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Accueil/
│   │   │   │   ├── Accueil.js
│   │   │   │   ├── Accueil.css
│   │   │   ├── Banner/
│   │   │   │   ├── Banner.js
│   │   │   │   ├── Banner.css
│   │   │   ├── Newsletter/
│   │   │   │   ├── Newsletter.js
│   │   │   │   ├── Newsletter.css
│   │   │   ├── Parfum/
│   │   │   │   ├── Produits.js
│   │   │   ├── Authentification/
│   │   │   │   ├── ConnexionForm.js
│   │   │   │   ├── ConnexionForm.css
│   │   │   │   ├── InscriptionForm.js
│   │   │   │   ├── InscriptionForm.css
│   │   │   ├── Basics/
│   │   │   │   ├── Footer.js
│   │   │   │   ├── Footer.css
│   │   │   │   ├── Navbar.js
│   │   │   │   ├── Navbar.css
│   │   │   ├── Paiement/
│   │   │   │   ├── ConfirmationPaiement.js
│   │   │   │   ├── MethodePaiement.js
│   │   │   │   ├── OptionsLivraison.js
│   │   │   │   ├── RecapCommande.js
│   │   │   │   ├── ValiderLePaiement.js
│   │   │   ├── Panier/
│   │   │   │   ├── MontantCommande.js
│   │   │   │   ├── VotrePanier.js
│   │   │   ├── Profil/
│   │   │   │   ├── InformationsProfil.js
│   │   ├── pages/
│   │   │   ├── Accueil.js
│   │   │   ├── Connexion.js
│   │   │   ├── Inscription.js
│   │   │   ├── Paiement.js
│   │   │   ├── PaiementValide.js
│   │   │   ├── Panier.js
│   │   │   ├── Profil.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   ├── index.js
│   └── package.json
```

## Structure des Tables

- `users`
- `produit`
- `commande`
- `category`
- `produit_category`

## Technologies Utilisées

### Frontend

- **React** : Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- **Axios** : Une bibliothèque pour faire des requêtes HTTP depuis le navigateur.
- **React Router** : Une bibliothèque pour gérer la navigation dans une application React.

### Backend

- **Node.js** : Un environnement d'exécution JavaScript pour le backend.
- **Express** : Un framework web pour Node.js, utilisé pour construire l'API RESTful.
- **MySQL** : Un système de gestion de base de données relationnelle pour stocker les données.
- **bcrypt** : Une bibliothèque pour le hachage des mots de passe, afin d'assurer la sécurité.
- **jsonwebtoken** : Une bibliothèque pour créer et vérifier les JSON Web Tokens (JWT), utilisés pour l'authentification.

## Utilisation

### Accès à l'Application

- **Backend** : Ouvrez `http://localhost:8000` dans votre navigateur.
- **Frontend** : Ouvrez `http://localhost:3000` dans votre navigateur.

### Tester l'API

Utilisez des outils comme Thunder Client ou Postman pour envoyer des requêtes HTTP à votre API.

## Inspiration et Styles

L'inspiration pour le design de cette application vient de l'élégance intemporelle des grandes maisons de parfum. Le style est épuré et moderne, mettant en valeur les produits de manière sobre et raffinée.

## Créateurs

Cette application a été créée par une équipe passionnée : **Adilé**, **Awa**, et **Eva**. L' objectif est de fournir une expérience utilisateur exceptionnelle tout en mettant en avant des produits de qualité.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

J'espère que ce README répond à vos attentes et qu'il rendra votre projet encore plus attrayant. Si vous avez besoin de modifications supplémentaires, n'hésitez pas à demander !
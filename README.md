# Mon Portfolio

Bienvenue sur le dépôt de mon portfolio personnel ! Ce site web est conçu pour présenter mes projets, mes compétences et mon parcours professionnel de manière interactive et esthétique.

## Fonctionnalités

*   **Design Responsive :** S'adapte parfaitement à toutes les tailles d'écran (ordinateurs de bureau, tablettes, mobiles).
*   **Thème Dynamique :** Le site s'ajuste automatiquement au thème clair ou sombre de votre navigateur.
*   **Arrière-plan Animé :** Un effet de particules subtil en arrière-plan pour une touche moderne et dynamique.
*   **Sections Claires :**
    *   **À propos de moi :** Présentation personnelle et parcours.
    *   **Compétences :** Mise en avant des technologies et outils maîtrisés.
    *   **Projets :** Vitrine de mes réalisations avec des détails interactifs via des modales.
    *   **Contact :** Formulaire de contact et liens vers mes profils professionnels.
*   **Navigation Intuitive :** Menu de navigation fluide avec mise en surbrillance de la section active (scrollspy).

## Technologies Utilisées

*   **Frontend :**
    *   [React](https://react.dev/) : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
    *   [Ant Design](https://ant.design/) : Bibliothèque de composants UI pour une interface élégante et réactive.
    *   [react-tsparticles](https://www.npmjs.com/package/react-tsparticles) & [tsparticles](https://www.npmjs.com/package/tsparticles) : Pour l'arrière-plan animé.
    *   HTML5, CSS3, JavaScript (ES6+)
*   **Outils de Développement :**
    *   [Node.js](https://nodejs.org/) & [npm](https://www.npmjs.com/) : Environnement d'exécution JavaScript et gestionnaire de paquets.
    *   [Create React App](https://create-react-app.dev/) (`react-scripts`) : Configuration rapide de l'environnement de développement React.

## Démarrage Rapide

Suivez ces étapes pour lancer le projet en local sur votre machine.

### Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/en/download/) et [npm](https://www.npmjs.com/get-npm) installés sur votre système.

### Installation

1.  Clonez ce dépôt :
    ```bash
    git clone https://github.com/votre_utilisateur/votre_portfolio.git
    ```
2.  Naviguez vers le répertoire du projet :
    ```bash
    cd votre_portfolio
    ```
3.  Installez les dépendances :
    ```bash
    npm install
    ```

### Lancement de l'application

Pour démarrer le serveur de développement :

```bash
npm start
```

L'application sera accessible dans votre navigateur à l'adresse `http://localhost:3000`.

## Structure du Projet

```
.
├── public/                 # Fichiers statiques (index.html, images, etc.)
├── src/                    # Code source de l'application React
│   ├── components/         # Composants React réutilisables
│   │   ├── About.js        # Section "À propos de moi"
│   │   ├── Contact.js      # Section "Contact"
│   │   ├── ProjectCard.js  # Carte individuelle de projet
│   │   ├── ProjectList.js  # Liste des projets
│   │   ├── ProjectModal.js # Modale de détails de projet
│   │   └── Skills.js       # Section "Compétences"
│   ├── data/               # Données statiques (ex: projets.json)
│   │   └── projects.json
│   ├── App.js              # Composant principal de l'application
│   ├── App.css             # Styles globaux de l'application
│   ├── index.js            # Point d'entrée de l'application
│   └── index.css           # Styles de base et variables de thème
├── package.json            # Métadonnées du projet et dépendances
├── package-lock.json       # Verrouillage des versions des dépendances
└── README.md               # Ce fichier
```

## Personnalisation

N'oubliez pas de remplacer les informations génériques (votre nom, vos projets, vos liens sociaux, votre photo) par les vôtres. Les fichiers clés à modifier sont :
*   `src/components/About.js`
*   `src/components/Skills.js`
*   `src/components/Contact.js`
*   `src/data/projects.json`
*   Le pied de page dans `src/App.js`
*   L'avatar dans l'en-tête dans `src/App.js`

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. (Si vous avez un fichier LICENSE, sinon, vous pouvez l'omettre ou choisir une autre licence).

## Contact

Pour toute question ou collaboration, n'hésitez pas à me contacter :

*   **Votre Nom :** [Votre Nom et Prénom]
*   **Email :** [votre.email@example.com]
*   **LinkedIn :** [Lien vers votre profil LinkedIn]
*   **GitHub :** [Lien vers votre profil GitHub]
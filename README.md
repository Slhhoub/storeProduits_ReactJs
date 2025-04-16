✅ Fonctionnalités réalisées dans mon projet React :

🔄 Récupération des données depuis une API
J’ai utilisé la méthode fetch() pour appeler une API REST et récupérer une liste de produits.
Pour gérer les appels asynchrones, j’ai utilisé les mots-clés async et await.

🧠 Utilisation des Hooks React

useState m’a permis de gérer l’état de l’application, comme la liste des produits ou la pagination.

useEffect m’a servi à exécuter du code au chargement du composant, notamment pour appeler l’API.

📦 Utilisation de bibliothèques externes
J’ai intégré react-toastify afin d’afficher des notifications visuelles lors d’actions comme :

la suppression d’un produit,

l’ajout ou la modification.

📩 Passage de données via les props
J’ai utilisé les props pour transmettre des données entre composants, ce qui montre que je maîtrise la communication entre les composants React.

🧮 Mise en place d’une pagination

J’ai divisé les produits en plusieurs pages.

J’ai calculé dynamiquement le nombre total de pages avec Math.ceil().

J’ai généré la liste des pages avec Array.from() et mis en place les boutons Previous, Next et la sélection directe d’une page.

🗑️ Suppression dynamique avec mise à jour de l’état
Quand un produit est supprimé :

Je mets à jour l’état de la liste des produits,

Je recalcule les produits affichés,

Et j’ajuste automatiquement la pagination si nécessaire.
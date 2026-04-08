// blogCategories.jsx (Server Component)

const blogCategories = [
  {
    id: "taxi",
    label: "Transferts & Déplacements",
    description: "Trajets, tarifs, transferts aéroport, taxi conventionné, longues distances et services de transport.",
    icon: "Car",
    color: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      hover: "hover:bg-blue-100",
    },
    // Mapping des catégories d'articles vers cette catégorie
    articleCategories: [
      "Transferts Aéroport",
      "Taxi",
      "Transport",
    ],
  },
  {
    id: "voyage",
    label: "Découvertes & Activités",
    description: "Destinations, activités, plages, visites, Provence, idées de sorties et découvertes.",
    icon: "Compass",
    color: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      text: "text-pink-700",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      hover: "hover:bg-pink-100",
    },
    articleCategories: ["Tourisme", "Voyage & Tourisme", "Excursions", "Découvertes"],
  },
  {
    id: "local",
    label: "Marseille & Actualités",
    description: "Actualités de la ville, entreprises locales, artisans, restaurants, événements et nouveautés.",
    icon: "Building2",
    color: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      hover: "hover:bg-green-100",
    },
    articleCategories: ["Partenaires", "Actualités", "Entreprises", "Vie locale & Entreprises", "Marseille & Actualités"],
  },
  {
    id: "sante",
    label: "Services & Accessibilité",
    description: "Centres de santé, mobilité réduite, taxi conventionné, accessibilité, hôpitaux et services liés à la santé.",
    icon: "Heart",
    color: {
      bg: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-700",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      hover: "hover:bg-rose-100",
    },
    articleCategories: ["Santé", "Mobilité", "VSL"],
  },
  {
    id: "guides",
    label: "Conseils & Astuces",
    description: "Conseils pour voyager, checklists, organisation, sécurité, astuces et guides pratiques.",
    icon: "BookOpen",
    color: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      hover: "hover:bg-purple-100",
    },
    articleCategories: [
      "Guides",
      "Guides Pratiques",
      "Guide Pratique",
      "Conseils",
      "Conseils Pratiques",
      "Lifestyle",
      "Astuces",
    ],
  },
];

// Fonction pour obtenir l'ID de catégorie à partir de la catégorie d'un article
export function getCategoryIdFromArticleCategory(articleCategory) {
  const category = blogCategories.find((cat) =>
    cat.articleCategories.includes(articleCategory)
  );
  return category ? category.id : null;
}

// Fonction pour obtenir la catégorie à partir de son ID
export function getCategoryById(categoryId) {
  return blogCategories.find((cat) => cat.id === categoryId) || null;
}

export default blogCategories;


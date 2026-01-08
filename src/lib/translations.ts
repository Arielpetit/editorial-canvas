export type Language = "en" | "fr";

export const translations = {
  en: {
    // Navbar
    about: "About",
    contact: "Contact",
    elements: "Elements",
    pages: "Pages",
    blog: "Blog",
    gallery: "Gallery",
    archive: "Archive",
    search: "Search",
    toggleTheme: "Toggle theme",
    menu: "Menu",
    
    // Hero
    heroGreeting: "Hi, I'm Victoria Nayda.",
    heroTitle: "Designer, Illustrator",
    heroDescription: "I craft beautiful digital experiences with a focus on clean design and thoughtful interactions. Welcome to my creative corner where I share my thoughts on design, lifestyle, and everything in between.",
    heroCta: "Explore Posts",
    
    // Sections
    featuredPosts: "Featured Posts",
    previousPosts: "Previous Posts",
    popularTopics: "Popular Topics",
    recentPosts: "Recent Posts",
    
    // Blog Post
    tableOfContents: "Table of Contents",
    readingTime: "min read",
    sharePost: "Share this post",
    relatedPosts: "Related Posts",
    backToBlog: "Back to Blog",
    
    // Search
    searchPlaceholder: "Search posts...",
    noResults: "No posts found",
    searchResults: "Search Results",
    
    // Footer
    allRightsReserved: "All rights reserved",
    subscribe: "Subscribe",
    newsletterTitle: "Newsletter",
    newsletterDescription: "Subscribe to get the latest posts delivered to your inbox.",
    emailPlaceholder: "Enter your email",
    
    // Pagination
    prev: "Prev",
    next: "Next",
    page: "Page",
    
    // Language
    language: "Language",
    english: "English",
    french: "French",
  },
  fr: {
    // Navbar
    about: "À propos",
    contact: "Contact",
    elements: "Éléments",
    pages: "Pages",
    blog: "Blog",
    gallery: "Galerie",
    archive: "Archives",
    search: "Rechercher",
    toggleTheme: "Changer le thème",
    menu: "Menu",
    
    // Hero
    heroGreeting: "Bonjour, je suis Victoria Nayda.",
    heroTitle: "Designer, Illustratrice",
    heroDescription: "Je crée de belles expériences numériques avec un accent sur le design épuré et les interactions réfléchies. Bienvenue dans mon coin créatif où je partage mes réflexions sur le design, le style de vie et tout le reste.",
    heroCta: "Explorer les Articles",
    
    // Sections
    featuredPosts: "Articles en Vedette",
    previousPosts: "Articles Précédents",
    popularTopics: "Sujets Populaires",
    recentPosts: "Articles Récents",
    
    // Blog Post
    tableOfContents: "Table des Matières",
    readingTime: "min de lecture",
    sharePost: "Partager cet article",
    relatedPosts: "Articles Connexes",
    backToBlog: "Retour au Blog",
    
    // Search
    searchPlaceholder: "Rechercher des articles...",
    noResults: "Aucun article trouvé",
    searchResults: "Résultats de Recherche",
    
    // Footer
    allRightsReserved: "Tous droits réservés",
    subscribe: "S'abonner",
    newsletterTitle: "Newsletter",
    newsletterDescription: "Abonnez-vous pour recevoir les derniers articles dans votre boîte mail.",
    emailPlaceholder: "Entrez votre email",
    
    // Pagination
    prev: "Préc",
    next: "Suiv",
    page: "Page",
    
    // Language
    language: "Langue",
    english: "Anglais",
    french: "Français",
  },
};

export const getTranslation = (lang: Language, key: keyof typeof translations.en): string => {
  return translations[lang][key] || translations.en[key];
};

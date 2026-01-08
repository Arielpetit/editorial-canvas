import blogSpices from "@/assets/blog-spices.jpg";
import blogPerson from "@/assets/blog-person.jpg";
import blogFamily from "@/assets/blog-family.jpg";
import blogInterior from "@/assets/blog-interior.jpg";
import blogAutumn from "@/assets/blog-autumn.jpg";
import blogGarden from "@/assets/blog-garden.jpg";
import blogHobby from "@/assets/blog-hobby.jpg";
import blogKitchen from "@/assets/blog-kitchen.jpg";

export interface BlogPost {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  excerpt: {
    en: string;
    fr: string;
  };
  content: {
    en: string;
    fr: string;
  };
  coverImage: string;
  author: string;
  date: string;
  tags: string[];
  readingTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: {
      en: "What you do speaks so loudly that I cannot hear what you say",
      fr: "Ce que vous faites parle si fort que je ne peux pas entendre ce que vous dites",
    },
    excerpt: {
      en: "Actions speak louder than words. In this post, we explore how our daily actions define who we truly are.",
      fr: "Les actions parlent plus fort que les mots. Dans cet article, nous explorons comment nos actions quotidiennes définissent qui nous sommes vraiment.",
    },
    content: {
      en: `## Introduction

Actions speak louder than words. This timeless wisdom reminds us that what we do carries more weight than what we say. In today's world of endless promises and grandiose statements, it's the consistent actions that truly define our character.

## The Power of Consistent Action

When we observe successful people, we notice a pattern of consistent behavior. They don't just talk about their goals; they work towards them every single day. This is the essence of the quote - your actions are a direct reflection of your values and priorities.

### Building Trust Through Actions

Trust is built over time through repeated demonstrations of reliability. When you:

- Follow through on commitments
- Show up when you say you will
- Deliver on your promises

You're speaking volumes without saying a word.

## Practical Applications

In our daily lives, we can apply this principle by:

1. **Setting clear intentions** - Know what you want to achieve
2. **Taking small steps** - Consistent small actions compound over time
3. **Being accountable** - Own your actions, both good and bad

## Conclusion

Remember, people will remember what you did long after they forget what you said. Make your actions count, and let them speak for you.

> "Well done is better than well said." - Benjamin Franklin`,
      fr: `## Introduction

Les actions parlent plus fort que les mots. Cette sagesse intemporelle nous rappelle que ce que nous faisons a plus de poids que ce que nous disons. Dans le monde d'aujourd'hui, plein de promesses sans fin et de déclarations grandioses, ce sont les actions cohérentes qui définissent vraiment notre caractère.

## Le Pouvoir de l'Action Cohérente

Quand nous observons les personnes qui réussissent, nous remarquons un modèle de comportement cohérent. Ils ne parlent pas seulement de leurs objectifs; ils y travaillent chaque jour. C'est l'essence de cette citation - vos actions sont un reflet direct de vos valeurs et priorités.

### Construire la Confiance par les Actions

La confiance se construit au fil du temps par des démonstrations répétées de fiabilité. Quand vous:

- Tenez vos engagements
- Êtes présent quand vous le dites
- Livrez ce que vous promettez

Vous communiquez énormément sans dire un mot.

## Applications Pratiques

Dans notre vie quotidienne, nous pouvons appliquer ce principe en:

1. **Définissant des intentions claires** - Sachez ce que vous voulez accomplir
2. **Faisant de petits pas** - Les petites actions cohérentes s'accumulent avec le temps
3. **Étant responsable** - Assumez vos actions, bonnes et mauvaises

## Conclusion

Souvenez-vous, les gens se souviendront de ce que vous avez fait longtemps après avoir oublié ce que vous avez dit. Faites compter vos actions et laissez-les parler pour vous.

> "Bien fait vaut mieux que bien dit." - Benjamin Franklin`,
    },
    coverImage: blogSpices,
    author: "Victoria Nayda",
    date: "7 Nov, 2022",
    tags: ["Workflow", "Hobby"],
    readingTime: 5,
  },
  {
    id: "2",
    title: {
      en: "Remember that happiness is a way of travel, not a destination",
      fr: "Rappelez-vous que le bonheur est un voyage, pas une destination",
    },
    excerpt: {
      en: "Happiness isn't a place you arrive at, but rather how you experience the journey of life itself.",
      fr: "Le bonheur n'est pas un endroit où l'on arrive, mais plutôt la façon dont on vit le voyage de la vie.",
    },
    content: {
      en: `## The Journey Mindset

Many of us spend our lives chasing happiness as if it were a destination. We think, "I'll be happy when I get that promotion," or "I'll be happy when I find the right partner." But what if happiness isn't a place we arrive at, but a way of traveling?

## Embracing the Present

The secret to happiness lies in embracing each moment of the journey:

- **Appreciate small victories** - Celebrate the little wins along the way
- **Find joy in the process** - The work itself can be fulfilling
- **Stay curious** - Every day offers opportunities to learn and grow

### The Problem with "When I..."

When we constantly defer happiness to some future milestone, we miss the beauty of the present moment. Life happens now, not when we reach some imaginary finish line.

## Practical Steps

To cultivate happiness as a way of travel:

1. Start a gratitude practice
2. Engage fully in whatever you're doing
3. Connect meaningfully with others
4. Take time to reflect on your growth

## Conclusion

Stop waiting for happiness to arrive. Start finding it in the journey itself. Each step, each challenge, each moment of growth is an opportunity for joy.`,
      fr: `## L'État d'Esprit du Voyage

Beaucoup d'entre nous passent leur vie à poursuivre le bonheur comme si c'était une destination. Nous pensons: "Je serai heureux quand j'aurai cette promotion" ou "Je serai heureux quand je trouverai le bon partenaire." Mais si le bonheur n'était pas un endroit où l'on arrive, mais une façon de voyager?

## Embrasser le Présent

Le secret du bonheur réside dans l'acceptation de chaque moment du voyage:

- **Appréciez les petites victoires** - Célébrez les petites réussites en cours de route
- **Trouvez la joie dans le processus** - Le travail lui-même peut être épanouissant
- **Restez curieux** - Chaque jour offre des opportunités d'apprendre et de grandir

### Le Problème du "Quand Je..."

Quand nous reportons constamment le bonheur à une étape future, nous manquons la beauté du moment présent. La vie se passe maintenant, pas quand nous atteignons une ligne d'arrivée imaginaire.

## Étapes Pratiques

Pour cultiver le bonheur comme façon de voyager:

1. Commencez une pratique de gratitude
2. Engagez-vous pleinement dans ce que vous faites
3. Connectez-vous de manière significative avec les autres
4. Prenez le temps de réfléchir à votre croissance

## Conclusion

Arrêtez d'attendre que le bonheur arrive. Commencez à le trouver dans le voyage lui-même. Chaque pas, chaque défi, chaque moment de croissance est une opportunité de joie.`,
    },
    coverImage: blogPerson,
    author: "Victoria Nayda",
    date: "24 Apr, 2022",
    tags: ["Story", "Lifestyle"],
    readingTime: 4,
  },
  {
    id: "3",
    title: {
      en: "If you cannot do great things, do small things in a great way",
      fr: "Si vous ne pouvez pas faire de grandes choses, faites de petites choses de façon grandiose",
    },
    excerpt: {
      en: "Greatness isn't always about grand gestures. Sometimes it's about doing ordinary things with extraordinary care.",
      fr: "La grandeur n'est pas toujours une question de grands gestes. Parfois, c'est faire des choses ordinaires avec un soin extraordinaire.",
    },
    content: {
      en: `## The Art of Small Things

Not everyone gets the opportunity to change the world in dramatic ways. But everyone can make a difference by doing small things exceptionally well.

## Excellence in the Everyday

Consider how these small acts can have big impacts:

- A handwritten note of appreciation
- A perfectly prepared meal for loved ones
- A task completed with full attention and care
- A kind word at the right moment

### The Compound Effect

Small things done well, repeatedly, compound over time into something significant. This is how reputations are built, relationships are strengthened, and legacies are created.

## Mindset Shift

Instead of waiting for the "big opportunity":

1. **Look at what's in front of you** - What small thing can you do right now?
2. **Give it your full attention** - Quality comes from focus
3. **Take pride in the details** - Details matter more than we think

## Conclusion

Greatness is not about the size of the action, but the heart and intention behind it. Start small, do it well, and watch how it transforms your life and the lives of those around you.`,
      fr: `## L'Art des Petites Choses

Tout le monde n'a pas l'occasion de changer le monde de manière dramatique. Mais chacun peut faire la différence en faisant exceptionnellement bien les petites choses.

## L'Excellence au Quotidien

Considérez comment ces petits actes peuvent avoir de grands impacts:

- Une note de remerciement manuscrite
- Un repas parfaitement préparé pour les êtres chers
- Une tâche accomplie avec toute l'attention et le soin
- Un mot gentil au bon moment

### L'Effet Composé

Les petites choses bien faites, répétées, s'accumulent avec le temps en quelque chose de significatif. C'est ainsi que les réputations se construisent, les relations se renforcent et les héritages se créent.

## Changement de Mentalité

Au lieu d'attendre la "grande opportunité":

1. **Regardez ce qui est devant vous** - Quelle petite chose pouvez-vous faire maintenant?
2. **Donnez-lui toute votre attention** - La qualité vient de la concentration
3. **Soyez fier des détails** - Les détails comptent plus qu'on ne le pense

## Conclusion

La grandeur ne concerne pas la taille de l'action, mais le cœur et l'intention derrière elle. Commencez petit, faites-le bien, et voyez comment cela transforme votre vie et celle de ceux qui vous entourent.`,
    },
    coverImage: blogFamily,
    author: "Victoria Nayda",
    date: "23 Apr, 2022",
    tags: ["Family", "Notes"],
    readingTime: 4,
  },
  {
    id: "4",
    title: {
      en: "A journey of a thousand leagues begins beneath one's feet",
      fr: "Un voyage de mille lieues commence sous ses pieds",
    },
    excerpt: {
      en: "Every great achievement starts with a single step. The key is to begin, no matter how daunting the path ahead may seem.",
      fr: "Chaque grande réalisation commence par un seul pas. La clé est de commencer, peu importe à quel point le chemin semble intimidant.",
    },
    content: {
      en: `## The First Step

This ancient wisdom reminds us that every journey, no matter how long, begins with a single step. The hardest part is often just starting.

## Overcoming the Fear of Beginning

We often hesitate to start because:

- The goal seems too far away
- We're afraid of failure
- We don't feel ready enough
- We're waiting for the perfect moment

### The Truth About Starting

The perfect moment never comes. The only way to begin is to begin. Your first steps don't need to be perfect; they just need to be taken.

## Building Momentum

Once you take that first step:

1. **Celebrate the beginning** - You've already done what most won't
2. **Focus on the next step** - Don't look at the entire journey
3. **Trust the process** - Each step gets you closer
4. **Learn as you go** - You'll figure it out along the way

## Conclusion

Stop waiting. Stop planning endlessly. Take the first step today, and let the journey unfold. Your destination awaits, but it can only be reached by starting from where you stand right now.`,
      fr: `## Le Premier Pas

Cette sagesse ancienne nous rappelle que chaque voyage, peu importe sa longueur, commence par un seul pas. Le plus difficile est souvent de simplement commencer.

## Surmonter la Peur de Commencer

Nous hésitons souvent à commencer parce que:

- L'objectif semble trop loin
- Nous avons peur de l'échec
- Nous ne nous sentons pas assez prêts
- Nous attendons le moment parfait

### La Vérité sur le Commencement

Le moment parfait ne vient jamais. La seule façon de commencer est de commencer. Vos premiers pas n'ont pas besoin d'être parfaits; ils doivent juste être faits.

## Construire l'Élan

Une fois que vous faites ce premier pas:

1. **Célébrez le début** - Vous avez déjà fait ce que la plupart ne feront pas
2. **Concentrez-vous sur l'étape suivante** - Ne regardez pas tout le voyage
3. **Faites confiance au processus** - Chaque pas vous rapproche
4. **Apprenez en chemin** - Vous trouverez la solution en cours de route

## Conclusion

Arrêtez d'attendre. Arrêtez de planifier sans fin. Faites le premier pas aujourd'hui et laissez le voyage se dérouler. Votre destination vous attend, mais elle ne peut être atteinte qu'en partant d'où vous êtes maintenant.`,
    },
    coverImage: blogInterior,
    author: "Victoria Nayda",
    date: "29 Mar, 2022",
    tags: ["Interior", "Design"],
    readingTime: 4,
  },
  {
    id: "5",
    title: {
      en: "The beauty of autumn leaves and changing seasons",
      fr: "La beauté des feuilles d'automne et des saisons changeantes",
    },
    excerpt: {
      en: "Autumn teaches us that letting go can be beautiful. Embracing change is part of nature's wisdom.",
      fr: "L'automne nous enseigne que lâcher prise peut être beau. Accepter le changement fait partie de la sagesse de la nature.",
    },
    content: {
      en: `## Lessons from Autumn

There's something magical about watching leaves change colors and fall. Nature shows us that letting go can be one of the most beautiful processes.

## Embracing Change

Just like trees release their leaves:

- We must let go of what no longer serves us
- Change creates space for new growth
- Every ending is also a beginning

## The Beauty in Transition

The most vibrant colors appear during transition. Perhaps our most beautiful moments come when we're in the process of becoming something new.

## Conclusion

Learn from the trees. Stand tall, but know when to let go. Trust that new growth will come in its season.`,
      fr: `## Leçons de l'Automne

Il y a quelque chose de magique à regarder les feuilles changer de couleur et tomber. La nature nous montre que lâcher prise peut être l'un des processus les plus beaux.

## Accepter le Changement

Tout comme les arbres libèrent leurs feuilles:

- Nous devons lâcher ce qui ne nous sert plus
- Le changement crée de l'espace pour une nouvelle croissance
- Chaque fin est aussi un début

## La Beauté dans la Transition

Les couleurs les plus vibrantes apparaissent pendant la transition. Peut-être que nos plus beaux moments viennent quand nous sommes en train de devenir quelque chose de nouveau.

## Conclusion

Apprenez des arbres. Tenez-vous droit, mais sachez quand lâcher prise. Ayez confiance qu'une nouvelle croissance viendra en son temps.`,
    },
    coverImage: blogAutumn,
    author: "Victoria Nayda",
    date: "15 Oct, 2022",
    tags: ["Nature", "Lifestyle"],
    readingTime: 3,
  },
  {
    id: "6",
    title: {
      en: "Creating a peaceful garden sanctuary",
      fr: "Créer un sanctuaire de jardin paisible",
    },
    excerpt: {
      en: "How to transform your outdoor space into a tranquil retreat for relaxation and reflection.",
      fr: "Comment transformer votre espace extérieur en un refuge tranquille pour la détente et la réflexion.",
    },
    content: {
      en: `## Your Personal Retreat

A garden can be more than just plants. It can be a sanctuary for the soul, a place to disconnect and recharge.

## Essential Elements

Creating a peaceful garden includes:

- Natural water features for soothing sounds
- Comfortable seating for contemplation
- Native plants that attract wildlife
- Paths that encourage slow wandering

## The Therapeutic Benefits

Spending time in nature has proven mental health benefits. Your garden can become your personal therapy space.

## Conclusion

Start small. A single peaceful corner can transform your daily experience of home.`,
      fr: `## Votre Refuge Personnel

Un jardin peut être plus que des plantes. Il peut être un sanctuaire pour l'âme, un endroit pour se déconnecter et se ressourcer.

## Éléments Essentiels

Créer un jardin paisible comprend:

- Des fontaines naturelles pour des sons apaisants
- Des sièges confortables pour la contemplation
- Des plantes indigènes qui attirent la faune
- Des sentiers qui encouragent la promenade lente

## Les Bienfaits Thérapeutiques

Passer du temps dans la nature a des bienfaits prouvés pour la santé mentale. Votre jardin peut devenir votre espace de thérapie personnel.

## Conclusion

Commencez petit. Un seul coin paisible peut transformer votre expérience quotidienne de la maison.`,
    },
    coverImage: blogGarden,
    author: "Victoria Nayda",
    date: "8 Sep, 2022",
    tags: ["Garden", "Wellness"],
    readingTime: 3,
  },
  {
    id: "7",
    title: {
      en: "Finding joy in creative hobbies",
      fr: "Trouver la joie dans les loisirs créatifs",
    },
    excerpt: {
      en: "Why creative pursuits are essential for mental well-being and personal fulfillment.",
      fr: "Pourquoi les activités créatives sont essentielles pour le bien-être mental et l'épanouissement personnel.",
    },
    content: {
      en: `## The Creative Life

In our busy world, creative hobbies often take a backseat. But they're essential for a fulfilled life.

## Benefits of Creative Pursuits

Creating things brings:

- A sense of accomplishment
- Stress relief through flow states
- New perspectives on problems
- Connection with like-minded people

## Getting Started

You don't need to be talented to be creative. Just start making something, anything. The joy is in the process.

## Conclusion

Make time for creativity. It's not a luxury; it's a necessity for a balanced life.`,
      fr: `## La Vie Créative

Dans notre monde occupé, les loisirs créatifs passent souvent au second plan. Mais ils sont essentiels pour une vie épanouie.

## Bienfaits des Activités Créatives

Créer des choses apporte:

- Un sentiment d'accomplissement
- Un soulagement du stress par les états de flow
- De nouvelles perspectives sur les problèmes
- Une connexion avec des personnes partageant les mêmes idées

## Commencer

Vous n'avez pas besoin d'être talentueux pour être créatif. Commencez simplement à faire quelque chose, n'importe quoi. La joie est dans le processus.

## Conclusion

Faites du temps pour la créativité. Ce n'est pas un luxe; c'est une nécessité pour une vie équilibrée.`,
    },
    coverImage: blogHobby,
    author: "Victoria Nayda",
    date: "20 Aug, 2022",
    tags: ["Hobby", "Creativity"],
    readingTime: 3,
  },
  {
    id: "8",
    title: {
      en: "The heart of the home: kitchen design essentials",
      fr: "Le cœur de la maison: les essentiels du design de cuisine",
    },
    excerpt: {
      en: "How to create a kitchen that's both functional and beautiful, the true heart of any home.",
      fr: "Comment créer une cuisine à la fois fonctionnelle et belle, le vrai cœur de toute maison.",
    },
    content: {
      en: `## The Kitchen as Heart

The kitchen has always been the gathering place of homes. How can we design it to serve both function and connection?

## Key Principles

A great kitchen includes:

- Efficient workflow with the work triangle
- Quality materials that age well
- Good lighting for different tasks
- Space for people to gather

## Balancing Form and Function

The best kitchens don't sacrifice beauty for utility or vice versa. Both can coexist harmoniously.

## Conclusion

Design your kitchen for life, not just for cooking. It's where memories are made.`,
      fr: `## La Cuisine comme Cœur

La cuisine a toujours été le lieu de rassemblement des maisons. Comment pouvons-nous la concevoir pour servir à la fois la fonction et la connexion?

## Principes Clés

Une grande cuisine comprend:

- Un flux de travail efficace avec le triangle de travail
- Des matériaux de qualité qui vieillissent bien
- Un bon éclairage pour différentes tâches
- De l'espace pour que les gens se rassemblent

## Équilibrer Forme et Fonction

Les meilleures cuisines ne sacrifient pas la beauté pour l'utilité ou vice versa. Les deux peuvent coexister harmonieusement.

## Conclusion

Concevez votre cuisine pour la vie, pas seulement pour cuisiner. C'est là que les souvenirs se créent.`,
    },
    coverImage: blogKitchen,
    author: "Victoria Nayda",
    date: "5 Jul, 2022",
    tags: ["Kitchen", "Interior"],
    readingTime: 4,
  },
];

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id);
};

export const searchPosts = (query: string, lang: "en" | "fr"): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title[lang].toLowerCase().includes(lowercaseQuery) ||
      post.excerpt[lang].toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getRelatedPosts = (currentId: string, tags: string[]): BlogPost[] => {
  return blogPosts
    .filter((post) => post.id !== currentId && post.tags.some((tag) => tags.includes(tag)))
    .slice(0, 3);
};

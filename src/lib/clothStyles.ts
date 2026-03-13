export type ClothStyleCategory =
  | "Streetwear"
  | "Traditional"
  | "Formal"
  | "Casual"
  | "Bridal"
  | "Kids";

export type ClothStyle = {
  slug: string;
  name: string;
  category: ClothStyleCategory;
  tagline: string;
  description: string;
  colorPalette: string[];
  fabrics: string[];
  occasions: string[];
};

export const clothStyles: ClothStyle[] = [
  {
    slug: "kitenge-modern-cut",
    name: "Kitenge Modern Cut",
    category: "Traditional",
    tagline: "Bold prints with a clean contemporary silhouette.",
    description:
      "A modern take on classic kitenge—structured lines, tailored comfort, and vibrant patterns that feel premium. Great for brand shoots and statement looks.",
    colorPalette: ["Indigo", "Gold", "Cream", "Onyx"],
    fabrics: ["Cotton wax print", "Lining (optional)"],
    occasions: ["Events", "Brand campaigns", "Weekend"],
  },
  {
    slug: "streetwear-utility-set",
    name: "Streetwear Utility Set",
    category: "Streetwear",
    tagline: "Functional layers for everyday city style.",
    description:
      "A utility-inspired fit with pockets and structured panels. Designed for creators, teams, and brands that want a bold but wearable identity.",
    colorPalette: ["Charcoal", "Olive", "Sand"],
    fabrics: ["Twill", "Ripstop"],
    occasions: ["Daily wear", "Content creation", "Team uniforms"],
  },
  {
    slug: "minimal-formal-suit",
    name: "Minimal Formal Suit",
    category: "Formal",
    tagline: "Sharp tailoring for confident, clean branding.",
    description:
      "A refined suit concept with a minimal aesthetic—perfect for founders, formal occasions, and timeless brand imagery.",
    colorPalette: ["Midnight", "Stone", "White"],
    fabrics: ["Wool blend", "Cotton shirt"],
    occasions: ["Corporate", "Weddings", "Photoshoots"],
  },
  {
    slug: "smart-casual-linen",
    name: "Smart Casual Linen",
    category: "Casual",
    tagline: "Breathable, effortless, and camera-ready.",
    description:
      "Linen-based silhouettes that look premium in natural light. Ideal for warm weather collections and lifestyle branding.",
    colorPalette: ["Ivory", "Clay", "Sage"],
    fabrics: ["Linen", "Cotton"],
    occasions: ["Brunch", "Travel", "Summer drops"],
  },
  {
    slug: "bridal-luxe-gown",
    name: "Bridal Luxe Gown",
    category: "Bridal",
    tagline: "Elegant details with a luxury finish.",
    description:
      "A bridal concept focused on texture, drape, and intricate finishing. Built for unforgettable ceremonies and premium editorial work.",
    colorPalette: ["Pearl", "Rose", "Champagne"],
    fabrics: ["Satin", "Organza", "Lace"],
    occasions: ["Weddings", "Editorial", "Runway"],
  },
  {
    slug: "kids-playful-set",
    name: "Kids Playful Set",
    category: "Kids",
    tagline: "Soft, durable styles for active days.",
    description:
      "Comfort-first design with playful color blocking. Great for family branding, seasonal kids collections, and matching sets.",
    colorPalette: ["Sky", "Sun", "Mint"],
    fabrics: ["Cotton jersey", "Fleece"],
    occasions: ["School", "Play", "Family shoots"],
  },
];

export function getClothStyleBySlug(slug: string): ClothStyle | undefined {
  return clothStyles.find((s) => s.slug === slug);
}

export const clothStyleCategories: ClothStyleCategory[] = [
  "Streetwear",
  "Traditional",
  "Formal",
  "Casual",
  "Bridal",
  "Kids",
];


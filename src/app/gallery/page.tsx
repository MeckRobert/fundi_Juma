"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the image type interface
interface GalleryImage {
  id: number;
  title: string;
  category: string;
  subcategory: string;
  imageUrl: string;
  description: string;
  color: string;
  occasion: string;
}

// Gallery categories
const categories = [
  { id: "all", name: "All Styles", count: 24 },
  { id: "pre-wedding", name: "Pre-Wedding", count: 8 },
  { id: "wedding", name: "Wedding", count: 6 },
  { id: "special-events", name: "Special Events", count: 5 },
  { id: "traditional", name: "Traditional", count: 5 },
];

// Gallery images data - typed as GalleryImage[]
const galleryImages: GalleryImage[] = [
  // Pre-Wedding Collection
  {
    id: 1,
    title: "Romantic Linen Maxi",
    category: "pre-wedding",
    subcategory: "Linen",
    imageUrl: "/images/6.jpeg",
    description: "Breathable linen dress in soft peach",
    color: "Peach",
    occasion: "Engagement Shoot"
  },
  {
    id: 2,
    title: "Pastel Lilac Dream",
    category: "pre-wedding",
    subcategory: "Pastel",
    imageUrl: "/images/7.jpeg",
    description: "Flowing lilac dress for outdoor shoots",
    color: "Lilac",
    occasion: "Pre-Wedding Shoot"
  },
  {
    id: 3,
    title: "Mint Green Elegance",
    category: "pre-wedding",
    subcategory: "Pastel",
    imageUrl: "/images/8.jpeg",
    description: "Fresh mint green with delicate details",
    color: "Mint",
    occasion: "Engagement"
  },
  {
    id: 4,
    title: "Coordinated Couple Set",
    category: "pre-wedding",
    subcategory: "Couple",
    imageUrl: "/images/18.jpeg",
    description: "Matching outfits for couple shoots",
    color: "Cream",
    occasion: "Couple Shoot"
  },

  // Wedding Collection
  {
    id: 5,
    title: "Romantic Chiffon Gown",
    category: "wedding",
    subcategory: "Soft Romance",
    imageUrl: "/images/16.jpeg",
    description: "Lightweight chiffon with layered transparency",
    color: "Ivory",
    occasion: "Wedding Ceremony"
  },
  {
    id: 6,
    title: "Victorian Portrait Neckline",
    category: "wedding",
    subcategory: "Historical",
    imageUrl: "/images/15.jpeg",
    description: "Elegant Victorian-inspired sleeves",
    color: "Champagne",
    occasion: "Wedding"
  },
  {
    id: 7,
    title: "3D Floral Appliqué",
    category: "wedding",
    subcategory: "Statement",
    imageUrl: "/images/4.jpeg",
    description: "Hand-sewn 3D floral details",
    color: "Blush",
    occasion: "Wedding"
  },
  {
    id: 8,
    title: "Dramatic Volume Gown",
    category: "wedding",
    subcategory: "Statement",
    imageUrl: "/images/12.jpeg",
    description: "Oversized bow and dramatic silhouette",
    color: "Ivory",
    occasion: "Wedding Reception"
  },
  {
    id: 9,
    title: "Champagne Ball Gown",
    category: "wedding",
    subcategory: "Warm Tones",
    imageUrl: "/images/2.jpeg",
    description: "Warm champagne with subtle shimmer",
    color: "Champagne",
    occasion: "Wedding"
  },
  {
    id: 10,
    title: "Transformable Skirt Dress",
    category: "wedding",
    subcategory: "Versatile",
    imageUrl: "/images/9.jpeg",
    description: "Detachable skirt for two-in-one look",
    color: "Blush",
    occasion: "Ceremony & Reception"
  },

  // Special Events Collection
  {
    id: 11,
    title: "Cape Dress - Old Hollywood",
    category: "special-events",
    subcategory: "Guest",
    imageUrl: "/images/9.jpeg",
    description: "Elegant cape detail for glamorous events",
    color: "Navy",
    occasion: "Wedding Guest"
  },
  {
    id: 12,
    title: "1920s Drop Waist",
    category: "special-events",
    subcategory: "Guest",
    imageUrl: "/images/19.jpeg",
    description: "Vintage-inspired drop waist silhouette",
    color: "Sage Green",
    occasion: "Wedding Guest"
  },
  {
    id: 13,
    title: "Mother of Bride - A-Line",
    category: "special-events",
    subcategory: "Mother",
    imageUrl: "/images/17.jpeg",
    description: "Comfortable A-line with matching jacket",
    color: "Navy",
    occasion: "Mother of Bride"
  },
  {
    id: 14,
    title: "Elegant Tea-Length Dress",
    category: "special-events",
    subcategory: "Mother",
    imageUrl: "/images/22.jpeg",
    description: "Sophisticated tea-length with soft florals",
    color: "Dusty Rose",
    occasion: "Mother of Groom"
  },
  {
    id: 15,
    title: "Silk Evening Gown",
    category: "special-events",
    subcategory: "Formal",
    imageUrl: "/images/25.jpeg",
    description: "Luxury silk with illusion neckline",
    color: "Black",
    occasion: "Formal Event"
  },

  // Traditional Collection
  {
    id: 16,
    title: "Modern Kaftan",
    category: "traditional",
    subcategory: "Contemporary",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Traditional silhouette with modern details",
    color: "Gold",
    occasion: "Cultural Ceremony"
  },
  {
    id: 17,
    title: "Embroidered Ensemble",
    category: "traditional",
    subcategory: "Handcrafted",
    imageUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Hand-embroidered traditional wear",
    color: "Burgundy",
    occasion: "Traditional Wedding"
  },
  {
    id: 18,
    title: "Contemporary Sari Style",
    category: "traditional",
    subcategory: "Fusion",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Modern take on classic drape",
    color: "Teal",
    occasion: "Fusion Wedding"
  },
  {
    id: 19,
    title: "Beaded Masterpiece",
    category: "traditional",
    subcategory: "Handcrafted",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Intricate beadwork and details",
    color: "Emerald",
    occasion: "Celebration"
  },
  {
    id: 20,
    title: "Royal Heritage Piece",
    category: "traditional",
    subcategory: "Classic",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Rich fabrics and traditional motifs",
    color: "Purple",
    occasion: "Special Occasion"
  },

  // Additional Styles
  {
    id: 21,
    title: "Bohemian Dream",
    category: "pre-wedding",
    subcategory: "Boho",
    imageUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Flowing boho style for outdoor shoots",
    color: "Cream",
    occasion: "Engagement"
  },
  {
    id: 22,
    title: "Minimalist Modern",
    category: "special-events",
    subcategory: "Contemporary",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Clean lines and simple elegance",
    color: "White",
    occasion: "Civil Ceremony"
  },
  {
    id: 23,
    title: "Garden Party Dress",
    category: "special-events",
    subcategory: "Guest",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Perfect for outdoor wedding guests",
    color: "Floral Print",
    occasion: "Garden Wedding"
  },
  {
    id: 24,
    title: "Evening Gala Gown",
    category: "special-events",
    subcategory: "Formal",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Red carpet ready elegance",
    color: "Midnight Blue",
    occasion: "Gala"
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Filter images based on category
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // FIXED: Added type annotation for image parameter
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-r from-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Gallery background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">
              Style Gallery
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Explore our collection of pre-wedding, wedding, and special event styles
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openModal(image)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={image.imageUrl}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mb-3">
                    {image.occasion}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {image.color}
                    </span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {image.subcategory}
                    </span>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  image.category === 'pre-wedding' ? 'bg-pink-500 text-white' :
                  image.category === 'wedding' ? 'bg-amber-500 text-white' :
                  image.category === 'special-events' ? 'bg-purple-500 text-white' :
                  'bg-green-500 text-white'
                }`}>
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            Load More Styles
          </button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-gradient-to-br from-yellow-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black font-serif">
            Featured Collections
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-96 rounded-2xl overflow-hidden group">
              <Image
                src="/images/9.jpeg"
                alt="Pre-wedding"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Pre-Wedding</h3>
                  <p className="text-gray-200 mb-4">8 stunning styles</p>
                  <Link href="/pre-marriage" className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-100">
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden group">
              <Image
                src="/images/16.jpeg"
                alt="Wedding"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Wedding</h3>
                  <p className="text-gray-200 mb-4">6 timeless gowns</p>
                  <Link href="/wedding_dress" className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-100">
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden group">
              <Image
                src="/images/25.jpeg"
                alt="Special Events"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Special Events</h3>
                  <p className="text-gray-200 mb-4">10+ elegant styles</p>
                  <Link href="/special_events" className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-100">
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={closeModal}>
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black transition-colors"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 h-full">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8 overflow-y-auto">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                  selectedImage.category === 'pre-wedding' ? 'bg-pink-500 text-white' :
                  selectedImage.category === 'wedding' ? 'bg-amber-500 text-white' :
                  selectedImage.category === 'special-events' ? 'bg-purple-500 text-white' :
                  'bg-green-500 text-white'
                }`}>
                  {selectedImage.category}
                </span>

                <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif">
                  {selectedImage.title}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {selectedImage.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700 w-24">Occasion:</span>
                    <span className="text-gray-600">{selectedImage.occasion}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700 w-24">Color:</span>
                    <span className="text-gray-600">{selectedImage.color}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700 w-24">Style:</span>
                    <span className="text-gray-600">{selectedImage.subcategory}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/consultation?style=${selectedImage.id}`}
                    className="flex-1 px-6 py-3 bg-black text-white text-center font-semibold rounded-full hover:bg-gray-800 transition"
                  >
                    Book Consultation
                  </Link>
                  <Link
                    href={`/inquiry?style=${selectedImage.id}`}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 text-center font-semibold rounded-full hover:bg-gray-50 transition"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
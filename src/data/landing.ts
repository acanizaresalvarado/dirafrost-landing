import type { FooterColumn, LandingData, LanguageOption, NavLink } from "@/types/landing";

export const landingData: LandingData = {
  meta: {
    title: "Dirafrost Citrus Landing",
    description: "Replica landing experience built in Next.js",
    noIndex: false
  },
  hero: {
    title: "citrus",
    bgImage: "/assets/uploads/2025/01/da36a5f5423d87c3bbf323ff31b7ba18.jpg",
    ctaAnchorId: "products-slider"
  },
  preFooterCta: {
    title: "All citrus products",
    href: "https://www.dirafruitsolutions.com/products/?_product_filter_fruit_type=citrus",
    ariaLabel: "All citrus products"
  },
  products: {
    id: "products",
    title: "Products",
    slides: [
      {
        image: "/assets/uploads/2024/10/DIRA-4023891-Mandarin-Puree-Front_LR-4.png",
        title: "Mandarin puree",
        subtitle: "frozen fruit puree",
        href: "https://www.dirafruitsolutions.com/product/mandarin-puree-04023891/"
      },
      {
        image: "/assets/uploads/2024/10/DIRA-4023841-Lime-Puree-Front_LR-4.png",
        title: "Lime puree",
        subtitle: "frozen fruit puree",
        href: "https://www.dirafruitsolutions.com/product/lime-puree-04023841/"
      },
      {
        image: "/assets/uploads/2024/10/DIRA-4023855-Lemon-Puree-Front_LR-4.png",
        title: "Lemon puree without pulp",
        subtitle: "frozen fruit puree",
        href: "https://www.dirafruitsolutions.com/product/lemon-puree-without-pulp-04023855/"
      }
    ]
  },
  creations: {
    id: "creations",
    title: "Creations",
    slides: [
      {
        image: "/assets/uploads/2024/09/AdobeStock_214609166-Ijsbereiders-uitgeknipt-2-1-2.png",
        title: "Cocktails",
        href: "https://www.dirafruitsolutions.com/creation/cocktails/"
      },
      {
        image: "/assets/uploads/2024/09/AdobeStock_214609166-Ijsbereiders-uitgeknipt-2-1-2.png",
        title: "Ice cream & sorbets",
        href: "https://www.dirafruitsolutions.com/creation/icecream-sorbets/"
      },
      {
        image: "/assets/uploads/2024/09/lady-chef-no-background.png",
        title: "Desserts",
        href: "https://www.dirafruitsolutions.com/creation/desserts/"
      },
      {
        image: "/assets/uploads/2024/11/lemon-3.png",
        title: "Salads",
        href: "https://www.dirafruitsolutions.com/creation/salads/"
      },
      {
        image: "/assets/uploads/2024/09/macaron.png",
        title: "Pastries",
        href: "https://www.dirafruitsolutions.com/creation/pastries/"
      },
      {
        image: "/assets/uploads/2024/12/smoothie-website.png",
        title: "Smoothies",
        href: "https://www.dirafruitsolutions.com/creation/smoothies/"
      }
    ]
  },
  footerCta: {
    title: "All citrus products",
    image: "/assets/uploads/2024/11/lemon-3.png",
    href: "https://www.dirafruitsolutions.com/products/?_product_filter_fruit_type=citrus"
  }
};

export const quote = "We do frozen fruits";

export const mainNav: NavLink[] = [
  { label: "Products", href: "https://www.dirafruitsolutions.com/products/" },
  { label: "Creations", href: "https://www.dirafruitsolutions.com/creations/" },
  { label: "Recipes", href: "https://www.dirafruitsolutions.com/recipes/" },
  { label: "About us", href: "https://www.dirafruitsolutions.com/about/" },
  { label: "Contact us", href: "https://www.dirafruitsolutions.com/contact/" }
];

export const languages: LanguageOption[] = [
  { code: "EN", label: "English", href: "https://www.dirafruitsolutions.com/fruit-type/citrus/" },
  { code: "BG", label: "Български", href: "https://www.dirafruitsolutions.com/bg/fruit-type/citrus-bg/" },
  { code: "CS", label: "Čeština", href: "https://www.dirafruitsolutions.com/cs/fruit-type/citrus-cs/" },
  { code: "DA", label: "Dansk", href: "https://www.dirafruitsolutions.com/da/fruit-type/citrus-da/" },
  { code: "NL", label: "Nederlands", href: "https://www.dirafruitsolutions.com/nl/fruit-type/citrus-nl/" },
  { code: "FR", label: "Français", href: "https://www.dirafruitsolutions.com/fr/fruit-type/citrus-fr/" },
  { code: "DE", label: "Deutsch", href: "https://www.dirafruitsolutions.com/de/fruit-type/citrus-de/" },
  { code: "ES", label: "Español", href: "https://www.dirafruitsolutions.com/es/fruit-type/citrus-es/" }
];

export const sideLinks = {
  left: { label: "About us", href: "https://www.dirafruitsolutions.com/about/" },
  right: { label: "Contact us", href: "https://www.dirafruitsolutions.com/contact/" }
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Our products",
    links: [
      {
        label: "IQF frozen fruit",
        href: "https://www.dirafruitsolutions.com/products/?_product_filter_product_types=iqf-frozen-fruit"
      },
      {
        label: "Frozen fruit puree",
        href: "https://www.dirafruitsolutions.com/products/?_product_filter_product_types=frozen-fruit-puree"
      },
      {
        label: "Frozen fruit coulis",
        href: "https://www.dirafruitsolutions.com/products/?_product_filter_product_types=frozen-fruit-coulis"
      }
    ]
  },
  {
    title: "Our creations",
    links: [
      { label: "Pastries", href: "https://www.dirafruitsolutions.com/creation/pastries/" },
      { label: "Desserts", href: "https://www.dirafruitsolutions.com/creation/desserts/" },
      { label: "Cocktails", href: "https://www.dirafruitsolutions.com/creation/cocktails/" },
      { label: "Smoothies", href: "https://www.dirafruitsolutions.com/creation/smoothies/" },
      {
        label: "Ice cream & sorbets",
        href: "https://www.dirafruitsolutions.com/creation/icecream-sorbets/"
      },
      { label: "Salads", href: "https://www.dirafruitsolutions.com/creation/salads/" }
    ]
  }
];

export const contactHtml = [
  "+32 (0) 13 55 27 01",
  "info@dirafrost.be",
  "Klaverbladstraat 11",
  "3560 Lummen, Belgium"
];

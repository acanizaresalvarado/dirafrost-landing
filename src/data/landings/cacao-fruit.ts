import type { ProductLandingData } from "@/types/landing";

export const cacaoFruitLandingData: ProductLandingData = {
  meta: {
    title: "Dira Fruit Solutions | Cacao Fruit",
    description:
      "100% Fruit. Zero Compromise. Discover the exotic taste of real cacao fruit, naturally sweet and now available as frozen puree.",
    robots: {
      index: false,
      follow: false
    }
  },
  branding: {
    linkHref: "https://www.dirafruitsolutions.com",
    label: "Dira Fruit Solutions",
    logoSrc: "/assets/cacao-fruit/dira-logo.jpg",
    logoAlt: "Dira Fruit Solutions"
  },
  quote: "Dira Fruit Solutions",
  chrome: {
    quoteBehavior: "hero-only",
    headerVariant: "reference",
    searchPlaceholder: "SEARCH...",
    showSearch: false,
    showMenu: false
  },
  hero: {
    eyebrow: "New Product Launch",
    titlePrimary: "Cacao",
    titleSecondary: "Fruit",
    headline: "100% Fruit. Zero Compromise.",
    body: "Discover the exotic taste of real cacao fruit — naturally sweet, incredibly versatile, and now available as a perfectly ripened frozen puree. No added sugar. Just pure, tropical deliciousness.",
    primaryCtaLabel: "Get Your Free Sample",
    secondaryCtaLabel: "Learn More",
    primaryCtaTarget: "sample-request",
    secondaryCtaTarget: "meet-the-fruit",
    backgroundImage: "/assets/cacao-fruit/hero-cacao-pod.png"
  },
  imageStrip: [
    {
      src: "/assets/cacao-fruit/hero-cacao-pod.png",
      alt: "Fresh cacao fruit pod",
      caption: "Fresh cacao fruit pod"
    },
    {
      src: "/assets/cacao-fruit/hero-cacao-arrangement.png",
      alt: "Cacao, passion fruit and mango arrangement",
      caption: "Cacao, passion fruit and mango arrangement"
    },
    {
      src: "/assets/cacao-fruit/hero-cacao-exotic.png",
      alt: "Exotic tropical fruits with cacao",
      caption: "Exotic tropical fruits with cacao"
    }
  ],
  meetSection: {
    id: "meet-the-fruit",
    eyebrow: "Meet The Fruit",
    title: "Ever Tasted A Cacao Fruit?",
    body: [
      "Most people know cacao only for its beans — the source of chocolate. But the fruit surrounding those beans? That's the real hidden gem. Sweet, tangy, and bursting with tropical flavour.",
      "Dira Fruit Solutions captures that magic at the peak of ripeness, flash-freezing it into a smooth, versatile puree. Perfect for smoothies, desserts, cocktails, ice cream, sorbets and so much more.",
      "100% fruit. No added sugar. No preservatives. Just the pure taste of nature's best-kept secret."
    ]
  },
  benefits: {
    eyebrow: "Why Choose Cacao Fruit Puree",
    title: "Pure Goodness, Endless Possibilities",
    items: [
      {
        title: "100% Natural Fruit",
        body: "Nothing but real cacao fruit — perfectly ripened and flash-frozen to lock in all the flavour and nutrients."
      },
      {
        title: "No Added Sugar",
        body: "Naturally sweet with zero added sugar. Clean label ready and perfect for health-conscious consumers."
      },
      {
        title: "Endlessly Versatile",
        body: "From smoothie bowls to fine dining, cocktails to plant-based desserts — this fruit does it all."
      }
    ]
  },
  productSection: {
    eyebrow: "The Product",
    title: "Cacao Fruit",
    titleAccent: "Frozen Puree",
    body: [
      "Our cacao fruit puree delivers a unique tropical flavour profile — sweet and tangy with subtle floral notes. Flash-frozen at the peak of ripeness to guarantee consistent quality, every time.",
      "Available for foodservice, retail and industrial applications. Ready to transform your recipes into something truly extraordinary."
    ],
    image: {
      src: "/assets/cacao-fruit/product-cacao-puree.png",
      alt: "Dira Cacao Fruit Puree product",
      caption: "Dira Cacao Fruit Puree product"
    },
    specs: [
      { label: "Format", value: "Frozen Puree" },
      { label: "Ingredients", value: "100% Cacao Fruit" },
      { label: "Added Sugar", value: "None" },
      { label: "Storage", value: "Frozen (-18°C)" }
    ]
  },
  sampleSection: {
    id: "sample-request",
    title: "Taste It Yourself",
    body: "Curious about cacao fruit puree? Request your free sample and discover a whole new world of flavour for your business.",
    fields: {
      firstNameLabel: "First Name",
      lastNameLabel: "Last Name",
      emailLabel: "Email Address",
      companyLabel: "Company Name",
      industryLabel: "Select Your Industry",
      notesLabel: "Tell us about your interest (optional)"
    },
    industryOptions: ["Foodservice", "Retail", "Industry", "Bakery", "Beverage", "Other"],
    submitLabel: "Send My Sample Request",
    successMessage: "Request captured (demo). We will follow up soon."
  },
  footer: {
    brand: "Dira Fruit Solutions",
    logoSrc: "/assets/cacao-fruit/dira-logo.jpg",
    logoAlt: "Dira Fruit Solutions",
    copyrightText: "© 2026 Dira Fruit Solutions (Dirafrost)",
    siteLabel: "dirafrost.com",
    siteHref: "https://dirafrost.com"
  }
};

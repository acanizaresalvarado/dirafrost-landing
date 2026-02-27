export type HeroData = {
  title: string;
  bgImage: string;
  ctaAnchorId?: string;
};

export type SlideData = {
  image: string;
  title: string;
  subtitle?: string;
  href?: string;
};

export type SliderSectionData = {
  id: "products" | "creations";
  title: string;
  slides: SlideData[];
};

export type FooterCtaData = {
  title: string;
  image: string;
  href: string;
};

export type PreFooterCtaData = {
  title: string;
  href: string;
  ariaLabel?: string;
};

export type LandingMeta = {
  title: string;
  description: string;
  noIndex?: boolean;
};

export type LandingData = {
  meta?: LandingMeta;
  hero: HeroData;
  preFooterCta: PreFooterCtaData;
  products: SliderSectionData;
  creations: SliderSectionData;
  footerCta: FooterCtaData;
};

export type NavLink = {
  label: string;
  href: string;
};

export type LanguageOption = {
  code: string;
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type ProductLandingImage = {
  src: string;
  alt: string;
  caption: string;
};

export type ProductLandingBenefit = {
  title: string;
  body: string;
};

export type ProductLandingSpec = {
  label: string;
  value: string;
};

export type ProductLandingMeta = {
  title: string;
  description: string;
  robots: {
    index: boolean;
    follow: boolean;
  };
};

export type ProductLandingBranding = {
  linkHref: string;
  label: string;
  logoSrc?: string;
  logoAlt?: string;
};

export type QuoteBehavior = "fixed" | "hero-only" | "hidden";
export type HeaderVariant = "default" | "reference";

export type ProductLandingData = {
  meta: ProductLandingMeta;
  branding: ProductLandingBranding;
  quote: string;
  chrome?: {
    quoteBehavior?: QuoteBehavior;
    headerVariant?: HeaderVariant;
    searchPlaceholder?: string;
    showSearch?: boolean;
    showMenu?: boolean;
  };
  hero: {
    eyebrow: string;
    titlePrimary: string;
    titleSecondary: string;
    headline: string;
    body: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    primaryCtaTarget: string;
    secondaryCtaTarget: string;
    backgroundImage: string;
  };
  imageStrip: ProductLandingImage[];
  meetSection: {
    id: string;
    eyebrow: string;
    title: string;
    body: string[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    items: ProductLandingBenefit[];
  };
  productSection: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    body: string[];
    image: ProductLandingImage;
    specs: ProductLandingSpec[];
  };
  sampleSection: {
    id: string;
    title: string;
    body: string;
    fields: {
      firstNameLabel: string;
      lastNameLabel: string;
      emailLabel: string;
      companyLabel: string;
      industryLabel: string;
      notesLabel: string;
    };
    industryOptions: string[];
    submitLabel: string;
    successMessage: string;
  };
  footer: {
    brand: string;
    logoSrc?: string;
    logoAlt?: string;
    copyrightText: string;
    siteLabel: string;
    siteHref: string;
  };
};

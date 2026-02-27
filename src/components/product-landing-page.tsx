"use client";

import { FormEvent, useState } from "react";
import type { ProductLandingData, ProductLandingImage } from "@/types/landing";
import { LandingShell } from "@/components/landing-shell";

type ProductLandingPageProps = {
  data: ProductLandingData;
};

function MediaCard({ image, className }: { image: ProductLandingImage; className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`cacao-media-card ${className ?? ""}`}>
      {failed ? (
        <div className="cacao-media-fallback" role="img" aria-label={image.alt}>
          <span>{image.caption}</span>
        </div>
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="cacao-media-img"
        />
      )}
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

export function ProductLandingPage({ data }: ProductLandingPageProps) {
  const [heroFailed, setHeroFailed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFooterLogoFailed, setIsFooterLogoFailed] = useState(false);

  const onScrollTo = (targetId: string) => {
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <LandingShell
      quoteText={data.quote}
      animationTargets=".cacao-hero-copy, .cacao-section, .cacao-footer__inner"
      brandLabel={data.branding.label}
      brandHref={data.branding.linkHref}
      brandLogoSrc={data.branding.logoSrc}
      brandLogoAlt={data.branding.logoAlt}
      quoteBehavior={data.chrome?.quoteBehavior}
      quoteTargetId="cacao-hero"
      headerVariant={data.chrome?.headerVariant}
      searchPlaceholder={data.chrome?.searchPlaceholder}
      showSearch={data.chrome?.showSearch}
      showMenu={data.chrome?.showMenu}
    >
      <main id="content" role="main" className="cacao-page">
        <section className="cacao-hero" id="cacao-hero">
          <div className="cacao-hero-arc">
            <div className="cacao-hero-bg">
              {!heroFailed ? (
                <img
                  src={data.hero.backgroundImage}
                  alt="Cacao hero"
                  className="cacao-hero-bg-image"
                  onError={() => setHeroFailed(true)}
                />
              ) : null}
              <div className="cacao-hero-overlay" />
            </div>

            <div className="cacao-hero-copy">
              <span className="cacao-eyebrow">{data.hero.eyebrow}</span>
              <h1 className="cacao-hero-title">
                <span>{data.hero.titlePrimary}</span>
                <span>{data.hero.titleSecondary}</span>
              </h1>
              <h2 className="cacao-hero-headline">{data.hero.headline}</h2>
              <p className="cacao-hero-body">{data.hero.body}</p>
              <div className="cacao-hero-ctas">
                <button type="button" className="cacao-btn cacao-btn--primary" onClick={() => onScrollTo(data.hero.primaryCtaTarget)}>
                  {data.hero.primaryCtaLabel}
                </button>
                <button type="button" className="cacao-btn cacao-btn--ghost" onClick={() => onScrollTo(data.hero.secondaryCtaTarget)}>
                  {data.hero.secondaryCtaLabel}
                </button>
              </div>
            </div>

            <span className="cacao-hero-watermark" aria-hidden="true">
              {data.hero.titlePrimary} {data.hero.titleSecondary}
            </span>
          </div>

          <button
            type="button"
            className="cacao-hero-arrow"
            onClick={() => onScrollTo("cacao-gallery")}
            data-float-arrow="true"
            aria-label="Scroll to next section"
          >
            ↓
          </button>
        </section>

        <section className="cacao-section cacao-section--images" id="cacao-gallery">
          <div className="cacao-container">
            <span className="cacao-ghost-label" aria-hidden="true">
              Fruit
            </span>
            <div className="cacao-grid-3">
              {data.imageStrip.map((image) => (
                <MediaCard key={image.caption} image={image} />
              ))}
            </div>
          </div>
        </section>

        <section className="cacao-section cacao-section--meet" id={data.meetSection.id}>
          <div className="cacao-container">
            <span className="cacao-eyebrow">{data.meetSection.eyebrow}</span>
            <h2 className="cacao-title">{data.meetSection.title}</h2>
            <div className="cacao-richtext">
              {data.meetSection.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="cacao-section cacao-section--light cacao-section--benefits">
          <div className="cacao-container">
            <span className="cacao-ghost-label cacao-ghost-label--light" aria-hidden="true">
              Puree
            </span>
            <span className="cacao-eyebrow">{data.benefits.eyebrow}</span>
            <h2 className="cacao-title">{data.benefits.title}</h2>
            <div className="cacao-benefits-grid">
              {data.benefits.items.map((benefit) => (
                <article key={benefit.title} className="cacao-benefit-card">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cacao-section cacao-section--product">
          <div className="cacao-container cacao-product-layout">
            <div className="cacao-product-copy">
              <span className="cacao-eyebrow">{data.productSection.eyebrow}</span>
              <h2 className="cacao-title">
                <span>{data.productSection.title}</span>
                <span>{data.productSection.titleAccent}</span>
              </h2>
              <div className="cacao-richtext">
                {data.productSection.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <dl className="cacao-specs">
                {data.productSection.specs.map((spec) => (
                  <div key={spec.label} className="cacao-spec-row">
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="cacao-product-art">
              <div className="cacao-product-circle" aria-hidden="true" />
              <span className="cacao-ghost-label cacao-ghost-label--product" aria-hidden="true">
                {data.productSection.titleAccent}
              </span>
              <MediaCard image={data.productSection.image} className="cacao-product-image" />
            </div>
          </div>
        </section>

        <section className="cacao-section cacao-section--light cacao-section--sample" id={data.sampleSection.id}>
          <div className="cacao-container">
            <h2 className="cacao-title">{data.sampleSection.title}</h2>
            <p className="cacao-intro">{data.sampleSection.body}</p>

            <form className="cacao-form" onSubmit={onSubmit}>
              <label>
                {data.sampleSection.fields.firstNameLabel}
                <input type="text" name="first_name" required />
              </label>

              <label>
                {data.sampleSection.fields.lastNameLabel}
                <input type="text" name="last_name" required />
              </label>

              <label>
                {data.sampleSection.fields.emailLabel}
                <input type="email" name="email" required />
              </label>

              <label>
                {data.sampleSection.fields.companyLabel}
                <input type="text" name="company" required />
              </label>

              <label>
                {data.sampleSection.fields.industryLabel}
                <select name="industry" required defaultValue="">
                  <option value="" disabled>
                    Select...
                  </option>
                  {data.sampleSection.industryOptions.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                {data.sampleSection.fields.notesLabel}
                <textarea name="notes" rows={4} />
              </label>

              <button type="submit" className="cacao-btn cacao-btn--submit">
                {data.sampleSection.submitLabel}
              </button>
            </form>

            {isSubmitted ? <p className="cacao-form-success">{data.sampleSection.successMessage}</p> : null}
          </div>
        </section>
      </main>

      <footer className="cacao-footer">
        <div className="cacao-footer__arc" aria-hidden="true">
          <img src={data.imageStrip[2].src} alt="" className="cacao-footer-fruit" loading="lazy" />
        </div>
        <div className="cacao-footer__inner">
          <span className="cacao-footer-brand">
            {data.footer.logoSrc && !isFooterLogoFailed ? (
              <img
                src={data.footer.logoSrc}
                alt={data.footer.logoAlt ?? data.footer.brand}
                className="cacao-footer-logo"
                onError={() => setIsFooterLogoFailed(true)}
              />
            ) : (
              data.footer.brand
            )}
          </span>
          <span>
            {data.footer.copyrightText} —{" "}
            <a href={data.footer.siteHref} target="_blank" rel="noreferrer noopener">
              {data.footer.siteLabel}
            </a>
          </span>
        </div>
      </footer>
    </LandingShell>
  );
}

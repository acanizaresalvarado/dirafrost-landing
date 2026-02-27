"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectFade, Navigation, Pagination } from "swiper/modules";
import type { LandingData, SliderSectionData } from "@/types/landing";
import { contactHtml, footerColumns, quote } from "@/data/landing";
import { LandingShell } from "@/components/landing-shell";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

type LandingPageProps = {
  data: LandingData;
};

function SliderSection({ section }: { section: SliderSectionData }) {
  const classSlug = useMemo(() => `${section.id}-slider`, [section.id]);

  return (
    <section className="dira-slider" id={`${section.id}-slider`}>
      <div className="dira-slider__wrapper">
        <div className="dira-slider__circle" aria-hidden="true" />
        <div className="dira-slider__background-header">
          <h2 className="text-white">{section.title}</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, EffectFade, A11y]}
          className="swiper swiper-container"
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={650}
          loop={false}
          slidesPerView={1}
          navigation={{
            prevEl: `.${classSlug}-prev`,
            nextEl: `.${classSlug}-next`
          }}
          pagination={{
            el: `.${classSlug}-pagination`,
            type: "fraction"
          }}
          a11y={{ enabled: true }}
        >
          {section.slides.map((slide) => (
            <SwiperSlide key={`${section.id}-${slide.title}`}>
              <article className="dira-slider__slide-content">
                <div className="dira-slider__slide-content-image">
                  <img src={slide.image} alt={slide.title} loading="lazy" />
                </div>

                <div className="dira-slider__slide-content-wrapper">
                  <div className="dira-slider__slide-content-info">
                    <span className="text-white">{slide.title}</span>
                    {slide.subtitle ? <span className="text-white">{slide.subtitle}</span> : null}
                  </div>

                  {slide.href ? (
                    <a href={slide.href} className="slide-link" target="_self" aria-label={slide.title}>
                      View
                    </a>
                  ) : null}
                </div>
              </article>
            </SwiperSlide>
          ))}

          <div className="dira-slider__navigation">
            <div className={`swiper-pagination ${classSlug}-pagination`} />
            <button
              className={`dira-slider__navigation-button ${classSlug}-prev`}
              aria-label="Previous slide"
              type="button"
            >
              Prev
            </button>
            <button
              className={`dira-slider__navigation-button ${classSlug}-next`}
              aria-label="Next slide"
              type="button"
            >
              Next
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export function LandingPage({ data }: LandingPageProps) {
  const onArrowClick = () => {
    if (!data.hero.ctaAnchorId) {
      return;
    }

    const target = document.getElementById(data.hero.ctaAnchorId);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <LandingShell quoteText={quote} animationTargets=".hero-title, .dira-slider__wrapper, .site-footer, .cta-inner">
      <main id="content" role="main">
        <section className="tax-hero" id="tax-hero">
          <div className="tax-hero__content-wrapper">
            <img src={data.hero.bgImage} alt={data.hero.title} className="tax-hero__bg" />

            <div className="tax-hero__content">
              <h1 className="hero-title">{data.hero.title}</h1>

              <button
                className="tax-arrow"
                id="tax-arrow"
                onClick={onArrowClick}
                type="button"
                data-float-arrow="true"
                aria-label="Scroll to products"
              >
                ↓
              </button>
            </div>
          </div>
        </section>

        <section className="tax-before-footer-cta">
          <div className="tax-before-footer-cta__content-wrapper">
            <h2>{data.preFooterCta.title}</h2>
            <a
              className="click-url"
              href={data.preFooterCta.href}
              aria-label={data.preFooterCta.ariaLabel ?? data.preFooterCta.title}
            />
          </div>
        </section>

        <SliderSection section={data.products} />
        <SliderSection section={data.creations} />
      </main>

      <section id="footercta" className="footer-cta-section">
        <img src={data.footerCta.image} alt="citrus" className="fruit_image" />
        <div className="cta-inner">
          <a href={data.footerCta.href}>
            <div className="cta-content">
              <div className="ctatitle">
                <h2 className="customtitle">{data.footerCta.title}</h2>
              </div>
              <span className="cta-arrow" aria-hidden="true">
                →
              </span>
            </div>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner">
          {footerColumns.map((column) => (
            <div key={column.title} className="footer-column">
              <span className="footer-title">{column.title}</span>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-column footer-contact">
            <span className="footer-title">Contact</span>
            <ul>
              <li>
                <a href={`tel:${contactHtml[0]}`}>{contactHtml[0]}</a>
              </li>
              <li>
                <a href={`mailto:${contactHtml[1]}`}>{contactHtml[1]}</a>
              </li>
              <li>{contactHtml[2]}</li>
              <li>{contactHtml[3]}</li>
            </ul>
          </div>
        </div>
      </footer>
    </LandingShell>
  );
}

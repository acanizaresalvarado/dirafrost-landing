"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { languages, mainNav, sideLinks } from "@/data/landing";
import type { HeaderVariant, QuoteBehavior } from "@/types/landing";

type LandingShellProps = {
  quoteText: string;
  children: React.ReactNode;
  animationTargets?: string;
  brandLabel?: string;
  brandHref?: string;
  brandLogoSrc?: string;
  brandLogoAlt?: string;
  quoteBehavior?: QuoteBehavior;
  quoteTargetId?: string;
  headerVariant?: HeaderVariant;
  searchPlaceholder?: string;
  showSearch?: boolean;
  showMenu?: boolean;
};

export function LandingShell({
  quoteText,
  children,
  animationTargets,
  brandLabel = "DIRA",
  brandHref = "https://www.dirafruitsolutions.com",
  brandLogoSrc,
  brandLogoAlt,
  quoteBehavior = "fixed",
  quoteTargetId,
  headerVariant = "default",
  searchPlaceholder = "SEARCH...",
  showSearch = true,
  showMenu = true
}: LandingShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isBrandLogoFailed, setIsBrandLogoFailed] = useState(false);
  const [isQuoteVisible, setIsQuoteVisible] = useState(quoteBehavior !== "hidden");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: -24,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power2.out"
        });
      }

      if (animationTargets) {
        gsap.from(animationTargets, {
          y: 40,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.2
        });
      }

      const arrow = document.querySelector<HTMLElement>("[data-float-arrow='true']");
      if (arrow) {
        gsap.to(arrow, {
          y: 12,
          duration: 1.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    });

    return () => ctx.revert();
  }, [animationTargets]);

  useEffect(() => {
    if (quoteBehavior === "hidden") {
      setIsQuoteVisible(false);
      return;
    }

    if (quoteBehavior === "fixed") {
      setIsQuoteVisible(true);
      return;
    }

    const target = quoteTargetId ? document.getElementById(quoteTargetId) : null;
    const onScroll = () => {
      if (target) {
        const rect = target.getBoundingClientRect();
        setIsQuoteVisible(rect.top >= -1);
        return;
      }

      setIsQuoteVisible(window.scrollY <= 1);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [quoteBehavior, quoteTargetId]);

  useEffect(() => {
    document.body.style.overflow = (showMenu && isMenuOpen) || isLangOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isLangOpen, showMenu]);

  useEffect(() => {
    if (!showMenu) {
      setIsMenuOpen(false);
    }
  }, [showMenu]);

  const quoteIsHidden = quoteBehavior === "hidden" || (quoteBehavior === "hero-only" && !isQuoteVisible);

  return (
    <>
      <a href="#content" className="skip-to-content-link">
        Skip to content
      </a>

      <header
        id="masthead"
        className={`site-header ${headerVariant === "reference" ? "site-header--reference" : ""}`}
        ref={headerRef}
      >
        <div className="site-header__inner">
          <a href={brandHref} className={`brand ${brandLogoSrc ? "brand--logo" : ""}`} aria-label={`Go to ${brandLabel} home`}>
            {brandLogoSrc && !isBrandLogoFailed ? (
              <img
                src={brandLogoSrc}
                alt={brandLogoAlt ?? brandLabel}
                className="brand__logo"
                onError={() => setIsBrandLogoFailed(true)}
              />
            ) : (
              brandLabel
            )}
          </a>

          <div className="site-header__actions">
            {headerVariant === "reference" ? (
              <>
                {showSearch ? (
                  <button className="header-search-pill" type="button" aria-label="Open search">
                    <span>{searchPlaceholder}</span>
                    <span className="header-search-icon" aria-hidden="true" />
                  </button>
                ) : null}

                <button
                  className="header-action header-action--lang"
                  type="button"
                  id="toggleAsideLang"
                  aria-label="Change language"
                  onClick={() => setIsLangOpen(true)}
                >
                  <span>EN</span>
                  <span className="header-globe-icon" aria-hidden="true" />
                </button>

                {showMenu ? (
                  <button
                    className="header-action header-action--menu"
                    type="button"
                    id="nav-menutrigger"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  >
                    <span>{isMenuOpen ? "CLOSE" : "MENU"}</span>
                    <span className="header-menu-icon" aria-hidden="true" />
                  </button>
                ) : null}
              </>
            ) : (
              <>
                <button
                  className="header-action"
                  type="button"
                  id="toggleAsideLang"
                  aria-label="Change language"
                  onClick={() => setIsLangOpen(true)}
                >
                  EN
                </button>

                {showMenu ? (
                  <button
                    className="header-action"
                    type="button"
                    id="nav-menutrigger"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  >
                    {isMenuOpen ? "Close" : "Menu"}
                  </button>
                ) : null}
              </>
            )}
          </div>
        </div>

        <span className={`site-quote ${quoteIsHidden ? "site-quote--hidden" : ""}`} id="quote">
          {quoteText}
        </span>
      </header>

      <aside id="asidePanel" className={`aside ${isLangOpen ? "is-open" : ""}`}>
        <div className="aside__wrapper">
          <div className="aside__heading">
            <span>Choose your Language</span>
            <button
              id="closeAside"
              type="button"
              className="close-button"
              onClick={() => setIsLangOpen(false)}
              aria-label="Close panel"
            >
              Close
            </button>
          </div>
          <ul className="aside__languages">
            {languages.map((language) => (
              <li className="aside__language" key={language.code}>
                <a
                  className={`aside__language-option ${language.code === "EN" ? "active" : ""}`}
                  href={language.href}
                >
                  {language.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div id="js-sideButtonLeft" className="side-button side-button--left">
        <a href={sideLinks.left.href}>{sideLinks.left.label}</a>
      </div>

      <div id="js-sideButtonRight" className="side-button side-button--right">
        <a href={sideLinks.right.href}>{sideLinks.right.label}</a>
      </div>

      {showMenu ? (
        <nav className={`site-nav ${isMenuOpen ? "is-open" : ""}`} id="navigation" aria-label="Main navigation">
          <ul>
            {mainNav.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {showMenu ? (
        <button
          id="overlay"
          type="button"
          className={`overlay ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Close overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      ) : null}

      {children}
    </>
  );
}

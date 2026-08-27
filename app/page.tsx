"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Bath,
  BedDouble,
  Check,
  ChevronDown,
  Clock3,
  FileCheck2,
  Hotel,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Phone,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { siteCopy, type SiteLocale } from "./content";
import { getHotelRates } from "./hotel-data";
import MenuExplorer from "./menu-explorer";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}
const phoneDisplay = "+7 775 808 3169";
const phoneHref = "tel:+77758083169";
const instagramHref = "https://www.instagram.com/airom_hotel/";
const mapHref =
  "https://2gis.kz/atyrau/firm/70000001111109238/51.93015%2C47.127758?m=51.930144%2C47.12775%2F18";

const amenityIcons = [BedDouble, Bath, Monitor, ShieldCheck];

const gallery = [
  "/airom/hero-room.jpeg",
  "/airom/room-wide.jpeg",
  "/airom/bathroom.jpeg",
  "/airom/tv-area.jpeg",
  "/airom/coffee-station.jpeg",
  "/airom/lounge.jpeg",
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-lockup ${light ? "brand-lockup--light" : ""}`}>
      <span className="hotel-wordmark" aria-label="AiRom Hotel" role="img" />
      <span className="brand-city">Атырау</span>
    </span>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<SiteLocale>("ru");
  const t = siteCopy[locale];
  const hotelRates = getHotelRates(locale);
  const whatsappHref = `https://wa.me/77758083169?text=${encodeURIComponent(t.whatsapp)}`;

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("airom-language");
    if (savedLocale === "ru" || savedLocale === "kk") {
      setLocale(savedLocale);
      document.documentElement.lang = savedLocale;
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.metaTitle;
  }, [locale, t.metaTitle]);

  const selectLanguage = (nextLocale: SiteLocale) => {
    setLocale(nextLocale);
    window.localStorage.setItem("airom-language", nextLocale);
  };

  return (
    <main data-locale={locale}>
      <header className="site-header">
        <a className="header-brand" href="#top" aria-label={t.homeLabel}>
          <Brand />
        </a>

        <nav className="desktop-nav" aria-label={t.mainNavigation}>
          <a href="#rooms">{t.nav.rooms}</a>
          <a href="#menu">{t.nav.menu}</a>
          <a href="#teams">{t.nav.teams}</a>
          <a href="#rates">{t.nav.rates}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#contacts">{t.nav.contacts}</a>
        </nav>

        <div className="header-controls">
          <div className="language-switcher" role="group" aria-label={t.languageLabel}>
            <button type="button" aria-pressed={locale === "ru"} onClick={() => selectLanguage("ru")}>РУС</button>
            <span aria-hidden="true">/</span>
            <button type="button" aria-pressed={locale === "kk"} onClick={() => selectLanguage("kk")}>ҚАЗ</button>
          </div>
          <a className="header-phone" href={phoneHref}>
            <Phone size={17} strokeWidth={2} />
            <span>{phoneDisplay}</span>
          </a>
        </div>

        <details className="mobile-menu">
          <summary aria-label={t.openMenu}>
            <Menu size={24} />
          </summary>
          <nav aria-label={t.mobileNavigation}>
            <a href="#rooms">{t.nav.rooms}</a>
            <a href="#menu">{t.nav.menu}</a>
            <a href="#teams">{t.nav.teams}</a>
            <a href="#rates">{t.nav.rates}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#contacts">{t.nav.contacts}</a>
            <a href={phoneHref}>{phoneDisplay}</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>
            {t.hero.title}
            <span>{t.hero.titleAccent}</span>
          </h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <div className="hero-booking">
              <a className="button button--primary" href={whatsappHref} target="_blank" rel="noreferrer">
                {t.hero.book}
                <ArrowRight size={19} />
              </a>
              <span><MessageCircle size={14} /> {t.hero.whatsappNote}</span>
            </div>
            <a className="button button--ghost" href="#teams">
              {t.hero.teamTerms}
              <ArrowDownRight size={18} />
            </a>
          </div>
          <div className="hero-facts" aria-label={t.hero.factsLabel}>
            <div>
              <strong>24/7</strong>
              <span>{t.hero.reception}</span>
            </div>
            <div>
              <strong>3×</strong>
              <span>{t.hero.meals}</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>{t.hero.documents}</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            src="/airom/hero-room.jpeg"
            alt={t.hero.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 54vw"
          />
          <div className="hero-price">
            <span>{t.hero.networkRooms}</span>
            <strong>{t.hero.from}</strong>
            <small>{t.hero.perNight}</small>
          </div>
          <div className="hero-corner" aria-hidden="true" />
        </div>
      </section>

      <section className="brand-statement" aria-label={t.statement.label}>
        <p>
          <span>AIROM —</span> {t.statement.text}
        </p>
        <a href="#rooms">{t.statement.link} <ArrowRight size={18} /></a>
      </section>

      <section className="section rooms-section" id="rooms">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.rooms.eyebrow}</p>
            <h2>{t.rooms.title}</h2>
          </div>
          <p>{t.rooms.intro}</p>
        </div>

        <div className="rooms-showcase">
          <figure className="room-main-photo">
            <Image
              src="/airom/room-wide.jpeg"
              alt={t.rooms.mainAlt}
              fill
              sizes="(max-width: 850px) 100vw, 66vw"
            />
          </figure>
          <div className="room-detail-photo">
            <Image
              src="/airom/bathroom-wide.jpeg"
              alt={t.rooms.bathroomAlt}
              fill
              sizes="(max-width: 850px) 44vw, 28vw"
            />
            <span>{t.rooms.bathroomLabel}</span>
          </div>
          <article className="room-note">
            <Sparkles size={24} />
            <h3>{t.rooms.noteTitle}</h3>
            <p>{t.rooms.noteText}</p>
          </article>
        </div>

        <div className="amenities-grid">
          {t.rooms.amenities.map(({ title, text }, index) => {
            const Icon = amenityIcons[index];
            return (
            <article className="amenity" key={title}>
              <span className="amenity-icon"><Icon size={24} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
            );
          })}
        </div>
      </section>

      <section className="food-section" id="food">
        <div className="food-image">
          <Image
            src="/airom/breakfast.webp"
            alt={t.food.imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <span className="food-badge"><UtensilsCrossed size={18} /> {t.food.badge}</span>
        </div>
        <div className="food-copy">
          <p className="eyebrow eyebrow--light">{t.food.eyebrow}</p>
          <h2>{t.food.title}</h2>
          <p className="food-intro">{t.food.intro}</p>
          <div className="meal-timeline">
            <div><span>01</span><strong>{t.food.breakfast}</strong><small>{t.food.breakfastNote}</small></div>
            <div><span>02</span><strong>{t.food.lunch}</strong><small>{t.food.lunchNote}</small></div>
            <div><span>03</span><strong>{t.food.dinner}</strong><small>{t.food.dinnerNote}</small></div>
          </div>
          <a className="text-link text-link--light" href={phoneHref}>
            {t.food.discuss} <ArrowRight size={19} />
          </a>
        </div>
      </section>

      <section className="section menu-section" id="menu">
        <div className="section-heading menu-heading">
          <div>
            <p className="eyebrow">{t.menu.eyebrow}</p>
            <h2>{t.menu.title}</h2>
          </div>
          <div className="menu-heading-note">
            <p>{t.menu.intro}</p>
          </div>
        </div>

        <MenuExplorer locale={locale} />

        <div className="menu-footnote">
          <UtensilsCrossed size={20} />
          <p>{t.menu.note}</p>
        </div>
      </section>

      <section className="section teams-section" id="teams">
        <div className="section-heading teams-heading">
          <div>
            <p className="eyebrow">{t.teams.eyebrow}</p>
            <h2>{t.teams.title}</h2>
          </div>
          <p>{t.teams.intro}</p>
        </div>

        <div className="teams-board">
          <div className="teams-board-intro">
            <FileCheck2 size={30} />
            <p className="card-kicker">{t.teams.documents}</p>
            <h3>{t.teams.package}</h3>
            <small>{t.teams.tax}</small>
          </div>

          <ul className="teams-documents">
            <li><Check size={18} /> {t.teams.agreement}</li>
            <li><Check size={18} /> {t.teams.invoice}</li>
            <li><Check size={18} /> {t.teams.acts}</li>
            <li><Check size={18} /> {t.teams.receipt}</li>
          </ul>

          <div className="teams-benefits">
            <article>
              <span>01</span>
              <div><h3>{t.teams.paymentTitle}</h3><p>{t.teams.paymentText}</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>{t.teams.groupTitle}</h3><p>{t.teams.groupText}</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>{t.teams.coordinationTitle}</h3><p>{t.teams.coordinationText}</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section rates-section" id="rates">
        <div className="section-heading rates-heading">
          <div>
            <p className="eyebrow">{t.rates.eyebrow}</p>
            <h2>{t.rates.title}</h2>
          </div>
          <p>{t.rates.intro}</p>
        </div>

        <div className="hotels-pricing">
          {hotelRates.map((hotel, hotelIndex) => (
            <article className={`hotel-price-card hotel-price-card--${hotelIndex + 1}`} key={hotel.name}>
              <header className="hotel-price-header">
                <div className="hotel-price-icon"><Hotel size={24} /></div>
                <div>
                  <p>{t.rates.hotel}</p>
                  <h3>{hotel.name}</h3>
                  <span>{hotel.address}</span>
                </div>
                <strong>{hotel.from}</strong>
              </header>

              <div className="room-rate-list">
                {hotel.rooms.map((room, roomIndex) => (
                  <details className="room-rate" key={room.name} open={roomIndex === 0}>
                    <summary>
                      <span><strong>{room.name}</strong><small>{room.description}</small></span>
                      <ChevronDown size={20} />
                    </summary>
                    <div className="rate-table" role="table" aria-label={`${hotel.name}: ${room.name}`}>
                      <div className="rate-table-head" role="row">
                        <span>{t.rates.tariff}</span>
                        <span>{t.rates.perRoom}</span>
                        <span>{t.rates.perPerson}</span>
                      </div>
                      {room.options.map((option) => (
                        <div className="rate-row" role="row" key={option.label}>
                          <span>{option.label}</span>
                          <strong>{option.total}</strong>
                          <small>{option.perPerson ?? "—"}</small>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>

              {hotelIndex === 0 && (
                <p className="hotel-price-note">{t.rates.singleNote}</p>
              )}
            </article>
          ))}
        </div>

        <div className="rates-legend">
          <span><i /> {t.rates.totalLegend}</span>
          <span><i /> {t.rates.personLegend}</span>
        </div>
      </section>

      <section className="price-section">
        <div>
          <p className="eyebrow eyebrow--light">{t.booking.eyebrow}</p>
          <h2>{t.booking.title}</h2>
        </div>
        <div className="price-main">
          <span>{t.booking.roomsFrom}</span>
          <strong>24 000 ₸</strong>
          <small>{t.booking.perNight}</small>
        </div>
        <div className="price-actions">
          <a className="button button--gold" href={phoneHref}><Phone size={18} /> {t.booking.call}</a>
          <a className="button button--outline-light" href={instagramHref} target="_blank" rel="noreferrer">
            <InstagramIcon size={18} /> {t.booking.instagram}
          </a>
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">{t.gallery.eyebrow}</p>
            <h2>{t.gallery.title}</h2>
          </div>
          <p>{t.gallery.note}</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((src, index) => (
            <figure className={`gallery-item gallery-item--${index + 1}`} key={src}>
              <Image src={src} alt={t.gallery.alts[index]} fill sizes="(max-width: 700px) 100vw, 40vw" />
            </figure>
          ))}
        </div>
      </section>

      <section className="contacts-section" id="contacts">
        <div className="map-frame" aria-label={t.contacts.mapLabel}>
          <Image
            src="/airom/location-poster.webp"
            alt={t.contacts.mapAlt}
            fill
            sizes="(max-width: 900px) 100vw, 54vw"
          />
        </div>
        <div className="contact-copy">
          <p className="eyebrow">{t.contacts.eyebrow}</p>
          <h2>{t.contacts.title}<br />{t.contacts.city}</h2>
          <div className="contact-lines">
            <a href={mapHref} target="_blank" rel="noreferrer">
              <MapPin size={22} />
              <span><small>{t.contacts.addressLabel}</small>{t.contacts.address}</span>
            </a>
            <a href={phoneHref}>
              <Phone size={22} />
              <span><small>{t.contacts.bookingLabel}</small>{phoneDisplay}</span>
            </a>
            <a href={instagramHref} target="_blank" rel="noreferrer">
              <InstagramIcon size={22} />
              <span><small>Instagram</small>@airom_hotel</span>
            </a>
            <div>
              <Clock3 size={22} />
              <span><small>{t.contacts.reception}</small>{t.contacts.alwaysOpen}</span>
            </div>
          </div>
          <a className="button button--primary" href={mapHref} target="_blank" rel="noreferrer">
            {t.contacts.route} <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <Brand light />
          <span>{t.footer.description}</span>
        </div>
        <div className="footer-links">
          <a href="#rooms">{t.nav.rooms}</a>
          <a href="#menu">{t.nav.menu}</a>
          <a href="#teams">{t.nav.teams}</a>
          <a href="#rates">{t.nav.rates}</a>
          <a href="#contacts">{t.nav.contacts}</a>
        </div>
        <div className="footer-contact">
          <a href={phoneHref}>{phoneDisplay}</a>
          <a href={instagramHref} target="_blank" rel="noreferrer">@airom_hotel</a>
          <span>© 2026 AIROM Hotel</span>
        </div>
      </footer>

      <div className="mobile-contact-bar">
        <a href={phoneHref}><Phone size={18} /> {t.booking.call}</a>
        <a href={instagramHref} target="_blank" rel="noreferrer"><InstagramIcon size={18} /> {t.footer.write}</a>
      </div>
    </main>
  );
}

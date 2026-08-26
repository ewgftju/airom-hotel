import Image from "next/image";
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
  Monitor,
  Phone,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { hotelRates } from "./hotel-data";
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

const amenities = [
  {
    icon: BedDouble,
    title: "Полноценный отдых",
    text: "Раздельные кровати 120 × 200 см с ортопедическими матрасами и шторами blackout.",
  },
  {
    icon: Bath,
    title: "Собственный санузел",
    text: "Душ, свежие полотенца, фен и одноразовые средства гигиены в каждом номере.",
  },
  {
    icon: Monitor,
    title: "Всё необходимое",
    text: "Телевизор, чайная станция, питьевая вода и удобное место для личных вещей.",
  },
  {
    icon: ShieldCheck,
    title: "Спокойствие 24/7",
    text: "Круглосуточная стойка регистрации, видеонаблюдение и частная парковка.",
  },
];

const gallery = [
  { src: "/airom/hero-room.jpeg", alt: "Номер AIROM Hotel с двумя раздельными кроватями" },
  { src: "/airom/room-wide.jpeg", alt: "Просторный номер AIROM Hotel" },
  { src: "/airom/bathroom.jpeg", alt: "Санузел в номере AIROM Hotel" },
  { src: "/airom/tv-area.jpeg", alt: "Телевизор и рабочая зона в номере" },
  { src: "/airom/coffee-station.jpeg", alt: "Чайная и кофейная станция" },
  { src: "/airom/lounge.jpeg", alt: "Зона отдыха в AIROM Hotel" },
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
  return (
    <main>
      <header className="site-header">
        <a className="header-brand" href="#top" aria-label="AIROM Hotel — на главную">
          <Brand />
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#rooms">Номера</a>
          <a href="#menu">Меню</a>
          <a href="#teams">Для команд</a>
          <a href="#rates">Цены</a>
          <a href="#gallery">Галерея</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <a className="header-phone" href={phoneHref}>
          <Phone size={17} strokeWidth={2} />
          <span>{phoneDisplay}</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Открыть меню">
            <Menu size={24} />
          </summary>
          <nav aria-label="Мобильная навигация">
            <a href="#rooms">Номера</a>
            <a href="#menu">Меню</a>
            <a href="#teams">Для команд</a>
            <a href="#rates">Цены</a>
            <a href="#gallery">Галерея</a>
            <a href="#contacts">Контакты</a>
            <a href={phoneHref}>{phoneDisplay}</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Гостиница в Атырау</p>
          <h1>
            Проживание команд
            <span>без лишних хлопот</span>
          </h1>
          <p className="hero-lead">
            Комфортные номера, трёхразовое питание и полный пакет документов — всё в одном месте.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href={phoneHref}>
              Забронировать
              <ArrowRight size={19} />
            </a>
            <a className="button button--ghost" href="#teams">
              Условия для команд
              <ArrowDownRight size={18} />
            </a>
          </div>
          <div className="hero-facts" aria-label="Ключевые преимущества">
            <div>
              <strong>24/7</strong>
              <span>стойка регистрации</span>
            </div>
            <div>
              <strong>3×</strong>
              <span>питание ежедневно</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>закрывающих документов</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            src="/airom/hero-room.jpeg"
            alt="Светлый номер AIROM Hotel с двумя раздельными кроватями"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 54vw"
          />
          <div className="hero-price">
            <span>Номера AIROM Hotel</span>
            <strong>от 24 000 ₸</strong>
            <small>за номер в сутки</small>
          </div>
          <div className="hero-corner" aria-hidden="true" />
        </div>
      </section>

      <section className="brand-statement" aria-label="О гостинице">
        <div className="statement-mark">AR</div>
        <p>
          <span>AIROM —</span> спокойная база между тренировками, играми и дорогой.
        </p>
        <a href="#rooms">Посмотреть номера <ArrowRight size={18} /></a>
      </section>

      <section className="section rooms-section" id="rooms">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Номера</p>
            <h2>Восстановление начинается с тишины</h2>
          </div>
          <p>
            Светлые номера со спокойным интерьером и всем необходимым для полноценного отдыха после нагрузок.
          </p>
        </div>

        <div className="rooms-showcase">
          <figure className="room-main-photo">
            <Image
              src="/airom/room-wide.jpeg"
              alt="Номер AIROM Hotel с рабочей зоной и телевизором"
              fill
              sizes="(max-width: 850px) 100vw, 66vw"
            />
          </figure>
          <div className="room-detail-photo">
            <Image
              src="/airom/bathroom-wide.jpeg"
              alt="Современный санузел с душевой кабиной"
              fill
              sizes="(max-width: 850px) 44vw, 28vw"
            />
            <span>Санузел в номере</span>
          </div>
          <article className="room-note">
            <Sparkles size={24} />
            <h3>Комфорт в каждой детали</h3>
            <p>Ежедневное обслуживание номера, чистый текстиль и одноразовые средства гигиены.</p>
          </article>
        </div>

        <div className="amenities-grid">
          {amenities.map(({ icon: Icon, title, text }) => (
            <article className="amenity" key={title}>
              <span className="amenity-icon"><Icon size={24} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="food-section" id="food">
        <div className="food-image">
          <Image
            src="/airom/breakfast.webp"
            alt="Вариант завтрака для гостей AIROM Hotel"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <span className="food-badge"><UtensilsCrossed size={18} /> Трёхразовый рацион</span>
        </div>
        <div className="food-copy">
          <p className="eyebrow eyebrow--light">Питание для команд</p>
          <h2>По вашему режиму, а не по шаблону</h2>
          <p className="food-intro">
            Меню адаптируем под график тренировок, соревнований и дорогу. Доступна доставка до места соревнований или по согласованному адресу.
          </p>
          <div className="meal-timeline">
            <div><span>01</span><strong>Завтрак</strong><small>Спокойное начало дня</small></div>
            <div><span>02</span><strong>Обед</strong><small>Полноценный горячий рацион</small></div>
            <div><span>03</span><strong>Ужин</strong><small>Восстановление после нагрузок</small></div>
          </div>
          <a className="text-link text-link--light" href={phoneHref}>
            Обсудить питание команды <ArrowRight size={19} />
          </a>
        </div>
      </section>

      <section className="section menu-section" id="menu">
        <div className="section-heading menu-heading">
          <div>
            <p className="eyebrow">Меню игровых дней</p>
            <h2>Три рациона для игрового режима</h2>
          </div>
          <div className="menu-heading-note">
            <p>Сначала выберите игровой день, затем завтрак, обед или ужин. Ниже появятся все блюда и выход порции на одного человека.</p>
          </div>
        </div>

        <MenuExplorer />

        <div className="menu-footnote">
          <UtensilsCrossed size={20} />
          <p>Меню можно скорректировать под задачи и график команды. Стоимость индивидуального рациона согласовывается отдельно.</p>
        </div>
      </section>

      <section className="section teams-section" id="teams">
        <div className="section-heading teams-heading">
          <div>
            <p className="eyebrow">Для команд и организаций</p>
            <h2>Размещение, которое удобно согласовать</h2>
          </div>
          <p>
            Размещаем команды, клубы и организации, координируем питание и готовим документы для бухгалтерии.
          </p>
        </div>

        <div className="teams-board">
          <div className="teams-board-intro">
            <FileCheck2 size={30} />
            <p className="card-kicker">Документы</p>
            <h3>Полный пакет для организаций</h3>
            <small>Общеустановленный режим налогообложения · НДС</small>
          </div>

          <ul className="teams-documents">
            <li><Check size={18} /> Договор</li>
            <li><Check size={18} /> Счёт на оплату</li>
            <li><Check size={18} /> ЭАВР и ЭСФ</li>
            <li><Check size={18} /> Фискальный чек</li>
          </ul>

          <div className="teams-benefits">
            <article>
              <span>01</span>
              <div><h3>Условия оплаты</h3><p>Наличный и безналичный расчёт.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Групповой заезд</h3><p>Размещение согласуем под состав и задачи команды.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Единая координация</h3><p>Проживание, питание и документы — через один контакт.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section rates-section" id="rates">
        <div className="section-heading rates-heading">
          <div>
            <p className="eyebrow">Стоимость проживания</p>
            <h2>Стоимость номеров AIROM Hotel</h2>
          </div>
          <p>Цены указаны за сутки. В тарифах с питанием итоговая стоимость уже включает выбранный рацион.</p>
        </div>

        <div className="hotels-pricing">
          {hotelRates.map((hotel, hotelIndex) => (
            <article className={`hotel-price-card hotel-price-card--${hotelIndex + 1}`} key={hotel.name}>
              <header className="hotel-price-header">
                <div className="hotel-price-icon"><Hotel size={24} /></div>
                <div>
                  <p>Гостиница</p>
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
                        <span>Тариф</span>
                        <span>За номер</span>
                        <span>На человека</span>
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
                <p className="hotel-price-note">Для одноместных номеров отдельная цена питания в исходном прайсе не указана — показываем готовую стоимость каждого пакета.</p>
              )}
            </article>
          ))}
        </div>

        <div className="rates-legend">
          <span><i /> За номер — итоговая стоимость выбранного тарифа</span>
          <span><i /> На человека — расчёт для многоместного размещения</span>
        </div>
      </section>

      <section className="price-section">
        <div>
          <p className="eyebrow eyebrow--light">Бронирование</p>
          <h2>Подберём условия под вашу команду</h2>
        </div>
        <div className="price-main">
          <span>Номера от</span>
          <strong>24 000 ₸</strong>
          <small>за номер в сутки</small>
        </div>
        <div className="price-actions">
          <a className="button button--gold" href={phoneHref}><Phone size={18} /> Позвонить</a>
          <a className="button button--outline-light" href={instagramHref} target="_blank" rel="noreferrer">
            <InstagramIcon size={18} /> Написать в Instagram
          </a>
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">Галерея</p>
            <h2>Посмотрите AIROM изнутри</h2>
          </div>
          <p>Только реальные фотографии гостиницы.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure className={`gallery-item gallery-item--${index + 1}`} key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 100vw, 40vw" />
            </figure>
          ))}
        </div>
      </section>

      <section className="contacts-section" id="contacts">
        <div className="map-frame" aria-label="Карта расположения AIROM Hotel">
          <Image
            src="/airom/location-poster.webp"
            alt="Карта проезда к AIROM Hotel на улице Виссариона Белинского, 25"
            fill
            sizes="(max-width: 900px) 100vw, 54vw"
          />
        </div>
        <div className="contact-copy">
          <p className="eyebrow">Как нас найти</p>
          <h2>AIROM Hotel<br />в Атырау</h2>
          <div className="contact-lines">
            <a href={mapHref} target="_blank" rel="noreferrer">
              <MapPin size={22} />
              <span><small>Адрес</small>ул. Виссариона Белинского, 25</span>
            </a>
            <a href={phoneHref}>
              <Phone size={22} />
              <span><small>Бронирование</small>{phoneDisplay}</span>
            </a>
            <a href={instagramHref} target="_blank" rel="noreferrer">
              <InstagramIcon size={22} />
              <span><small>Instagram</small>@airom_hotel</span>
            </a>
            <div>
              <Clock3 size={22} />
              <span><small>Стойка регистрации</small>Круглосуточно</span>
            </div>
          </div>
          <a className="button button--primary" href={mapHref} target="_blank" rel="noreferrer">
            Открыть маршрут в 2GIS <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <Brand light />
          <span>Гостиница для индивидуальных гостей, команд и организаций.</span>
        </div>
        <div className="footer-links">
          <a href="#rooms">Номера</a>
          <a href="#menu">Меню</a>
          <a href="#teams">Для команд</a>
          <a href="#rates">Цены</a>
          <a href="#contacts">Контакты</a>
        </div>
        <div className="footer-contact">
          <a href={phoneHref}>{phoneDisplay}</a>
          <a href={instagramHref} target="_blank" rel="noreferrer">@airom_hotel</a>
          <span>© 2026 AIROM Hotel</span>
        </div>
      </footer>

      <div className="mobile-contact-bar">
        <a href={phoneHref}><Phone size={18} /> Позвонить</a>
        <a href={instagramHref} target="_blank" rel="noreferrer"><InstagramIcon size={18} /> Написать</a>
      </div>
    </main>
  );
}

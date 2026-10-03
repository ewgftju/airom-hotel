"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import type { SiteLocale } from "./content";
import { getHotelRates } from "./hotel-data";

function nextDay(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}

export default function BookingRequest({ locale }: { locale: SiteLocale }) {
  const [roomIndex, setRoomIndex] = useState(0);
  const [mealIndex, setMealIndex] = useState(0);
  const [roomCount, setRoomCount] = useState("1");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [today, setToday] = useState("");
  const rooms = getHotelRates(locale)[0].rooms;
  const room = rooms[roomIndex];
  const tariff = room.options[mealIndex];
  const nights = arrival && departure ? Math.round((Date.parse(departure) - Date.parse(arrival)) / 86400000) : 0;
  const quantity = Number(roomCount);
  const validQuantity = Number.isInteger(quantity) && quantity >= 1 && quantity <= 100;
  const validDates = nights > 0 && arrival >= today;
  const amount = Number(tariff.total.replace(/\D/g, "")) * quantity * nights;
  const formatMoney = (value: number) => `${value.toLocaleString(locale === "kk" ? "kk-KZ" : "ru-RU")} ₸`;
  const formatDate = (value: string) => value.split("-").reverse().join(".");
  const t = locale === "kk" ? {
    eyebrow: "Брондау", title: "Сапарыңызды жоспарлаңыз", intro: "Күндерді, бөлме мен тамақтану түрін таңдаңыз. Дайын сұрауды WhatsApp арқылы әкімшіге жіберіңіз.",
    arrival: "Келу күні", departure: "Кету күні", room: "Бөлме түрі", meal: "Тамақтану", quantity: "Бөлме саны", estimate: "Алдын ала құны",
    nights: "Түн саны", rooms: "Бөлме саны", dates: "Құнын есептеу үшін күндерді таңдаңыз.", note: "Бос бөлмелер мен брондауды әкімші растайды.", send: "WhatsApp-та жалғастыру", call: "Қоңырау шалу",
    greeting: "Сәлеметсіз бе! AIROM Hotel қонақүйінде бос бөлмелер бар-жоғын білгім келеді.", total: "Сайттағы алдын ала есеп", perNight: "бір бөлмеге / тәулік", error: "Кету күні келу күнінен кейін болуы керек.",
  } : {
    eyebrow: "Бронирование", title: "Спланируйте свой заезд", intro: "Выберите даты, номер и питание. Готовый запрос можно передать администратору в WhatsApp.",
    arrival: "Заезд", departure: "Выезд", room: "Тип номера", meal: "Питание", quantity: "Количество номеров", estimate: "Предварительная стоимость",
    nights: "Ночей", rooms: "Номеров", dates: "Выберите даты для расчёта стоимости.", note: "Наличие номеров и бронирование подтвердит администратор.", send: "Продолжить в WhatsApp", call: "Позвонить",
    greeting: "Здравствуйте! Хочу уточнить наличие номеров в AIROM Hotel.", total: "Предварительный расчёт на сайте", perNight: "за номер / сутки", error: "Дата выезда должна быть позже даты заезда.",
  };

  useEffect(() => {
    // Keep the initial server and browser render identical. Hotel dates use local time in Atyrau.
    const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Atyrau", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
    const part = (type: string) => parts.find((item) => item.type === type)?.value;
    setToday(`${part("year")}-${part("month")}-${part("day")}`);
  }, []);

  const message = [t.greeting, "", `${t.arrival}: ${formatDate(arrival)}`, `${t.departure}: ${formatDate(departure)}`,
    `${t.nights}: ${nights}`, `${t.room}: ${room.name}`, `${t.meal}: ${tariff.label}`, `${t.quantity}: ${roomCount}`,
    `${t.total}: ${formatMoney(amount)}`, "", t.note].join("\n");

  return (
    <section className="booking-section" id="booking" aria-labelledby="booking-title">
      <div className="booking-intro">
        <p className="eyebrow eyebrow--light">{t.eyebrow}</p>
        <h2 id="booking-title">{t.title}</h2>
        <p>{t.intro}</p>
        <a href="tel:+77758083169" className="booking-phone"><Phone size={18} /> +7 775 808 3169</a>
      </div>
      <form className="booking-form" action="https://wa.me/77758083169" method="get" target="_blank" rel="noreferrer"
        onSubmit={(event) => { if (!validDates || !validQuantity) event.preventDefault(); }}>
        <div className="booking-fields">
          <label>{t.arrival}<input type="date" required value={arrival} min={today || undefined} onChange={(event) => {
            const value = event.target.value;
            setArrival(value);
            if (value && departure && departure <= value) setDeparture(nextDay(value));
          }} /></label>
          <label>{t.departure}<input type="date" required value={departure} min={arrival ? nextDay(arrival) : today || undefined} onChange={(event) => setDeparture(event.target.value)} /></label>
          <label>{t.room}<select value={roomIndex} onChange={(event) => setRoomIndex(Number(event.target.value))}>
            {rooms.map((item, index) => <option value={index} key={index}>{item.name}</option>)}
          </select></label>
          <label>{t.meal}<select value={mealIndex} onChange={(event) => setMealIndex(Number(event.target.value))}>
            {room.options.map((item, index) => <option value={index} key={index}>{item.label}</option>)}
          </select></label>
          <label>{t.quantity}<input type="number" required min="1" max="100" step="1" inputMode="numeric" value={roomCount} onChange={(event) => setRoomCount(event.target.value)} /></label>
          <div className="booking-nightly"><strong>{tariff.total}</strong><span>{t.perNight}</span></div>
        </div>
        <div className="booking-estimate" aria-live="polite">
          <span>{t.estimate}</span>
          {validDates && validQuantity ? <><strong>{formatMoney(amount)}</strong><small>{t.nights}: {nights} · {t.rooms}: {quantity}</small></> : <p>{arrival && departure && nights <= 0 ? t.error : t.dates}</p>}
        </div>
        <input type="hidden" name="text" value={message} />
        <button className="button button--gold" type="submit">{t.send}<ArrowUpRight size={18} /></button>
        <p className="booking-disclaimer">{t.note}</p>
      </form>
    </section>
  );
}

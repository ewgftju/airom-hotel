"use client";

import { useId, useState } from "react";
import { menuDays, type MenuDay, type MenuItem } from "./hotel-data";

type MealKey = "breakfast" | "lunch" | "dinner";

const meals: { key: MealKey; label: string }[] = [
  { key: "breakfast", label: "Завтрак" },
  { key: "lunch", label: "Обед" },
  { key: "dinner", label: "Ужин" },
];

function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <div className="menu-list">
      {items.map(([name, portion], index) => (
        <div className="menu-list-row" key={`${name}-${portion}-${index}`}>
          <span>{name}</span>
          {portion && <strong>{portion}</strong>}
        </div>
      ))}
    </div>
  );
}

export default function MenuExplorer() {
  const [dayIndex, setDayIndex] = useState(0);
  const [mealKey, setMealKey] = useState<MealKey>("breakfast");
  const panelId = useId();
  const activeDay: MenuDay = menuDays[dayIndex];
  const activeMeal = meals.find((meal) => meal.key === mealKey) ?? meals[0];
  const items = activeDay[activeMeal.key];

  return (
    <div className="menu-explorer">
      <div className="menu-explorer-toolbar">
        <div className="menu-current-day" aria-live="polite">
          <span>{activeDay.card}</span>
          <h3>{activeDay.day}</h3>
        </div>

        <div className="menu-day-picker" role="tablist" aria-label="Выбор игрового дня">
          {menuDays.map((day, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={dayIndex === index}
              className={dayIndex === index ? "is-active" : ""}
              key={day.day}
              onClick={() => setDayIndex(index)}
            >
              День {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-meal-picker" role="tablist" aria-label="Выбор приёма пищи">
        {meals.map((meal) => (
          <button
            type="button"
            role="tab"
            aria-selected={mealKey === meal.key}
            aria-controls={panelId}
            className={mealKey === meal.key ? "is-active" : ""}
            key={meal.key}
            onClick={() => setMealKey(meal.key)}
          >
            <span>{meal.label}</span>
            <small>{activeDay[meal.key].length} позиций</small>
          </button>
        ))}
      </div>

      <div className="menu-panel" id={panelId} role="tabpanel">
        <div className="menu-panel-heading">
          <div>
            <span>Рацион на одного человека</span>
            <h4>{activeMeal.label}</h4>
          </div>
          <strong>{items.length} позиций</strong>
        </div>
        <MenuList items={items} />
      </div>
    </div>
  );
}

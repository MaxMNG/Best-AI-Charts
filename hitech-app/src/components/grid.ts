/**
 * Шаблон сетки строки. В одном месте, чтобы шапка столбцов и строки
 * совпадали до пикселя: ранг, модель, три числовых столбца, шкала,
 * значение и кнопка подробностей.
 */
export const ROW_GRID =
  "lg:grid lg:grid-cols-[1.35rem_minmax(0,1.1fr)_4.5rem_5.25rem_6rem_minmax(4rem,1fr)_4.5rem_1.5rem] lg:items-center lg:gap-x-3";

/** Название метрики над шкалой и сами столбцы шапки. */
export const COLUMN_LABELS = {
  int: "Int",
  profit: "Go Profit",
  limit: "Go Limit",
  value: "Значение",
} as const;

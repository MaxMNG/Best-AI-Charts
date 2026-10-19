import { shortDate } from "@/lib/metrics";
import type { SnapshotMeta } from "@/lib/types";

interface NoteCard {
  title: string;
  text: string;
}

/** Примечания к метрикам: тексты приходят из data.js (meta.notes), не хардкодятся. */
function buildCards(meta: SnapshotMeta): NoteCard[] {
  const notes = meta.notes ?? {};
  const arenaDate = meta.visual?.arena?.asOf ?? meta.aesthetics?.arena?.asOf;
  const cards: NoteCard[] = [];

  if (notes.intelligence) cards.push({ title: "Intelligence", text: notes.intelligence });
  if (notes.reliability) cards.push({ title: "Надёжность", text: notes.reliability });

  const visual = notes.visual ?? notes.aesthetics;
  if (visual) {
    cards.push({
      title: "Визуал",
      text: arenaDate ? `${visual} Данные арен на ${shortDate(arenaDate)}.` : visual,
    });
  }

  if (notes.costPerTask) cards.push({ title: "Cost per Intelligence", text: notes.costPerTask });
  if (notes.efficiency) cards.push({ title: "OpenCode Go Эффективность", text: notes.efficiency });
  if (notes.free) cards.push({ title: "Бесплатно в OpenCode", text: notes.free });

  const unmatched = meta.counts?.unmatched;
  if (unmatched) {
    cards.push({
      title: "Без данных",
      text: `У ${unmatched} моделей из подписки пока нет карточки на Artificial Analysis — в списке у них прочерк. Если это ошибка сопоставления, пара дописывается в models.config.js.`,
    });
  }

  return cards;
}

export function Notes({ meta }: { meta: SnapshotMeta }) {
  const cards = buildCards(meta);

  return (
    <section className="mt-14 border-t border-line pt-6" aria-labelledby="notes-title">
      <h2 id="notes-title" className="font-mono text-[10px] tracking-[0.12em] text-ink-3 uppercase">
        Примечания
      </h2>

      <div className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title}>
            <h3 className="text-[13px] font-semibold text-ink">{card.title}</h3>
            <p className="mt-1 text-[12.5px] leading-relaxed text-ink-2">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

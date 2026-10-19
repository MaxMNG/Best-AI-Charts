import type { NoteBlock } from '../lib/data';

export function Notes({ notes }: { notes: NoteBlock[] }) {
  if (notes.length === 0) return null;
  return (
    <section aria-label="Примечания" className="glass mt-6 grid gap-4 rounded-xl p-4 sm:p-5">
      {notes.map((n) => (
        <div key={n.title}>
          <h2 className="font-display text-[13px] font-semibold text-accent">{n.title}</h2>
          <p className="mt-0.5 text-[12.5px] leading-relaxed text-muted">{n.html}</p>
        </div>
      ))}
    </section>
  );
}

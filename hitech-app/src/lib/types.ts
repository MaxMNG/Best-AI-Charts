/** Типы снимка `data.js` (window.AI_DATA). Описаны только используемые поля. */

export type MetricId =
  | "intelligence"
  | "visual"
  | "aesthetics"
  | "reliability"
  | "costPerTask"
  | "valueScore";

export interface VisualPart {
  value: number | null;
  rank: number | null;
  n: number | null;
}

export interface GoTier {
  label: string | null;
  input: number | null;
  output: number | null;
  cachedRead: number | null;
  monthlyLimit: number | null;
}

export interface ModelGo {
  input: number | null;
  output: number | null;
  cachedRead: number | null;
  cachedWrite?: number | null;
  monthlyLimit: number | null;
  limitRaw?: string | null;
  limitNote?: string | null;
  tiers?: GoTier[];
  requests5h: number | null;
  requestsWeek: number | null;
  requestsMonth: number | null;
  unlimited: boolean;
  mix?: { input: number; cached: number; output?: number } | null;
  tokensPerRequest?: number | null;
  costPerRequest?: number | null;
  limit5hUsd?: number | null;
  tokensPer5h?: number | null;
}

export interface Model {
  name: string;
  inGo: boolean;
  goModelId: string | null;
  inGoApi?: boolean;
  creator: string;
  color: string;
  logo?: string | null;
  aaSlug: string | null;
  aaName?: string | null;
  aaUrl?: string | null;
  intelligence: number | null;
  intelligenceEstimated?: boolean;
  costPerTask: number | null;
  contextWindow: number | null;
  isReasoning?: boolean;
  isOpenWeights?: boolean;
  go: ModelGo | null;
  efficiency: number | null;
  efficiencyProvisional?: boolean;
  valueScore: number | null;
  reliability: number | null;
  visual: number | null;
  visualParts?: Record<string, VisualPart> | null;
  aesthetics?: number | null;
  aestheticsParts?: Record<string, VisualPart> | null;
  freeInOc?: boolean;
  status: string;
}

export interface MetricConfig {
  id: MetricId;
  /** Группа кнопок: метрики Artificial Analysis и метрика подписки OpenCode. */
  section: "aa" | "oc";
  label: string;
  hint: string;
  note: string;
}

export interface MetricComponent {
  key: string;
  weight: number;
  floor: number;
  ceil: number;
}

export interface ValueConfig {
  weight: number;
  iqFloor: number;
  iqCeil: number;
  limitFloor: number;
  limitCeil: number;
}

export interface SnapshotMeta {
  generatedAt: string;
  plan?: { id: string; label: string; price: string };
  fiveHourShare?: number;
  value?: ValueConfig;
  reliability?: { components: MetricComponent[] };
  visual?: { requireWeb?: string[]; components: MetricComponent[]; arena?: { dataset?: string; asOf?: string } };
  aesthetics?: { components?: MetricComponent[]; arena?: { asOf?: string } };
  counts: Record<string, number>;
  free?: { topN: number; top: Array<{ name: string; base: string; intelligence: number; aaSlug: string | null }> };
  sources: Record<string, string>;
  notes: Record<string, string | undefined>;
}

export interface Snapshot {
  meta: SnapshotMeta;
  models: Model[];
}

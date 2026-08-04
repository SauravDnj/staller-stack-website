import type { IconTileColor } from "@/components/ui/IconTile";

export type ImpactMetric = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  color: IconTileColor;
};

export const impactMetrics: ImpactMetric[] = [
  { value: 98, suffix: "%", label: "Client Retention", color: "teal" },
  { value: 15, suffix: "+", label: "Countries Served", color: "cyan" },
  { value: 4.9, decimals: 1, suffix: "★", label: "Average Rating", color: "indigo" },
  { value: 48, prefix: "<", suffix: "h", label: "Avg. Response Time", color: "amber" },
  { value: 24, suffix: "/7", label: "Support Coverage", color: "mint" },
];

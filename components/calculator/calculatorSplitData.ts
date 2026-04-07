import { calculatorNavLinks } from "./calculatorCompactData";

export { calculatorNavLinks };

export const splitContainerOptions = ["40' High Cube", "20' Standard", "40' Reefer"];

export const baseRateRows = [
  {
    icon: "payments",
    label: "Ocean Freight Base",
    value: "$3,450",
  },
  {
    icon: "local_shipping",
    label: "Estimated Drayage",
    value: "$820",
  },
];

export const splitMetricCards = [
  {
    type: "projection" as const,
    badge: "Live Total Projection",
    total: "$4,270.00",
    change: "+2.4%",
    description:
      "AI-adjusted total including dynamic fuel surcharges and port congestion volatility.",
    icon: "insights",
  },
  {
    type: "confidence" as const,
    label: "Confidence",
    value: "94%",
    arrivalLabel: "EST. ARRIVAL",
    arrivalValue: "Oct 24, 2024",
  },
];

export const splitVelocityBars = [
  { className: "w-full bg-surface-container-low rounded-t-lg relative group h-[30%]", tooltip: "W1: $800", showOnHover: true },
  { className: "w-full bg-surface-container-low rounded-t-lg relative group h-[45%]" },
  { className: "w-full bg-secondary/20 rounded-t-lg relative group h-[60%] border-t-2 border-secondary" },
  { className: "w-full bg-primary/20 rounded-t-lg relative group h-[85%] border-t-2 border-primary", tooltip: "Peak: $4.2k" },
  { className: "w-full bg-surface-container-low rounded-t-lg relative group h-[55%]" },
];

export const splitVelocityLabels = ["Origin", "Mid-Transit", "Port", "Delivery"];

export const splitInsightCards = [
  {
    title: "Congestion Alert",
    description:
      "Shanghai Port experiencing 12% delay increase. Estimated impact: +$145 in detention risk.",
    icon: "auto_awesome",
    wrapperClassName:
      "p-6 bg-secondary-fixed/30 rounded-3xl border border-secondary/10 relative overflow-hidden group",
    iconWrapperClassName: "p-2 bg-secondary rounded-xl text-on-secondary",
  },
  {
    title: "ClauseShield Optimized",
    description:
      "Smart-Clause has reduced premium by $240 by validating carrier performance history.",
    icon: "verified",
    wrapperClassName:
      "p-6 bg-surface-container-high rounded-3xl group cursor-pointer hover:bg-white transition-all duration-300",
    iconWrapperClassName: "p-2 bg-primary-container rounded-xl text-on-primary",
  },
];

export const splitCompetitiveRows = [
  {
    marketIndex: "Global SCFI",
    baseRate: "$3,100",
    peakFactor: "1.2x",
    total: "$3,720",
    trend: "↑ 4.2%",
    trendClassName: "py-5 text-right text-error font-bold",
  },
  {
    marketIndex: "ClauseShield Smart",
    baseRate: "$3,450",
    peakFactor: "1.0x",
    total: "$3,450",
    totalClassName: "py-5 font-bold text-secondary",
    trend: "↓ 0.8%",
    trendClassName: "py-5 text-right text-secondary font-bold",
  },
  {
    marketIndex: "Spot Market Avg",
    baseRate: "$3,800",
    peakFactor: "1.5x",
    total: "$5,700",
    trend: "—",
    trendClassName: "py-5 text-right text-on-surface-variant",
  },
];

export const splitMobileNavItems = [
  { icon: "calculate", label: "Calc", active: true, fill: true },
  { icon: "dashboard", label: "Dash" },
  { icon: "location_on", label: "Track" },
];

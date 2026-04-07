export const calculatorNavLinks = [
  { href: "/calculator/compact", label: "Calculator" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/tracking", label: "Tracking" },
];

export const parameterSelectOptions = [
  "40' High Cube (Standard)",
  "20' Standard",
  "40' Reefer",
];

export const rateTiers = [
  {
    name: "Priority Express",
    transit: "22 Days",
    rate: "$4,250.00",
    dotClassName: "bg-error",
    rowClassName:
      "grid grid-cols-3 items-center px-4 py-4 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer group",
    nameClassName: "text-sm font-bold text-primary",
    valueClassName: "text-sm font-bold text-primary text-right",
  },
  {
    name: "Standard (Recommended)",
    transit: "28 Days",
    rate: "$3,100.00",
    dotClassName: "bg-secondary",
    rowClassName:
      "grid grid-cols-3 items-center px-4 py-4 bg-secondary/5 border-l-2 border-secondary rounded-lg",
    nameClassName: "text-sm font-bold text-secondary",
    valueClassName: "text-sm font-bold text-secondary text-right",
  },
  {
    name: "Economy Flow",
    transit: "35 Days",
    rate: "$2,450.00",
    dotClassName: "bg-outline",
    rowClassName:
      "grid grid-cols-3 items-center px-4 py-4 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer group",
    nameClassName: "text-sm font-bold text-primary",
    valueClassName: "text-sm font-bold text-primary text-right",
  },
];

export const timelineSteps = [
  { label: "Gate In", dotClassName: "w-3 h-3 rounded-full bg-primary mb-2 mt-[-6px]" },
  { label: "Port Load", dotClassName: "w-3 h-3 rounded-full bg-primary mb-2 mt-[-6px]" },
  {
    label: "Transit (28d)",
    dotClassName:
      "w-4 h-4 rounded-full bg-secondary-fixed-dim border-2 border-white shadow-md mb-2 mt-[-8px]",
    labelClassName: "text-[10px] font-bold text-secondary",
  },
  {
    label: "Destination",
    dotClassName: "w-3 h-3 rounded-full bg-surface-container-high mb-2 mt-[-6px]",
  },
];

export const summaryItems = [
  { label: "Base Freight", value: "$37,200.00" },
  { label: "Bunker Adjustment (BAF)", value: "$1,840.00" },
  { label: "THC & Documentation", value: "$950.00" },
  {
    label: "AI Savings Identified",
    value: "-$420.00",
    labelClassName: "text-sm font-medium text-secondary-fixed-dim",
    valueClassName: "text-xl font-headline font-bold text-secondary-fixed-dim",
    noBorder: true,
  },
];

export const secondaryAnalysisCards = [
  {
    icon: "co2",
    title: "Carbon Footprint Analysis",
    description: "Estimated 14.2 Tons CO2e for this route.",
    action: "Offset Options",
  },
  {
    icon: "verified_user",
    title: "ClauseShield Protection",
    description: "Complimentary full liability cargo insurance included.",
    action: "Policy Details",
  },
];

export const footerLinks = [
  "Resources",
  "Privacy Policy",
  "Terms of Service",
  "API Docs",
];

export const footerIcons = ["database", "public"];

export const mobileNavItems = [
  { icon: "calculate", label: "Calculator", active: true, fill: true },
  { icon: "dashboard", label: "Dashboard" },
  { icon: "location_on", label: "Tracking" },
];

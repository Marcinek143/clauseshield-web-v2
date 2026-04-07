export const trackingNavLinks = [
  { href: "/calculator/compact", label: "Calculator" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/tracking", label: "Tracking" },
];

export const shippingLineOptions = [
  "MSC Mediterranean Shipping",
  "Maersk Line",
  "CMA CGM",
  "Hapag-Lloyd",
];

export const trackingSummaryStats = [
  { label: "Distance to Port", value: "1,240 nm" },
  { label: "Speed", value: "18.4 kn" },
];

export const milestoneItems = [
  {
    icon: "calendar_today",
    label: "ETA Rotterdam",
    value: "Oct 24, 2024",
  },
  {
    icon: "dock",
    label: "Planned Discharge",
    value: "Oct 25, 2024",
  },
  {
    icon: "timer_off",
    label: "Last Free Day",
    value: "Oct 30, 2024",
    valueClassName: "text-lg font-bold text-secondary-fixed-dim",
  },
];

export const journeySteps = [
  {
    icon: "location_on",
    label: "Shanghai, CN",
    sublabel: "Departed Oct 02",
    circleClassName:
      "w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-md ring-4 ring-white",
    textClassName: "text-sm font-bold text-primary",
    subtextClassName: "text-xs text-on-surface-variant",
    fill: true,
  },
  {
    icon: "anchor",
    label: "Singapore, SG",
    sublabel: "Departed Oct 08",
    circleClassName:
      "w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-md ring-4 ring-white",
    textClassName: "text-sm font-bold text-primary",
    subtextClassName: "text-xs text-on-surface-variant",
    fill: true,
  },
  {
    icon: "sailing",
    label: "In Transit",
    sublabel: "Indian Ocean",
    circleClassName:
      "w-12 h-12 rounded-full bg-white text-secondary border-2 border-secondary flex items-center justify-center shadow-lg ring-4 ring-secondary/20 relative",
    textClassName: "text-sm font-bold text-secondary",
    subtextClassName: "text-xs text-on-surface-variant",
    animated: true,
  },
  {
    icon: "home_storage",
    label: "Rotterdam, NL",
    sublabel: "ETA Oct 24",
    circleClassName:
      "w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center ring-4 ring-white",
    textClassName: "text-sm font-bold text-on-surface-variant opacity-60",
    subtextClassName: "text-xs text-on-surface-variant opacity-60",
  },
  {
    icon: "warehouse",
    label: "Berlin Hub",
    sublabel: "Est. Oct 27",
    circleClassName:
      "w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center ring-4 ring-white",
    textClassName: "text-sm font-bold text-on-surface-variant opacity-60",
    subtextClassName: "text-xs text-on-surface-variant opacity-60",
  },
];

export const glossaryItems = [
  {
    title: "ETA",
    description:
      "Estimated Time of Arrival. The predicted time when the vessel is expected to arrive at the port of discharge.",
  },
  {
    title: "Discharge",
    description:
      "The physical act of unloading the container from the vessel onto the terminal quay.",
  },
  {
    title: "Free Day",
    description:
      "The last day before demurrage charges are applied for storing the container at the terminal.",
  },
  {
    title: "LFD",
    description:
      "Last Free Day. Crucial deadline to avoid significant port storage and carrier detention fees.",
  },
];

export const footerColumns = [
  {
    title: "Platform",
    links: ["Tracking", "Calculators", "API Documentation"],
  },
  {
    title: "Company",
    links: ["Privacy Policy", "Terms of Service", "Global Network"],
  },
  {
    title: "Support",
    links: ["Contact Support", "Documentation", "Status Page"],
  },
];

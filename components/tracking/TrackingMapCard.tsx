import Image from "next/image";

import { trackingSummaryStats } from "./trackingData";

export default function TrackingMapCard() {
  return (
    <div className="md:col-span-8 bg-surface-container-low rounded-xl overflow-hidden relative group">
      <div className="absolute inset-0 bg-slate-900/10 z-10 pointer-events-none" />
      <Image
        alt="Global trade map"
        className="w-full h-[450px] object-cover filter contrast-125 brightness-90"
        height={450}
        sizes="(max-width: 768px) 100vw, 66vw"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuADXc1aRqQ9UtPA6hGTdtkXqMU32vX4Fg1f1WwAkKP3NU3kZgewID-fMSX4w4OXiM49ajKCo_9h6hjn2LTmrNsSw23uVQo7yW2P2A2ROoeHM4ospfh_aMlRfzejq9u-Pt70aWCBZaI7EgTCbVQmsbwJDdpWnLbpMnvZkg0TwE8k9b1Y7MRHANeg3-BcWA_RqmG5qHAzuOqbafQNln2gkTf9yqQZqJovb35CetSdJwfyExyiNK4N3oIRa7YXubABnsQJD5nNqW5kU98"
        width={1200}
      />
      <div className="absolute top-6 left-6 z-20 flex gap-2">
        <span className="px-3 py-1.5 glass-panel rounded-full text-xs font-bold flex items-center gap-2 border border-outline-variant/10">
          <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse" />
          LIVE POSITION
        </span>
        <span className="px-3 py-1.5 glass-panel rounded-full text-xs font-bold border border-outline-variant/10">
          VESSEL: MSC AMELIA
        </span>
      </div>
      <div className="absolute bottom-6 left-6 right-6 z-20 glass-panel rounded-xl p-6 border border-white/20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary-container p-3 rounded-lg text-white">
              <span className="material-symbols-outlined">directions_boat</span>
            </div>
            <div>
              <p className="text-xs font-medium text-on-surface-variant">
                Current Status
              </p>
              <h3 className="text-xl font-bold text-primary">
                In Transit - Indian Ocean
              </h3>
            </div>
          </div>
          <div className="flex gap-8">
            {trackingSummaryStats.map((stat) => (
              <div key={stat.label} className="text-right">
                <p className="text-xs font-medium text-on-surface-variant">
                  {stat.label}
                </p>
                <p className="text-lg font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

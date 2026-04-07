import { glossaryItems } from "./trackingData";

export default function TrackingTermsSection() {
  return (
    <section className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
      {glossaryItems.map((item) => (
        <div
          key={item.title}
          className="p-4 bg-surface-container-lowest rounded-lg group cursor-help transition-all hover:shadow-sm border border-outline-variant/10"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm text-secondary">
              help
            </span>
            <h5 className="text-xs font-bold text-primary uppercase">
              {item.title}
            </h5>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
}

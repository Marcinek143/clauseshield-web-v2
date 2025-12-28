import Link from "next/link";

type PersonaCardProps = {
  href: string;
  imageClassName: string;
  imageAlt: string;
  icon: string;
  title: string;
  description: string;
  cta: string;
};

export default function PersonaCard({
  href,
  imageClassName,
  imageAlt,
  icon,
  title,
  description,
  cta,
}: PersonaCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-white dark:bg-navy-800 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-navy-700 overflow-hidden"
    >
      <div
        className={`h-48 w-full bg-cover bg-center ${imageClassName}`}
        data-alt={imageAlt}
      >
        <div className="w-full h-full bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
          <span className="material-symbols-outlined text-white text-4xl bg-white/20 p-2 rounded-lg backdrop-blur-sm border border-white/10">
            {icon}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-navy-700">
          <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
            {cta}{" "}
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

type FeatureSectionProps = {
  sectionClassName: string;
  containerClassName: string;
  reverse?: boolean;
  icon: string;
  iconWrapperClassName: string;
  title: string;
  description: string;
  items: string[];
  imageClassName: string;
  imageAlt: string;
};

export default function FeatureSection({
  sectionClassName,
  containerClassName,
  reverse = false,
  icon,
  iconWrapperClassName,
  title,
  description,
  items,
  imageClassName,
  imageAlt,
}: FeatureSectionProps) {
  const layoutClassName = reverse
    ? "flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
    : "flex flex-col lg:flex-row items-center gap-12 lg:gap-20";

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={layoutClassName}>
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className={iconWrapperClassName}>
              <span className="material-symbols-outlined text-3xl">
                {icon}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              {title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {description}
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="material-symbols-outlined text-green-500">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="rounded-2xl bg-slate-100 dark:bg-navy-800 p-2 shadow-inner border border-slate-200 dark:border-navy-700">
              <div
                className={`w-full aspect-square md:aspect-video rounded-xl bg-cover bg-center shadow-lg ${imageClassName}`}
                data-alt={imageAlt}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

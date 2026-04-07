import Image from "next/image";

export default function FleetMapPreview() {
  return (
    <div className="rounded-xl overflow-hidden relative group h-48">
      <Image
        alt="Global fleet tracking map"
        className="w-full h-full object-cover"
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkiTIPcn16J4AbL_brHQSzk08MCksRuL0u6jUJCtVzopKvE_4EkwexTDBXtq0YMpiEG1uPeGGy7JUPzTiip7g05wq2yI_Np_YnvA6C209-yjX06XTPBkEag4jSwwsEKuSQ8B3Ddpt676o_VF_ed9PsXJLT4rSCSZteFWBwAHSOrqHBjL3RylQeuhKI4o8QOaDbD-c9GjIYFa9RTl-BfuANRmVAfTMWdr2ogqwNdAZXJJ8zMFwGwfJzuC4RMih4Ekq1P9LV-EQWrc"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
        <div className="text-white">
          <p className="text-xs font-bold uppercase tracking-widest opacity-70">
            Global Network
          </p>
          <h4 className="font-bold">Live Fleet Tracking</h4>
        </div>
        <span className="ml-auto material-symbols-outlined text-white">
          open_in_new
        </span>
      </div>
    </div>
  );
}

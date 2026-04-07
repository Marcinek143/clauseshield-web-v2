const updates = [
  {
    status: "Port Arrival",
    title: "Rotterdam Terminal E1",
    description: "Vessel berthed 14:02 UTC. 4 days free time initiated.",
    time: "12 MINS AGO",
    statusClassName: "text-secondary",
    dotClassName: "bg-secondary",
    wrapperClassName: "",
  },
  {
    status: "Transshipment",
    title: "Port of Singapore",
    description: "Gate-out recorded. Estimated departure in 18h.",
    time: "2 HOURS AGO",
    statusClassName: "text-on-surface-variant",
    dotClassName: "bg-surface-variant",
    wrapperClassName: "",
  },
  {
    status: "Gate Out",
    title: "Los Angeles Port",
    description: "Container released to carrier. Audit complete.",
    time: "5 HOURS AGO",
    statusClassName: "text-on-surface-variant",
    dotClassName: "bg-surface-variant",
    wrapperClassName: "pb-2",
  },
];

export default function LivePipeline() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-8 ghost-border">
      <h2 className="text-xl font-bold headline-font text-primary mb-6">
        Live Pipeline
      </h2>
      <div className="space-y-8">
        {updates.map((update) => (
          <div
            key={`${update.status}-${update.time}`}
            className={`relative pl-8 border-l-2 border-secondary/20 ${update.wrapperClassName}`.trim()}
          >
            <div
              className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full ${update.dotClassName} ring-4 ring-white`}
            />
            <span
              className={`text-[10px] font-bold uppercase block mb-1 ${update.statusClassName}`}
            >
              {update.status}
            </span>
            <p className="text-sm font-bold text-primary">{update.title}</p>
            <p className="text-xs text-on-surface-variant mt-1">
              {update.description}
            </p>
            <span className="text-[10px] font-medium text-outline mt-2 block">
              {update.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

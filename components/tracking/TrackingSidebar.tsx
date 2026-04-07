import KeyMilestonesCard from "./KeyMilestonesCard";
import ShipmentHealthCard from "./ShipmentHealthCard";

export default function TrackingSidebar() {
  return (
    <div className="md:col-span-4 flex flex-col gap-6">
      <ShipmentHealthCard />
      <KeyMilestonesCard />
    </div>
  );
}

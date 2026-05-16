import { LOCATION_LABEL } from "@/config";

export function UtilityBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
      Junk removal quote help — {LOCATION_LABEL}
    </div>
  );
}

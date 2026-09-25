import { Briefcase } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-6 py-4">
        <Briefcase className="size-5" />
        <span className="font-heading text-base font-semibold">Job Portal Hub</span>
      </div>
    </header>
  );
}

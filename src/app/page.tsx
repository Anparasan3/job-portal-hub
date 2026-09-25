import { PortalDashboard } from "@/components/portal-dashboard";
import { SiteHeader } from "@/components/site-header";
import { portalGroups } from "@/lib/portals";

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-b from-muted/40 to-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Quick access to your job portals
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            All your recruitment sites, organized in one place.
          </p>
        </div>
        <PortalDashboard portalGroups={portalGroups} />
      </main>
    </div>
  );
}

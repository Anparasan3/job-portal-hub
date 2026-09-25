"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { PortalCard } from "@/components/portal-card";
import { Input } from "@/components/ui/input";
import type { PortalGroup } from "@/lib/portals";

export function PortalDashboard({ portalGroups }: { portalGroups: PortalGroup[] }) {
  const [query, setQuery] = useState("");

  const filteredGroups = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return portalGroups;

    return portalGroups
      .map((group) => ({
        ...group,
        portals: group.portals.filter(
          (portal) =>
            portal.name.toLowerCase().includes(needle) ||
            portal.description.toLowerCase().includes(needle),
        ),
      }))
      .filter((group) => group.portals.length > 0);
  }, [portalGroups, query]);

  return (
    <div className="flex flex-col gap-10">
      <div className="relative max-w-sm">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search portals..."
          className="pl-9"
          aria-label="Search job portals"
        />
      </div>

      {filteredGroups.length === 0 ? (
        <p className="text-sm text-muted-foreground">No portals match &quot;{query}&quot;.</p>
      ) : (
        filteredGroups.map((group) => (
          <section key={group.category} aria-labelledby={`${group.category}-heading`}>
            <h2
              id={`${group.category}-heading`}
              className="mb-4 font-heading text-sm font-medium tracking-wide text-muted-foreground uppercase"
            >
              {group.label}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.portals.map((portal) => (
                <PortalCard key={portal.id} portal={portal} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}

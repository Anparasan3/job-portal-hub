import { ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { Portal } from "@/lib/portals";

function faviconUrl(portalUrl: string) {
  const { hostname } = new URL(portalUrl);
  return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
}

export function PortalCard({ portal }: { portal: Portal }) {
  return (
    <a
      href={portal.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${portal.name} in a new tab`}
      className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="h-full transition-shadow group-hover:shadow-md">
        <CardContent className="flex items-start gap-3">
          <Avatar className="rounded-md">
            <AvatarImage src={faviconUrl(portal.url)} alt="" />
            <AvatarFallback className="rounded-md">{portal.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h3 className="truncate font-heading text-sm font-medium">{portal.name}</h3>
              <ExternalLink className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <p className="mt-0.5 line-clamp-2 text-sm text-muted-foreground">
              {portal.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

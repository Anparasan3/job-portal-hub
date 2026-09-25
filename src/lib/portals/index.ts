import { groupBy, sortBy } from "@anparasan3/devmate-utils";
import { portals } from "./data";
import { portalListSchema, type Portal, type PortalCategory } from "./schema";

const CATEGORY_ORDER: Record<PortalCategory, number> = {
  general: 0,
  tech: 1,
  remote: 2,
  research: 3,
};

const CATEGORY_LABELS: Record<PortalCategory, string> = {
  general: "General",
  tech: "Tech-Focused",
  remote: "Remote & Freelance",
  research: "Company Research",
};

export interface PortalGroup {
  category: PortalCategory;
  label: string;
  portals: Portal[];
}

const validatedPortals = portalListSchema.parse(portals);
const groupedByCategory = groupBy(validatedPortals, (portal) => portal.category);

export const portalGroups: PortalGroup[] = sortBy(
  Object.entries(groupedByCategory).map(([category, categoryPortals]) => ({
    category: category as PortalCategory,
    label: CATEGORY_LABELS[category as PortalCategory],
    portals: sortBy(categoryPortals ?? [], (portal) => portal.name),
  })),
  (group) => CATEGORY_ORDER[group.category],
);

export type { Portal, PortalCategory } from "./schema";

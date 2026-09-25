import { z } from "zod";

export const portalCategorySchema = z.enum(["general", "tech", "remote", "research"]);

export const portalSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  url: z.url(),
  description: z.string().min(1),
  category: portalCategorySchema,
});

export const portalListSchema = z.array(portalSchema);

export type Portal = z.infer<typeof portalSchema>;
export type PortalCategory = z.infer<typeof portalCategorySchema>;

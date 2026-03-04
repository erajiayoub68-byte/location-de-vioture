import { z } from 'zod';

export const searchSchema = z.object({
  city: z.string().min(1),
  start: z.string().datetime(),
  end: z.string().datetime(),
  type: z.string().optional(),
  price: z.string().optional(),
  gear: z.string().optional()
});

export type SearchInput = z.infer<typeof searchSchema>;

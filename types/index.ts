import { cartItemSchema, insertCartSchema, insertProductSchema } from '@/lib/validators';
import * as z from 'zod';

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  createAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;


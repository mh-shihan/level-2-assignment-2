import { z } from 'zod/v4';

// Variant Validation Schema
export const variantValidationSchema = z.object({
  type: z.string().nonempty('Variant type is required'),
  value: z.string().nonempty('Variant value is required'),
});

// Inventory Validation Schema
export const inventoryValidationSchema = z.object({
  quantity: z.number(), // required by default
  inStock: z.boolean(), // required by default
});

// Product Validation Schema
export const productValidationSchema = z.object({
  name: z.string().min(3).max(100).nonempty('Name is required'),
  description: z.string().nonempty('Description is required'),
  price: z.number().min(0, 'Price must be positive'),
  category: z.string().nonempty('Category is required'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  variants: z
    .array(variantValidationSchema)
    .min(1, 'At least one variant is required'),
  inventory: inventoryValidationSchema,
});

import { z } from 'zod/v4';

export const orderValidationSchema = z.object({
  email: z.string().nonempty({ message: 'Email is required' }),
  productId: z
    .string()
    .min(1, { message: 'Product Id is required' })
    .nonempty({ message: 'Product Id is required' }),
  price: z.number().min(0, 'Price must be positive'),
  quantity: z
    .number({ error: 'Quantity is required' })
    .min(0, { message: 'Quantity can not be less than 0' }),
});

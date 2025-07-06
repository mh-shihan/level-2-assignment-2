import mongoose from 'mongoose';
import { TInventory, TProduct, TVariant } from './product/product.interface';
const { Schema } = mongoose;

const variantSchema = new Schema<TVariant>({
  type: String,
  value: String,
});

const inventorySchema = new Schema<TInventory>({
  quantity: String,
  inStock: Boolean,
});

const productSchema = new Schema<TProduct>({
  name: String,
  description: String,
  price: Number,
  category: String,
  tags: [String],
  variants: variantSchema,
  inventory: inventorySchema,
});

export const Product = mongoose.model('Product', productSchema);

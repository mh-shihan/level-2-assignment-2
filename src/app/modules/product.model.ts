import mongoose from 'mongoose';
import { TInventory, TProduct, TVariant } from './product/product.interface';
const { Schema } = mongoose;

const variantSchema = new Schema<TVariant>({
  type: {
    type: String,
    required: [true, 'Variant type is required'],
  },
  value: {
    type: String,
    required: [true, 'Variant value is required'],
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: [true, 'Inventory quantity is required'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'InStock in required'],
  },
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  tags: {
    type: [String],
    required: [true, 'Tags are required'],
    validate: {
      validator: (v: string[]) => v.length > 0,
      message: 'At least one tag is required',
    },
  },
  variants: {
    type: [variantSchema],
    required: [true, 'Variants are required'],
    validate: {
      validator: (v: TVariant[]) => Array.isArray(v) && v.length > 0,
      message: 'At least one variant is required',
    },
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'Inventory is required'],
    validate: {
      validator: (v: TInventory) => v != null,
      message: 'Inventory must be provided',
    },
  },
});

export const Product = mongoose.model('Product', productSchema);

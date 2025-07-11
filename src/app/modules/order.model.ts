import mongoose, { Schema } from 'mongoose';
import { TOrder } from './order/order.interface';

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  productId: {
    type: String,
    required: [true, 'Product Id is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
});

export const Order = mongoose.model('Order', orderSchema);

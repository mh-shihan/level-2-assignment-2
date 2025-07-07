import mongoose from 'mongoose';
import { Order } from '../order.model';
import { TOrder } from './order.interface';
import { Product } from '../product.model';
import { orderValidationSchema } from './order.validation';

const createOrderIntoDB = async (orderData: TOrder) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const product = await Product.findById(orderData.productId).session(
      session,
    );

    if (!product) {
      throw { success: false, message: 'Order not found' };
    }

    if (product.inventory?.quantity < orderData.quantity)
      throw {
        success: false,
        message: 'Insufficient quantity available in inventory',
      };

    //   Update inventory
    product.inventory.quantity -= orderData.quantity;
    if (product.inventory.quantity <= 0) {
      product.inventory.inStock = false;
    }
    await product.save({ session });

    // Create order
    const validatedOrder = orderValidationSchema.parse(orderData);
    const [order] = await Order.create([validatedOrder], { session });

    await session.commitTransaction();
    session.endSession();

    return order;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const getOrdersFromDB = async (email?: string) => {
  const filter = email ? { email } : {};
  const result = await Order.find(filter);
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  getOrdersFromDB,
};

import { Order } from '../order.model';
import { TOrder } from './order.interface';

const createOrderIntoDB = async (order: TOrder) => {
  const result = await Order.create(order);
  return result;
};

export const orderServices = {
  createOrderIntoDB,
};

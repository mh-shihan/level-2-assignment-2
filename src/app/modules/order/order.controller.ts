import { Request, Response } from 'express';
import { orderServices } from './order.service';
import { orderValidationSchema } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body.order;
    const validatedOrder = orderValidationSchema.parse(order);
    const result = await orderServices.createOrderIntoDB(validatedOrder);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Order  created successfully!',
        data: result,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};
const getOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const result = await orderServices.getOrdersFromDB(
      email as string | undefined,
    );

    if (result) {
      res.status(200).json({
        success: true,
        message: email
          ? 'Orders fetched successfully!'
          : 'Orders fetched successfully for user email!',
        data: result,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const orderController = {
  createOrder,
  getOrders,
};

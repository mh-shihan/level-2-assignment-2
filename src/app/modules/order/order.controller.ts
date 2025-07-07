import { Request, Response } from 'express';
import { orderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body.order;
    const result = await orderServices.createOrderIntoDB(order);

    // const result = await ProductServices.createProductIntoDB(validatedProduct);

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

export const orderController = {
  createOrder,
};

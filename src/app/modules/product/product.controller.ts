import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { productValidationSchema } from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    const validatedProduct = productValidationSchema.parse(productData);

    const result = await ProductServices.createProductIntoDB(validatedProduct);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Product created successfully!',
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

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    if (result) {
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
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

export const productController = {
  createProduct,
  getAllProducts,
};

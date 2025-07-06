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
    const searchTerm = req.query.searchTerm?.toString() || '';
    if (searchTerm) {
      const searchedProduct =
        await ProductServices.searchProductFromDB(searchTerm);

      if (searchedProduct) {
        res.status(200).json({
          success: true,
          message: `Products matching search term ${searchTerm} fetched successfully!`,
          data: searchedProduct,
        });
      }
    } else {
      const result = await ProductServices.getAllProductsFromDB();

      if (result) {
        res.status(200).json({
          success: true,
          message: 'Products fetched successfully!',
          data: result,
        });
      }
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

const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSpecificProductFromDB(productId);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'Product fetched successfully!',
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const result = await ProductServices.updateProductInDB(productId, data);

    const validatedProduct = productValidationSchema.parse(result);

    if (validatedProduct) {
      res.status(200).json({
        success: true,
        message: 'Product updated successfully!',
        data: validatedProduct,
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductFromDB(productId);
    if (result.deletedCount > 0) {
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
        data: null,
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

const searchProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query;
    console.log(searchTerm);

    // if (result.deletedCount > 0) {
    //   res.status(200).json({
    //     success: true,
    //     message: "Products matching search term 'iphone' fetched successfully!",
    //     data: null,
    //   });
    // }
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
  getSpecificProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};

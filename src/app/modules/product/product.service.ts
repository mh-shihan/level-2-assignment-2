import { Product } from '../product.model';
import { TProduct } from './product.interface';

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
};

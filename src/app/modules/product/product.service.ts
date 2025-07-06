import { Product } from '../product.model';
import { TProduct } from './product.interface';
import { PartialDeep } from 'type-fest';

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSpecificProductFromDB = async (productId: string) => {
  const result = await Product.findOne({ _id: productId });
  return result;
};

const updateProductInDB = async (
  id: string,
  updateData: PartialDeep<TProduct>,
) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true, runValidators: true },
  );

  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

const searchProductFromDB = async (searchTerm: string) => {
  const normalizedSearchTerm = searchTerm.replace(/\s+/g, '').toLowerCase();
  const result = await Product.find({
    normalizedName: { $regex: normalizedSearchTerm, $options: 'i' },
  });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSpecificProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
  searchProductFromDB,
};

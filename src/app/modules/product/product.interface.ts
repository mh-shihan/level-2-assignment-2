export type TVariant = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  normalizedName?: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  //tags: Array<string>,
  variants: TVariant[];
  inventory: TInventory;
};

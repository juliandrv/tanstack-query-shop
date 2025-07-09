export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
}

export type ProductLike = Omit<Product, "id" | "rating"> & {
  id?: number;
};

export interface Rating {
  rate: number;
  count: number;
}

export { productsApi } from "./api/productsApi";

export { ProductCard } from "./components/ProductCard";
export { ProductList } from "./components/ProductList";

export { useGetProducts } from "./hooks/useGetProducts";
export { useGetProduct } from "./hooks/useGetProduct";
export { usePrefetchProduct } from "./hooks/usePrefetchProduct";
export { useProductMutation } from "./hooks/useProductMutation";

export type { Product, ProductLike } from "./interfaces/product";

export { StoreLayout } from "./layout/StoreLayout";

export { CompleteListPage } from "./pages/CompleteListPage";
export { MensPage } from "./pages/MensPage";
export { NewProduct } from "./pages/NewProduct";
export { WomensPage } from "./pages/WomensPage";
export { ProductById } from "./pages/ProductById";

export * as productActions from "./services/actions";

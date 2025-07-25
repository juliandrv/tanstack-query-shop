import { ProductList, useGetProducts } from "..";

export const CompleteListPage = () => {
  const { isLoading, products } = useGetProducts({});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      {isLoading && <p>Cargando...</p>}

      <ProductList products={products} />
    </div>
  );
};

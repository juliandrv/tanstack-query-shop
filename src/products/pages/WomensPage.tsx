import { ProductList, useGetProducts } from "..";

export const WomensPage = () => {
  const { isLoading, products } = useGetProducts({
    filterKey: "women's clothing",
  });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      {isLoading && <p>Cargando...</p>}

      <ProductList products={products} />
    </div>
  );
};

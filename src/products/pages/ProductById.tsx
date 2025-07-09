import { useParams } from "react-router-dom";
import { useGetProduct } from "../hooks/useGetProduct";
import { ProductCard } from "../components/ProductCard";

export const ProductById = () => {
  const { id } = useParams();
  const { product, isLoading } = useGetProduct({
    id: Number(id),
  });

  window.scrollTo(0, 0);

  return (
    <div className="flex-col m-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Producto</h1>

      {isLoading ? <h1>Cargando...</h1> : null}

      {product && <ProductCard product={product} fullDescription />}
    </div>
  );
};

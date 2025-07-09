import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductLike } from "../interfaces/product";
import { productActions } from "..";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productActions.createProduct,

    onMutate: (data) => {
      console.log("onMutate", data);
      // Optimistic Product
      const optimisticProduct: ProductLike = {
        id: Date.now(), // Use a temporary ID
        ...data,
      };

      // Almacenar el producto optimista en el caché
      queryClient.setQueryData<ProductLike[]>(
        ["products", { filterKey: data.category }],
        (oldData) => {
          if (!oldData) return [optimisticProduct];
          return [...oldData, optimisticProduct];
        }
      );

      return { optimisticProduct };
    },

    onSuccess: (data, variables, context) => {
      console.log("onSuccess", { data, variables, context });

      /* queryClient.invalidateQueries({
        queryKey: ["products", { filterKey: data.category }],
      }); */

      queryClient.removeQueries({
        queryKey: ["product", context?.optimisticProduct.id],
      });

      queryClient.setQueryData<ProductLike[]>(
        ["products", { filterKey: data.category }],
        (oldData) => {
          if (!oldData) return [data];

          return oldData.map((cacheProduct) =>
            cacheProduct.id === context?.optimisticProduct.id
              ? data
              : cacheProduct
          );
        }
      );

      queryClient.setQueryData<ProductLike[]>(["products"], (oldData) => {
        if (!oldData) return [data];

        return oldData.map((cacheProduct) =>
          cacheProduct.id === context?.optimisticProduct.id
            ? data
            : cacheProduct
        );
      });
    },

    onError: (error, variables, context) => {
      console.error("onError", { error, variables, context });

      queryClient.removeQueries({
        queryKey: ["product", context?.optimisticProduct.id],
      });

      queryClient.setQueryData<ProductLike[]>(
        ["products", { filterKey: variables.category }],
        (oldData) => {
          if (!oldData) return [];

          return oldData.filter(
            (cacheProduct) => cacheProduct.id !== context?.optimisticProduct.id
          );
        }
      );
    },
    /* onSettled: () => {
      console.log("La mutación se ha completado (con éxito o error).");
    }, */
  });

  return {
    mutation,
  };
};

import { useForm, SubmitHandler } from "react-hook-form";

import {
  Button,
  Input,
  Textarea,
  Image,
  Select,
  SelectItem,
} from "@heroui/react";
import { useProductMutation } from "../hooks/useProductMutation";

interface FormsInputs {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const NewProduct = () => {
  const productMutation = useProductMutation();

  const { register, handleSubmit, watch } = useForm<FormsInputs>({
    defaultValues: {
      title: "LED Keyboard",
      price: 39.99,
      description:
        "RGB LED Backlit Mechanical Gaming Keyboard with 104 Keys, Blue Switches, and Full N-Key Rollover for Windows PC",
      category: "men's clothing",
      image: "https://m.media-amazon.com/images/I/71GtPutSN1L.jpg",
    },
  });

  const newImage = watch("image");

  const onSubmit: SubmitHandler<FormsInputs> = (data) => {
    productMutation.mutation.mutate(data);
  };

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <div className="flex justify-around items-center">
        <div className="flex-col w-[500px]">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("title")}
              className="mt-2"
              type="text"
              label="Titulo del producto"
            />
            <Input
              {...register("price", {
                valueAsNumber: true,
              })}
              className="mt-2"
              type="number"
              label="Precio del producto"
            />
            <Input
              {...register("image")}
              className="mt-2"
              type="url"
              label="Url del producto"
            />
            <Textarea
              {...register("description")}
              className="mt-2"
              label="Descripcion del producto"
            />
            <Select
              {...register("category")}
              className="mt-2"
              label="Categoria del producto"
            >
              <SelectItem key="men's clothing">Men's clothing</SelectItem>
              <SelectItem key="women's clothing">Women's clothing</SelectItem>
              <SelectItem key="jewelry">Jewelry</SelectItem>
              <SelectItem key="electronics">Electronics</SelectItem>
            </Select>

            <br />
            <Button
              type="submit"
              className="mt-2"
              color="primary"
              isDisabled={productMutation.mutation.isPending}
            >
              {productMutation.mutation.isPending
                ? "Cargando..."
                : "Crear producto"}
            </Button>
          </form>
        </div>

        <div
          className="bg-white rounded-2xl p-10 flex items-center"
          style={{
            width: "500px",
            height: "600px",
          }}
        >
          <Image src={newImage} />
        </div>
      </div>
    </div>
  );
};

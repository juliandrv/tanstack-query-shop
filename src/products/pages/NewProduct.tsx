import {
  Button,
  Input,
  Textarea,
  Image,
  Select,
  SelectItem,
} from "@heroui/react";

export const NewProduct = () => {
  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <div className="flex justify-around items-center">
        <div className="flex-col w-[500px]">
          <form className="w-full">
            <Input className="mt-2" type="text" label="Titulo del producto" />
            <Input className="mt-2" type="number" label="Precio del producto" />
            <Input className="mt-2" type="url" label="Url del producto" />
            <Textarea className="mt-2" label="Descripcion del producto" />
            <Select className="mt-2" label="Categoria del producto">
              <SelectItem key="men's clothing">Men's clothing</SelectItem>
              <SelectItem key="women's clothing">Women's clothing</SelectItem>
              <SelectItem key="jewelery">Jewelery</SelectItem>
              <SelectItem key="electronics">Electronics</SelectItem>
            </Select>

            <br />
            <Button className="mt-2" color="primary">
              Crear
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
          <Image src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
        </div>
      </div>
    </div>
  );
};

import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { Product, Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: Category;
  };
}

const products: Product[] = initialData.products;

const CategoryPage = ({ params }: Props) => {
  const { id } = params;

  // if (id != "kid" && id != "women" && id != "men"){
  //   return notFound();
  // }
  const labels: Record<Category, string> = {
    'men': "hombres",
    'women': "mujeres",
    'kid': "niños",
    'unisex': 'todos'
  };
  const productByGender = products.filter((p) => p.gender == id) ?? null;

  return (
    <div>
      <Title
        title={`Artículos de ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={productByGender} />
    </div>
  );
};

export default CategoryPage;

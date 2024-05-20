import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { Product } from "@/interfaces";
import { initialData } from "@/seed/seed";


const products:Product[] = initialData.products;


export default function HomePage() {
  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos"
      className="mb-2"
      />
       <ProductGrid products={products}/>
    </>
  );
}

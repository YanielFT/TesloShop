import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const CategoryPage = ({ params }: Props) => {
  const { id } = params;
  if (id != "kids" && id != "women" && id != "men") 
    return notFound();

  return (
    <div>
      <h1>Category Page</h1>
    </div>
  );
};

export default CategoryPage;

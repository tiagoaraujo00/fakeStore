import { useState, useEffect } from "react";
import { IProductList } from "./interfaces";
import { ProductCard } from "./productCard";
import { ContainerProductListStyled } from "./styles";

const ProductList = () => {
  const [productsList, setProductsList] = useState<Array<IProductList>>([]);

  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductsList(json));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ContainerProductListStyled>
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            img={product.image}
            price={product.price}
          />
        ))}
      </ContainerProductListStyled>
    </div>
  );
};

export { ProductList };

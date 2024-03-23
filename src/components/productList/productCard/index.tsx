import { useState } from "react";
import { ProductDetails } from "../../productDetails";
import { IProductCardProps } from "./interfaces";
import {
  ButtonProductCardStyled,
  ContainerImageProductCardStyled,
  ContainerProductCardStyled,
  ImageProductCardStyled,
  PriceProductCardStyled,
  TitleProductCardStyled,
} from "./styles";

const ProductCard = ({ title, price, img, description }: IProductCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <ContainerProductCardStyled>
        <ContainerImageProductCardStyled>
          <ImageProductCardStyled src={img} alt={title} />
        </ContainerImageProductCardStyled>
        <TitleProductCardStyled>{title}</TitleProductCardStyled>
        <PriceProductCardStyled>R$ {price}</PriceProductCardStyled>
        <ButtonProductCardStyled
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Comprar
        </ButtonProductCardStyled>
      </ContainerProductCardStyled>
      <ProductDetails
        isOpen={isVisible}
        setIsOpen={setIsVisible}
        productData={{
          title: title,
          description: description,
          price: price,
          img: img,
        }}
      />
    </div>
  );
};

export { ProductCard };

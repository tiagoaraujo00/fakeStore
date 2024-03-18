import { useState } from "react";
import { ProductModalDetail } from "../../productModalDetail";
import { IProductCardProps } from "./interfaces";
import {
  ButtonProductCardStyled,
  ContainerImageProductCardStyled,
  ContainerProductCardStyled,
  ImageProductCardStyled,
  PriceProductCardStyled,
  TitleProductCardStyled,
} from "./styles";

const ProductCard = ({ title, price, img }: IProductCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <ContainerProductCardStyled>
        <ContainerImageProductCardStyled>
          <ImageProductCardStyled src={img} alt={title} />
        </ContainerImageProductCardStyled>
        <TitleProductCardStyled>{title}</TitleProductCardStyled>
        <PriceProductCardStyled>R$ {price}</PriceProductCardStyled>
        <ButtonProductCardStyled onClick={() =>{setIsVisible(true)}}>Comprar</ButtonProductCardStyled>
      </ContainerProductCardStyled>
      <ProductModalDetail isOpen={isVisible} setIsOpen={setIsVisible} />
    </div>
  );
};

export { ProductCard };

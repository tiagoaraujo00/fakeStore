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
  return (
    <ContainerProductCardStyled>
      <ContainerImageProductCardStyled>
        <ImageProductCardStyled src={img} alt={title} />
      </ContainerImageProductCardStyled>
      <TitleProductCardStyled>{title}</TitleProductCardStyled>
      <PriceProductCardStyled>R$ {price}</PriceProductCardStyled>
      <ButtonProductCardStyled>Comprar</ButtonProductCardStyled>
    </ContainerProductCardStyled>
  );
};

export { ProductCard };

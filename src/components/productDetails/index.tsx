import { IProductModalDetailProps } from "./interfaces";
import {
  ContainerProductModalDetailStyled,
  ContentModalProductDetailsStyled,
  FooterModalProductDetails,
  HeaderModalProductDetailStyled,
  ImgContentProductDetailModal,
  PriceRightContentModalProductStyled,
  RightContentModalProductDetailStyled,
  WrapperModalProductDetailStyled,
} from "./styles";
import { X } from 'lucide-react';

const ProductDetails = ({
  isOpen,
  setIsOpen,
  productData,
}: IProductModalDetailProps) => {
  return isOpen ? (
    <ContainerProductModalDetailStyled>
      <WrapperModalProductDetailStyled>
        <HeaderModalProductDetailStyled>
          <h1>{productData.title}</h1>
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <X />
          </button>
        </HeaderModalProductDetailStyled>
        <ContentModalProductDetailsStyled>
          <ImgContentProductDetailModal
            src={productData.img}
            alt={productData.title}
          />
          <RightContentModalProductDetailStyled>
            <h3>{productData.description}</h3>
            <PriceRightContentModalProductStyled>R$ {productData.price}</PriceRightContentModalProductStyled>
          </RightContentModalProductDetailStyled>
        </ContentModalProductDetailsStyled>
        <FooterModalProductDetails>
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            Fechar
          </button>
          <button>Adicionar ao carrinho</button>
        </FooterModalProductDetails>
      </WrapperModalProductDetailStyled>
    </ContainerProductModalDetailStyled>
  ) : (
    <></>
  );
};

export { ProductDetails };

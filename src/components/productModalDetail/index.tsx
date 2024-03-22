import { IProductModalDetailProps } from "./interfaces";
import {
  ContainerProductModalDetailStyled,
  ContentModalProductDetailsStyled,
  FooterModalProductDetails,
  HeaderModalProductDetailStyled,
  WrapperModalProductDetailStyled,
} from "./styles";

const ProductModalDetail = ({
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
            Fechar
          </button>
        </HeaderModalProductDetailStyled>
        <ContentModalProductDetailsStyled></ContentModalProductDetailsStyled>
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

export { ProductModalDetail };

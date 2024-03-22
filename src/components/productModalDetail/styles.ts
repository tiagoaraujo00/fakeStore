import styled from "styled-components";

export const ContainerProductModalDetailStyled = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperModalProductDetailStyled = styled.div`
  width: 500px;
  background-color: white;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;

export const HeaderModalProductDetailStyled = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 10px;
  border-bottom: 1px solid black;
  align-items: center;
`;

export const FooterModalProductDetails = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  height: 60px;
  padding: 10px;
  border-top: 1px solid black;
`;

export const ContentModalProductDetailsStyled = styled.div`
  min-height: 50px;
  padding: 10px;
`

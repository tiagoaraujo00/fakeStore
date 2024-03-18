import styled from "styled-components";

export const ContainerProductCardStyled = styled.div`
  width: 200px;
  height: 300px;
  background-color: #FFF;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.12);
`;

export const ImageProductCardStyled = styled.img`
  width: 150px;
  max-height: 200px;
  object-fit: contain;
`;

export const ContainerImageProductCardStyled = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleProductCardStyled = styled.h3`
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-weight: 500;
`

export const PriceProductCardStyled = styled.p`
  font-weight: bold;
`

export const ButtonProductCardStyled = styled.button`
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  border: none;
  font-weight: bold;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
`
import { IProductModalDetailProps } from "./interfaces";

const ProductModalDetail = ({ isOpen, setIsOpen }: IProductModalDetailProps) => {
  
  return isOpen ? (
    <div style={{zIndex: 999}}>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        Fechar
      </button>
    </div>
  ) : (
    <></>
  );
};

export { ProductModalDetail };

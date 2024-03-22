export interface IProductModalDetailProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  productData: {
    title: string;
    img: string;
    price: number;
    description: string;
  }
}

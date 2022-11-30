export interface IProduct {
  date: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  id: number;
}

export interface IProductsProps {
  products: IProduct[]
}

export interface IItemProps {
  product: IProduct
}

export interface ISection {
  title: string,
  children: React.ReactNode
}
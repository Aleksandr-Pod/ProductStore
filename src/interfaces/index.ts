export interface IProduct {
    name: string;
    category: string;
    price: number;
    quantity: number;
    id: number;
}

export interface ISection {
    title: string,
    children: React.ReactNode
  }
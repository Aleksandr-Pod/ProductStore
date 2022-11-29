import { Item } from './Item';
import { IProduct } from '../interfaces';

interface IProps {
  products: IProduct[]
}

export const Products = ({ products }: IProps) => {

  return (
    <>
      <table>
        <tr>
          <th className='category'>category</th>
          <th className='name'>name</th>
          <th className='price'>price</th>
        </tr>
      
        { products.map( item => (
          <Item key={item.id} product={item} />
        ))}
      </table>
    </>
  )
} 
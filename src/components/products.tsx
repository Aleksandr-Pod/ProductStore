import { Item } from './Item';
import { IProductsProps } from '../interfaces';

export const Products = ({ products }: IProductsProps) => {

  return (
    <table>
      <thead>
        <tr>
          <th className="date">date</th>
          <th className='category'>category</th>
          <th className='name'>name</th>
          <th className='price'>price</th>
          <th className="qtty">quantity</th>
        </tr>
      </thead>
      <tbody>
        { products.map( item => (
          <Item key={item.id} product={item} />
        ))}
      </tbody>
    </table>
  )
} 
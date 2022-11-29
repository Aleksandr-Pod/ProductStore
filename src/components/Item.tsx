import { IProduct } from '../interfaces';

interface IProps {
    product: IProduct
}
export const Item = ({product}: IProps) => {

    return (
        <tr>
            <td>{product.category}</td>
            <td className='productName'>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
        </tr>
    )
}
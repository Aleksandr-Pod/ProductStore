import { IItemProps } from '../interfaces';

export const Item = ({product}: IItemProps) => {

    return (
        <tr>
            <td>{product.date.slice(0, 19).replace("T", " ")}</td>
            <td>{product.category}</td>
            <td className='productName'>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
        </tr>
    )
}
import { nanoid } from 'nanoid';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../hooks';
import { addProduct } from '../Redux/productsSlice';
import { IProduct } from '../interfaces';

interface IProps {
  showModal: (arg: boolean) => void
}
export const InputForm = ({ showModal }: IProps) => {
  const dispatch = useAppDispatch();

  const addProductSchema = Yup.object().shape({
    date: Yup.string().required('date is required'),
    name: Yup.string().required('name is required'),
    category: Yup.string().required('if unknown press -unsorted-'),
    price: Yup.number().positive()
      .min(0, '0 is minimum')
      .max(99999, '99999 is maximum')
      .required('if unknown press 0'),
    quantity: Yup.number().positive().min(0, '0 is minimum').max(999, '999 is maximum')
  });

  const onSubmit = ({date, category, name, price, quantity}: IProduct, action) => {

    dispatch(addProduct({id: nanoid(), date, category, name, price, quantity}));
    action.resetForm();
    showModal(false);
  }
  return (
    <Formik
      initialValues={{
        date: new Date().toISOString().slice(0, 19),
        category: "",
        name: "",
        price: 0,
        quantity: 0
      }}
      validationSchema={addProductSchema}
      onSubmit={onSubmit}>
      <Form>
        <label>date
          <Field type="text" name="date" required />
        </label>
        <label>category
          <Field type="text" name="category" required />
        </label>
        <label>name
          <Field type="text" name="name" required />
        </label>
        <label>price
          <Field type="number" name="price" required />
        </label>
        <label>quantity
          <Field type="number" name="quantity" required />
        </label>
        <button type="submit">Add product</button>
      </Form>
    </Formik>
  )
}
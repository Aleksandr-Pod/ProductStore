import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addProduct } from '../Redux/productsSlice';

export const InputForm = ({ showModal }) => {
  const dispatch = useDispatch();

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

  const onSubmit = (value, action) => {
    value.id = nanoid();
    
    const params = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value)
    }

    fetch ('http://localhost:3010/products', params)
    .then(res => res.json())
    .then(data => console.log("data:", data) )
    .catch(err => console.log(err));

    dispatch(addProduct(value));

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
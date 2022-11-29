// import { useSelector, useDispatch } from 'react-redux';

// styled components
// import { InputItem } from "./InputForm.styled";
// other libs
import { nanoid } from 'nanoid';
import { Formik, Form } from 'formik';

export function InputForm () {
  // const products = useSelector(store => store.contacts.items);
  // const dispatch = useDispatch();

  const onSubmit = (values, action) => {
    // const equalName = products.find(el => (el.name.toLowerCase() === values.name.toLowerCase()));
    // if (equalName) return alert(equalName.name + " is already in contacts");

    values.id = nanoid();
    console.log(values);
    // addProducts(values);
    action.resetForm();
  }
  return (
    <Formik initialValues={{
      category: "",
      name: "",
      price: 0,
      quantity: 0
    }} onSubmit={onSubmit}>
      <Form>
        <label>category
          <input type="text" name="category"
            // pattern="^[a-zA-Zа-яА-Я]{10}$"
            // title="Category should contain only letters and no more than 10 symbols "
            required
          />
        </label>
        <label>name
          <input type="text" name="name"
            // pattern="^[a-zA-Zа-яА-Я]{20}$"
            // title="Name should contain letters and numbers and no more than 20 symbols"
            required
          />
        </label>
        <label>price
          <input type="number" name="price"
            // pattern="^[1-9]{5}$"
            // title="Price should contain only 5 digits"
            required
          />
        </label>
        <label>quantity
          <input type="number" name="quantity"
            // pattern="^[1-9]{5}$"
            // title="Quantity should contain only 5 digits"
            required
          />
        </label>
        <button type="submit">Add product</button>`
      </Form>
    </Formik>
  )
}
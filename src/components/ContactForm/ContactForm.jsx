
//   return (
//     <Formik
//       initialValues={{
//         id: '',
//         name: '',
//         number: '',
//       }}
//       onSubmit={(values, { resetForm }) => {
//         const newContact = {
//           name: values.name,
//           number: values.number,
//         };
//         dispatch(addContact(newContact)); // Відправка екшену додавання контакту
//         resetForm(); //скидання форми
//       }}
//       validationSchema={ContactFormSchema} // схема валидации
//     >
//       <Form className={css.form}>
//         <label htmlFor={nameFieldId}>Name</label>
//         <Field className={css.field} type="text" name="name" id={nameFieldId} />
//         <ErrorMessage className={css.error} name="name" component="span" />
//         <label htmlFor={numberFieldId}>Number</label>
//         <Field
//           className={css.field}
//           type="tel"
//           name="number"
//           id={numberFieldId}
//           pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
//           placeholder="123-45-67"
//         />
//         <ErrorMessage className={css.error} name="number" component="span" />
//         <button className={css.btn} type="submit">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// }


// ===========================================================================,

import css from './ContactForm.module.css';
//npm install formik yup // formik - бібл форм  + yup - бібл валідації
import { Formik, Form, Field, ErrorMessage } from 'formik';
//namespace import
import * as Yup from 'yup';
//хук унікальних ідентифікаторів полів useId
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';


const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, <span className={css.error}>Too Short, min 3 symbols!</span>)
    .max(50, <span className={css.error}>Too Long, max 50 symbols!</span>)
    .required(<span className={css.error}>Required</span>),
  number: Yup.string()
    .transform((value, originalValue) => {
      let phoneNumber = originalValue.replace(/[\s()+-]/g, "");

      if (phoneNumber.startsWith("+38") || phoneNumber.startsWith("38")) {
        phoneNumber = phoneNumber.replace(/\+?38/, "");
      }

      return phoneNumber;
    })
    .matches(/^\d{3,50}$/, {
      message: <span className={css.error}>Error! Min 3, Max 50 number.</span>,
    })
    .required(<span className={css.error}>Required</span>),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          name: values.name,
          number: values.number,
        };
        resetForm(); 
        dispatch(addContact(newContact));
        
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.box}>
          <label className={css.text} htmlFor={nameFieldId}>
            Username
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage name="username" as="span" />
        </div>

        <div className={css.box}>
          <label className={css.text} htmlFor={numberFieldId}>
            Tel
          </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={numberFieldId}
            onKeyDown={(e) => {
              if (
                !(
                  (e.keyCode > 95 && e.keyCode < 106) ||
                  (e.keyCode > 47 && e.keyCode < 58) ||
                  e.keyCode === 8 ||
                  e.keyCode === 9 ||
                  e.keyCode === 116
                )
              ) {
                e.preventDefault();
              }
            }}
          />
          <ErrorMessage name="tel" as="span" />
        </div>

        <button className={css.button} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

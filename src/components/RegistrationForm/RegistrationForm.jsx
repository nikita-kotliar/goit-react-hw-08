import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.box}>
          <label className={css.text}>Username</label>
          <Field className={css.input} type="text" name="name" />
        </div>
        <div className={css.box}>
          <label className={css.text}>Email</label>
          <Field className={css.input} type="email" name="email" />
        </div>
        <div className={css.box}>
          <label className={css.text}>Password</label>
          <Field className={css.input} type="password" name="password" />
        </div>

        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}

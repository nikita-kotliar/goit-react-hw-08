import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.box}>
            <label className={css.text}>Email</label>
            <Field className={css.input} type="email" name="email" />
          </div>
          <div className={css.box}>
            <label className={css.text}>Password</label>
            <Field className={css.input} type="password" name="password" />
          </div>

          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}

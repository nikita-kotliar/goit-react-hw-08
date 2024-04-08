import { Link } from "react-router-dom";
import css from "./Login.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function Login() {
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
          <p>
            or <Link to="/register">Register</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}

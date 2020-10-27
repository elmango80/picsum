import React from "react";
import { Formik } from "formik";
import { login } from "../../services/authService";
import loginScheme from "../../schemes/loginScheme";
import LoginForm from "./Form";

import "../../css/login.css";

const Login = (props) => {
  return (
    <div className="login--container">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 justify-content-center">
          <div className="col">
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={loginScheme}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                login(values)
                  .then(() => {
                    const { from } = props.location.state || {
                      from: { pathname: "/" },
                    };

                    props.history.replace(from);
                  })
                  .catch((error) => {
                    setErrors({ main: error });

                    console.error(error);

                    setSubmitting(false);
                  });
              }}
            >
              {(props) => <LoginForm {...props} />}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

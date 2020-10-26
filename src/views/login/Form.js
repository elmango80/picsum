import React from "react";
import { Form } from "formik";
import Button from "../../components/ui/button";
import Input from "../../components/ui/input";

const LoginForm = (props) => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    isSubmitting,
  } = props;

  return (
    <Form>
      <div className="card">
        <div className="card-header bg-transparent border-bottom-0 text-center">
          <p className="font-weight-bold mb-0 py-3 h5">Ingresar</p>
        </div>
        <div className="card-body text-center">
          <Input
            label="Nombre de usuario"
            name="username"
            value={values.username}
            error={errors.username}
            touched={touched.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            label="Contraseña"
            name="password"
            as="password"
            value={values.password}
            error={errors.password}
            touched={touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className={`alert ${errors.main ? "alert-danger" : ""}`}>
            <small>{errors.main}</small>
          </div>
          <div className="font-weight-bold mt-3 mb-5">
            ¿Olvidaste la contraseña?
          </div>
          <Button className="btn" type="submit" isSubmitting={isSubmitting}>
            Siguiente
          </Button>
        </div>
        <div className="card-footer bg-transparent border-top-0 text-center">
          <span className="mr-2">¿Nuevo usuario?</span>
          <a href="/" className="font-weight-bold">
            Registrarse
          </a>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;

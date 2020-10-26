import * as Yup from "yup";

const loginScheme = Yup.object().shape({
  username: Yup.string().required(""),
  password: Yup.string().required(""),
});

export default loginScheme;

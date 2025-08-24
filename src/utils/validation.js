import * as Yup from "yup";

export const applicationSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().max(500, "Message too long")
});

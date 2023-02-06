import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import PageHeader from "../../components/PageHeader";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
}

const initialValues: Values = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid Email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string(),
});

const UserForm = () => {
  const { theme } = useContext(ThemeContext);

  const formClasses = `
    ${theme === "dark" ? "text-slate-200" : "text-gray-800"}
    grid grid-cols-4 gap-4 mt-8
  `;

  const fieldClasses = `
    ${
      theme === "dark"
        ? "bg-gray-700 border-slate-200"
        : "bg-gray-200 border-slate-400"
    }
    h-12 p-2 rounded-t-md border-b-[1px]
  `;

  const errorClasses = `
    text-red-700  
  `;

  const handleFormSubmit = (values: Values) => {
    console.log(values);
  };

  return (
    <div>
      <PageHeader header="CREATE USER" subheader="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        <Form className={formClasses}>
          <label
            htmlFor="firstName"
            className="flex flex-col col-start-1 col-end-3"
          >
            <Field
              className={fieldClasses}
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <ErrorMessage
              className={errorClasses}
              component="span"
              name="firstName"
            />
          </label>
          <label
            htmlFor="lastName"
            className="flex flex-col col-start-3 col-end-5"
          >
            <Field
              className={fieldClasses}
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <ErrorMessage
              className={errorClasses}
              component="span"
              name="lastName"
            />
          </label>
          <label
            htmlFor="email"
            className="flex flex-col col-start-1 col-end-5"
          >
            <Field
              className={fieldClasses}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage
              className={errorClasses}
              component="span"
              name="email"
            />
          </label>
          <label
            htmlFor="contact"
            className="flex flex-col col-start-1 col-end-5"
          >
            <Field
              className={fieldClasses}
              id="contact"
              name="contact"
              placeholder="Contact"
            />
            <ErrorMessage
              className={errorClasses}
              component="span"
              name="contact"
            />
          </label>
          <label
            htmlFor="address1"
            className="flex flex-col col-start-1 col-end-5"
          >
            <Field
              className={fieldClasses}
              id="address1"
              name="address1"
              placeholder="Address1"
            />
            <ErrorMessage
              className={errorClasses}
              component="span"
              name="address1"
            />
          </label>
          <label
            htmlFor="address2"
            className="flex flex-col col-start-1 col-end-5"
          >
            <Field
              className={fieldClasses}
              id="address2"
              name="address2"
              placeholder="Address2"
            />
            <ErrorMessage
              className={errorClasses}
              component="span"
              name="address2"
            />
          </label>
          <button
            type="submit"
            className="col-start-1 col-end-5 h-12 rounded-md bg-teal-500"
          >
            CREATE NEW USER
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;

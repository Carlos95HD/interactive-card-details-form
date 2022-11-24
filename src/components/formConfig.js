import * as yup from "yup";

const initialValues = {
  cardName: "",
  cardNumber: "",
  mm: "",
  yy: "",
  cvc: "",
};

const required = "Can´t be blank";

const validationSchema = yup.object().shape({
  cardName: yup
    .string()
    .trim()
    .matches(/^[aA-zZ\s]+$/, "Is not in correct format")
    .required(required)
    .test( '', 'Is not in correct format' , value => value?.split(' ').length === 2 ),
  cardNumber: yup
    .string()
    .required(required)
    .length(19, "16 numbers required"),
  mm: yup
    .string()
    .required(required)
    .length(2,'Two number of digits required'),
  yy: yup.string().required(required).length(2,'Two number of digits required'),
  cvc: yup.string().required(required).length(3,'Three number of digits required'),
});

export {
  initialValues,
  validationSchema
}
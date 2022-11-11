import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { FrontCard } from "./FrontCard";
import { BackCard } from "./BackCard";
import { useFormatAndSetCcNumber } from "../../hooks/useFormatAndSetCcNumber";
import { validatedValue } from "../../helpers/validateInputValue";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import * as yup from "yup";

const initialValues = {
  cardName: "",
  cardNumber: "",
  mm: "",
  yy: "",
  cvc: "",
};
const required = "Can´t be blank";

export const CardForm = () => {
  const [ formCompleted, setFormCompleted ] = useState(false);
  const [ ccNumber, formatAndSetCcNumber, setCcNumber] = useFormatAndSetCcNumber();
  const { width } = useWindowDimensions();

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

  const onSubmit = () => {
    setFormCompleted(true);
  };

  const continueHander = () => {
    setFormCompleted(false);
    setCcNumber('')
    resetForm();
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    isValid,
    resetForm
  } = formik;

  const validationHandler = ({ target }) => {
    switch (target.name) {
      case "mm":
        setFieldValue("mm", validatedValue(target, 2));
        break;
      case "yy":
        setFieldValue("yy", validatedValue(target, 2));
        break;
      case "cvc":
        setFieldValue("cvc", validatedValue(target, 3));
        break;
    }
};

  useEffect(() => {
    setFieldValue("cardNumber", ccNumber);
  }, [ccNumber]);

  return (
    <div
      className={`bg-no-repeat bg-pattern-size h-full
      ${width > 490 ? "bg-main-desktop" : "bg-main-mobile"}`}
    >
      <div className="w-full h-72 pt-6 grid place-items-end">
        <BackCard cvc={values.cvc} />
        <FrontCard {...values} />
      </div>

    { formCompleted ?
        <div>
          <h1>thank you</h1>
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            onClick={continueHander}
          >
            Continue
          </button>
        </div>
      :
      <form onSubmit={handleSubmit} className="flex flex-col mx-8 md:gap-6">
        <div className="flex flex-col">
          <label className="font-medium text-gray-500 mb-1 md:text-right md:mb-0 pr-4">
            CARDHOLDER NAME
          </label>
          <input
            className={
              // (errors.cardName && touched.cardName ? "error" : "") +
              "appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            }
            name="cardName"
            type="text"
            maxLength={24}
            autoComplete="off"
            placeholder="e.g. Jane Appleseed"
            value={values.cardName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.cardName && touched.cardName && <div class='text-error'>{errors.cardName}</div>}
        </div>

        <div className="flex flex-col mt-6">
          <label className="font-medium text-gray-500 mb-1">
            CARD NUMBER
          </label>
          <input
            className={
              (errors.cardNumber && touched.cardNumber ? "input-error " : "input-color ") + "appearance-none border-2 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            }
            name="cardNumber"
            type="text"
            autoComplete="off"
            placeholder="e.g. 1234 5678 9123 0000"
            value={ccNumber}
            onChange={formatAndSetCcNumber}
            onBlur={handleBlur}
          />

          {errors.cardNumber && touched.cardNumber && (
            <div className="text-error">{errors.cardNumber}</div>
          )}
        </div>

        <div className="flex mt-6 ">
          <div className="flex-1">
            <div className="mb-1">
              <label className="font-medium text-gray-500 ">
                EXP. DATE(MM/YY)
              </label>
            </div>

            <div className="flex">
              <input
                className={
                  // (errors.mm && touched.mm ? "error" : "") +
                  "mr-2 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-16"
                }
                name="mm"
                type="text"
                autoComplete="off"
                placeholder="MM"
                value={values.mm}
                onChange={validationHandler}
                onBlur={handleBlur}
              />
              <input
                className={
                  // (errors.yy && touched.yy ? "error" : "") +
                  "appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-16"
                }
                name="yy"
                type="text"
                autoComplete="off"
                placeholder="YY"
                value={values.yy}
                onChange={validationHandler}
                onBlur={handleBlur}
              />
            </div>

            { (errors.yy && touched.yy || errors.mm && touched.mm) && <div class='text-error'>{errors.yy}</div>}
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-medium text-gray-500 mb-1 md:text-right pr-4 w-16">
              CVC
            </label>
            <input
              className={
                // (errors.cvc && touched.cvc ? "error" : "") +
                "appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full"
              }
              name="cvc"
              type="text"
              autoComplete="off"
              placeholder="e.g 123"
              value={values.cvc}
              onChange={validationHandler}
              onBlur={handleBlur}
            />
            { (errors.cvc && touched.cvc) && <div class='text-error'>{errors.cvc}</div>}
          </div>
        </div>
        <div>
          <button
            disabled={!isValid}
            type="submit"
            className="mt-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
          >
            Confirm
          </button>
        </div>
      </form>
    }

    </div>
  );
};

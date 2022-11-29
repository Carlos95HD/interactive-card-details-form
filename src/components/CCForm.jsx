import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { FrontCard } from "./Card/FrontCard";
import { BackCard } from "./Card/BackCard";
import { useFormatAndSetCcNumber } from "../hooks/useFormatAndSetCcNumber";
import { validatedValue } from "../helpers/validateInputValue";
import { initialValues, validationSchema } from "./formConfig";

import iconComplete from "../assets/images/icon-complete.svg";

export const CCForm = () => {
  const [ formCompleted, setFormCompleted ] = useState(false);
  const [ ccNumber, formatAndSetCcNumber, setCcNumber] = useFormatAndSetCcNumber();

  const continueHander = () => {
    setFormCompleted(false);
    setCcNumber('')
    resetForm();
  };

  const onSubmit = () => {
    setFormCompleted(true);
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
    <div className="h-full md:grid grid-cols-2 md:content-center sm:mx-auto sm:w-2/3 md:w-full mb-4">
      <div className="w-full h-72 pt-6 grid place-items-end md:flex md:flex-col md:h-full md:pt-0 md:place-items-end">
        <BackCard cvc={values.cvc} />
        <FrontCard {...values} />
      </div>

    { formCompleted ?
      <div className="mx-8 text-center flex flex-col items-center md:justify-center md:w-9/12 md:mx-auto lg:w-1/2">
        <img className="row-span-2 mb-10 animate__animated animate__rotateIn" src={iconComplete} />
        <div className="animate__animated animate__bounceIn">
          <h3 className="text-3xl font-medium tracking-wide">THANK YOU!</h3>
          <p className="my-5 font-medium text-gray-violet">We've added your card details</p>
        </div>
        <button
          className="btn-dark-violet mt-4 shadow focus:shadow-outline focus:outline-none py-3 px-4 rounded-md w-full xl:w-3/4 animate__animated animate__fadeIn"
          onClick={continueHander}
        >
          Continue
        </button>
      </div>
      :
      <form onSubmit={handleSubmit} className="w-full md:flex md:justify-center animate__animated animate__fadeIn">
        <div className="flex flex-col mx-8 md:gap-4 md:justify-center md:w-9/12 lg:w-1/2">
          <div className="flex flex-col mt-6">
            <label className="font-medium md:font-bold text-xs mb-1 pr-4">
              CARDHOLDER NAME
            </label>
            <input
              className={
                (errors.cardName && touched.cardName ? "input-error " : "input-color ") + "appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
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

            {errors.cardName && touched.cardName && <div className='text-error'>{errors.cardName}</div>}
          </div>

          <div className="flex flex-col mt-6">
            <label className="font-medium md:font-bold text-xs mb-1">
              CARD NUMBER
            </label>
            <input
              className={
                (errors.cardNumber && touched.cardNumber ? "input-error " : "input-color ") + "appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
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
                <label className="font-medium text-xs md:font-bold">
                  EXP. DATE(MM/YY)
                </label>
              </div>

              <div className="flex">
                <input
                  className={
                    (errors.mm && touched.mm ? "input-error " : "input-color ") +
                    "mr-2 appearance-none border border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white w-16"
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
                    (errors.yy && touched.yy ? "input-error " : "input-color ") +
                    "appearance-none border border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white w-16"
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

              { (errors.yy && touched.yy || errors.mm && touched.mm) && <div className='text-error'>{errors.yy ? errors.yy : errors.mm }</div>}
            </div>

            <div className="flex flex-col flex-1">
              <label className="font-medium text-xs mt-2 mb-1 md:text-right pr-4 w-16 md:font-bold">
                CVC
              </label>
              <input
                className={
                  (errors.cvc && touched.cvc ? "input-error " : "input-color ") +
                  "appearance-none border border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white w-full"
                }
                name="cvc"
                type="text"
                autoComplete="off"
                placeholder="e.g 123"
                value={values.cvc}
                onChange={validationHandler}
                onBlur={handleBlur}
              />
              { (errors.cvc && touched.cvc) && <div className='text-error'>{errors.cvc}</div>}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn-dark-violet mt-4 shadow focus:shadow-outline focus:outline-none py-3 px-4 rounded-md w-full"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    }

    </div>
  );
};

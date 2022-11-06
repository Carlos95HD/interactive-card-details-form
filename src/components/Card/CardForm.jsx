import useWindowDimensions from "../../hooks/useWindowDimensions";
import { CardLogo } from "./CardLogo";
import * as yup from "yup";
import { useFormik } from "formik";

export const CardForm = () => {
  const { width } = useWindowDimensions();
  const initialValues = {
    cardName: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvc: "",
  };

  const required = "* Required";
  const validationSchema = yup.object().shape({
    cardName: yup.string().min(3, "Card name no valid").required(required),
    cardNumber: yup
      .string()
      .required(required)
      .length(16, "16 characters required"),
  });

  const onSubmit = () => {
    // const { cardName, cardNumber } = values;
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    formik;

  return (
    <div
      className={`bg-no-repeat bg-pattern-size h-full
      ${width > 490 ? "bg-main-desktop" : "bg-main-mobile"}`}
    >
      <div className="bg-card-back bg-no-repeat card rounded-md text-white flex justify-end items-center">
        <span className="cvc">000</span>
      </div>

      <div className="bg-card-front bg-no-repeat card rounded-md text-white">
        <div className="grid grid-rows-4 h-full p-6">
          <div className="row-span-2">
            <CardLogo />
          </div>
          <span className="text-center font-semibold">0000 0000 0000 0000</span>

          <div className="flex justify-between">
            <span>Jane Appleseed</span>
            <span>00/00</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Card Name
          </label>
          <input
            className={
              (errors.cardName && touched.cardName ? "error" : "") +
              "bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            }
            name="cardName"
            type="text"
            autoComplete="off"
            placeholder="e.g. Jane Appleseed"
            value={values.cardName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.cardName && touched.cardName && <div>{errors.cardName}</div>}
        </div>

        <div>
          <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Card Number
          </label>
          <input
            className={
              (errors.cardNumber && touched.cardNumber ? "error" : "") +
              "bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            }
            name="cardNumber"
            type="number"
            autoComplete="off"
            placeholder="e.g. 1234 5678 9123 0000"
            value={values.cardNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.cardNumber && touched.cardNumber && (
            <div>{errors.cardNumber}</div>
          )}
        </div>

        <div className="grid grid-rows-2">
          <div>
            <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Exp. Date (MM/YY)
            </label>
            <input
              className={
                (errors.mm && touched.mm ? "error" : "") +
                "bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-16"
              }
              name="mm"
              type="number"
              autoComplete="off"
              placeholder="MM"
              value={values.mm}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <input
              className={
                (errors.yy && touched.yy ? "error" : "") +
                "bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-16"
              }
              name="yy"
              type="number"
              autoComplete="off"
              placeholder="YY"
              value={values.yy}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.yy && touched.yy && <div>{errors.yy}</div>}
          </div>

          <div>
            <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 w-16">
              CVC
            </label>
            <input
              className={
                (errors.cvc && touched.cvc ? "error" : "") +
                "bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-16"
              }
              name="cvc"
              type="number"
              autoComplete="off"
              placeholder="CVC"
              value={values.cvc}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <button
              type="submit"
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
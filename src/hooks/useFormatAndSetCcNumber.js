import { useState } from "react";

export const useFormatAndSetCcNumber = () => {
  const [ccNumber, setCcNumber] = useState("");

  const formatAndSetCcNumber = (e) => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");

    if (inputNumbersOnly.length > 16) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" ");
    }

    setCcNumber(spacedNumber);
  };

  return [ccNumber, formatAndSetCcNumber];
};

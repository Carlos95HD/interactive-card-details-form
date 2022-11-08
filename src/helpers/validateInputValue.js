export const validatedValue = ( target, length ) => {
  let validatedValue = target.value.replace(/[^0-9]/g, "");
  if (validatedValue.length > length) {
    validatedValue = validatedValue.substr(0, length);
  }
  return validatedValue;
}
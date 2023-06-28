export const CreditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
export const NameRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-'.\s]*$/;
export const ExpDate = /^(0[1-9]|1[0-2])\/([0-9]{2})$/


export const validateRegex = (regX: RegExp, data: string) => {
  const regXp = new RegExp(regX)
  return regXp.test(data)
}
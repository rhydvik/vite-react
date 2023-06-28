export const CurrencyFormat = {
  USD: "USD",
  EURO: "EUR",
  CAN: "CAN",
  MEX: "MEX",
};

export const LangFormat = {
  EN_US: "en-US",
};

interface ICurrencyFormatter {
  input: number,
  curr?: string,
  LangFormat?: string,
  decimals?: boolean
}

export function CurrencyFormatter({
  input,
  curr = CurrencyFormat.USD,
  LangFormat,
  decimals = false
}: ICurrencyFormatter) {
  const formattedData = Intl.NumberFormat(LangFormat, {
    style: "currency",
    currency: curr,
  }).format(input);


  return decimals ? formattedData : formattedData.replace(/\D00$/, '')
}


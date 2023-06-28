import { IRootState } from "types";

export const paymentStatusSelector = (state: IRootState) => state.Status.payment || ''

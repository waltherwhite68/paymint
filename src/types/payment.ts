export interface PaymentState {
  wallet: string;
  amount: string;
  txHash: string;
  paid: boolean;
}

export const initialPaymentState: PaymentState = {
  wallet: "",
  amount: "",
  txHash: "",
  paid: false,
};
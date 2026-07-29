export interface PaymentData {
  wallet: string;
  amount: string;
  description: string;
}

export function createPaymentUri(data: PaymentData) {
  return JSON.stringify(data);
}

export function parsePaymentUri(value: string): PaymentData | null {
  try {
    return JSON.parse(value) as PaymentData;
  } catch {
    return null;
  }
}
export interface PaymentData {
  wallet: string;
  amount: string;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ??
  "http://localhost:3000";

export function createPaymentUri(data: PaymentData) {
  const params = new URLSearchParams({
    to: data.wallet,
    amount: data.amount,
  });

  return `${BASE_URL}/pay?${params.toString()}`;
}

export function parsePaymentUri(value: string): PaymentData | null {
  try {
    const url = new URL(value);

    return {
      wallet: url.searchParams.get("to") ?? "",
      amount: url.searchParams.get("amount") ?? "",
    };
  } catch {
    return null;
  }
}
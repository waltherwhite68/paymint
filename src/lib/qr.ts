const DAPP_URL =
  process.env.NEXT_PUBLIC_APP_URL ??
  "http://localhost:3000";

type PaymentData = {
  wallet: string;
  amount: string;
};

export function createPaymentUri({
  wallet,
  amount,
}: PaymentData) {
  const paymentUrl = `${DAPP_URL}/pay?to=${encodeURIComponent(
    wallet
  )}&amount=${encodeURIComponent(amount)}`;

  const cleanUrl = paymentUrl.replace(/^https?:\/\//, "");

  return `https://link.metamask.io/dapp/${cleanUrl}`;
}
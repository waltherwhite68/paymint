import ConnectWallet from "@/components/ConnectWallet";
import PaymentButton from "@/components/PaymentButton";

interface PayPageProps {
  searchParams: Promise<{
    to?: string;
    amount?: string;
  }>;
}

export default async function PayPage({
  searchParams,
}: PayPageProps) {
  const params = await searchParams;

  const wallet = params.to;
  const amount = params.amount;

  if (!wallet || !amount) {
    return (
      <main className="mx-auto flex min-h-screen max-w-xl items-center justify-center p-6">
        <div className="rounded-2xl border border-red-500 bg-red-950 p-6 text-center">
          <h2 className="text-2xl font-bold text-red-400">
            Invalid Payment Link
          </h2>

          <p className="mt-3 text-slate-300">
            Missing wallet or amount.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="text-3xl font-bold">
        Complete Payment
      </h1>

      <p className="mt-2 text-slate-400">
        Connect your wallet and confirm the USDC payment.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-400">
          Merchant Wallet
        </p>

        <p className="mt-2 break-all text-white">
          {wallet}
        </p>

        <p className="mt-6 text-sm text-slate-400">
          Amount
        </p>

        <p className="text-3xl font-bold text-white">
          {amount} USDC
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <ConnectWallet />
      </div>

      <PaymentButton
        wallet={wallet}
        amount={amount}
      />
    </main>
  );
}
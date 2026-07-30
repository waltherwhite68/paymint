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
      <h1 className="mb-6 text-3xl font-bold">
        Complete Payment
      </h1>

      <PaymentButton
        wallet={wallet}
        amount={amount}
      />
    </main>
  );
}
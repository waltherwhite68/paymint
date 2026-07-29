"use client";

interface PaymentStatusProps {
  paid: boolean;
  amount?: string;
  txHash?: string;
  onNewPayment?: () => void;
}

export default function PaymentStatus({
  paid,
  amount,
  txHash,
  onNewPayment,
}: PaymentStatusProps) {
  if (!paid) return null;

  return (
    <div className="mt-6 rounded-2xl border border-emerald-600 bg-emerald-950 p-6">
      <div className="flex items-center gap-3">
        <div className="text-4xl">✅</div>

        <div>
          <h2 className="text-2xl font-bold text-emerald-400">
            Payment Received
          </h2>

          <p className="text-emerald-200">
            Merchant has successfully received the payment.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <p className="text-xs text-slate-400">
            Amount
          </p>

          <p className="text-2xl font-bold text-white">
            {amount} USDC
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400">
            Transaction Hash
          </p>

          <p className="break-all text-xs text-white">
            {txHash}
          </p>
        </div>

        {txHash && (
          <a
            href={`https://explorer.testnet.arc.network/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-500"
          >
            View on Explorer
          </a>
        )}

        <button
          onClick={onNewPayment}
          className="w-full rounded-xl bg-slate-700 py-3 font-semibold text-white hover:bg-slate-600"
        >
          New Payment
        </button>
      </div>
    </div>
  );
}
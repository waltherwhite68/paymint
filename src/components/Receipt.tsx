"use client";

import { usePaymentContext } from "@/providers/PaymentProvider";

export default function Receipt() {
  const { payment, setPayment } = usePaymentContext();

  if (!payment.paid) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-2xl font-bold text-white">
          Payment Receipt
        </h2>

        <div className="mt-8 flex h-80 items-center justify-center rounded-xl border border-dashed border-slate-700">
          <div className="text-center">
            <div className="text-5xl">💳</div>

            <p className="mt-4 text-lg font-semibold text-white">
              Waiting for payment...
            </p>

            <p className="mt-2 text-sm text-slate-400">
              The receipt will appear here after a successful payment.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-emerald-700 bg-emerald-950 p-6">
      <h2 className="text-2xl font-bold text-emerald-400">
        Payment Received
      </h2>

      <div className="mt-8 space-y-5">
        <div>
          <p className="text-xs text-slate-400">Amount</p>

          <p className="text-2xl font-bold text-white">
            {payment.amount} USDC
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400">
            Merchant Wallet
          </p>

          <p className="break-all text-sm text-white">
            {payment.wallet}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400">
            Transaction Hash
          </p>

          <p className="break-all text-xs text-white">
            {payment.txHash}
          </p>
        </div>

        <a
          href={`https://explorer.testnet.arc.network/tx/${payment.txHash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-500"
        >
          View on Explorer
        </a>

        <button
          onClick={() =>
            setPayment({
              paid: false,
              wallet: "",
              amount: "",
              txHash: "",
            })
          }
          className="w-full rounded-xl bg-slate-800 py-3 font-semibold text-white hover:bg-slate-700"
        >
          New Payment
        </button>
      </div>
    </div>
  );
}
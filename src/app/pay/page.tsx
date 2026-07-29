"use client";

import { useSearchParams } from "next/navigation";
import { PaymentButton } from "@/components/PaymentButton";

export default function PayPage() {
  const params = useSearchParams();

  const wallet = params.get("to") ?? "";
  const amount = params.get("amount") ?? "";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-center text-3xl font-bold text-white">
          PayMint
        </h1>

        <p className="mt-2 text-center text-slate-400">
          Scan. Pay. Done.
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <p className="text-xs text-slate-400">
              Merchant Wallet
            </p>

            <p className="break-all text-sm text-white">
              {wallet}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Amount
            </p>

            <p className="text-4xl font-bold text-white">
              {amount} USDC
            </p>
          </div>

          <PaymentButton
            wallet={wallet}
            amount={amount}
          />
        </div>
      </div>
    </main>
  );
}
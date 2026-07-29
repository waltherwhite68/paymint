"use client";

import { useState } from "react";
import { useAccount, useWalletClient } from "wagmi";
import { createPaymentTransaction } from "@/lib/transfer";
import { usePaymentContext } from "@/providers/PaymentProvider";

interface PaymentButtonProps {
  wallet: string;
  amount: string;
}

export default function PaymentButton({
  wallet,
  amount,
}: PaymentButtonProps) {
  const { isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { setPayment } = usePaymentContext();

  const [loading, setLoading] = useState(false);
  const [hash, setHash] = useState("");

  const handlePayment = async () => {
    if (!walletClient) {
      alert("Please connect your wallet.");
      return;
    }

    try {
      setLoading(true);

      const tx = createPaymentTransaction({
        to: wallet as `0x${string}`,
        amount,
      });

      const txHash = await walletClient.sendTransaction(tx);

      setHash(txHash);

      setPayment({
        wallet,
        amount,
        txHash,
        paid: true,
      });
    } catch (err) {
      console.error(err);
      alert("Payment failed.");
    } finally {
      setLoading(false);
    }
  };

  if (hash) {
    return (
      <div className="mt-6 rounded-2xl border border-emerald-600 bg-emerald-950 p-5">
        <div className="flex items-center gap-2">
          <div className="text-2xl">✅</div>

          <div>
            <h3 className="text-lg font-bold text-emerald-400">
              Payment Successful
            </h3>

            <p className="text-sm text-emerald-200">
              USDC payment completed successfully.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-xs text-slate-400">Amount</p>
            <p className="text-xl font-bold text-white">
              {amount} USDC
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Merchant</p>
            <p className="break-all text-xs text-white">
              {wallet}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Transaction Hash
            </p>
            <p className="break-all text-xs text-white">
              {hash}
            </p>
          </div>

          <a
            href={`https://explorer.testnet.arc.network/tx/${hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-500"
          >
            View on Explorer
          </a>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={handlePayment}
      disabled={!isConnected || loading}
      className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Processing Payment..." : "Pay with USDC"}
    </button>
  );
}
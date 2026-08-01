"use client";

import { useState } from "react";
import {
  useAccount,
  useWalletClient,
  usePublicClient,
} from "wagmi";
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
  const { isConnected, address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const { setPayment } = usePaymentContext();

  const [loading, setLoading] = useState(false);
  const [hash, setHash] = useState("");

  const handlePayment = async () => {
    console.log("========== PAYMENT DEBUG ==========");
    console.log("Connected:", isConnected);
    console.log("Address:", address);
    console.log("WalletClient:", walletClient);
    console.log("PublicClient:", publicClient);
    console.log("==================================");

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

      if (!publicClient) {
        throw new Error("Public client not available");
      }

      await publicClient.waitForTransactionReceipt({
        hash: txHash,
      });

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
      <div className="mt-6 rounded-2xl border border-emerald-600 bg-emerald-950 p-6 text-center">
        <div className="text-5xl">✅</div>

        <h3 className="mt-4 text-2xl font-bold text-emerald-400">
          Payment Completed
        </h3>

        <p className="mt-2 text-slate-300">
          You can safely close this page.
        </p>

        <a
          href={`https://testnet.arcscan.app/tx/${hash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-500"
        >
          View Transaction
        </a>
      </div>
    );
  }

  return (
    <button
      onClick={handlePayment}
      disabled={!isConnected || loading}
      className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Processing Payment..." : `Pay ${amount} USDC`}
    </button>
  );
}
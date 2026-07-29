"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useAccount } from "wagmi";
import { createPaymentUri } from "@/lib/qr";
import PaymentStatus from "./PaymentStatus";

export default function MerchantForm() {
  const { address } = useAccount();

  const [amount, setAmount] = useState("");
  const [paid, setPaid] = useState(false);
  const [txHash, setTxHash] = useState("");

  const qrValue = createPaymentUri({
    wallet: address ?? "",
    amount,
    description: "",
  });

  const handleNewPayment = () => {
    setAmount("");
    setPaid(false);
    setTxHash("");
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-2 text-2xl font-bold text-white">
        Merchant
      </h2>

      <p className="mb-6 text-slate-400">
        Connect your wallet and enter the payment amount.
      </p>

      <div className="rounded-xl bg-slate-950 p-3">
        <p className="text-xs text-slate-500">
          Merchant Wallet
        </p>

        <p className="mt-1 break-all text-sm text-white">
          {address ?? "Connect Wallet"}
        </p>
      </div>

      {!paid && (
        <>
          <input
            type="number"
            placeholder="USDC Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none"
          />

          {address && amount && (
            <div className="mt-6 flex justify-center rounded-xl bg-white p-6">
              <QRCodeSVG value={qrValue} size={220} />
            </div>
          )}
        </>
      )}

      <PaymentStatus
        paid={paid}
        amount={amount}
        txHash={txHash}
        onNewPayment={handleNewPayment}
      />
    </div>
  );
}
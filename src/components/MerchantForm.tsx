"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useAccount } from "wagmi";
import { createPaymentUri } from "@/lib/qr";

export default function MerchantForm() {
  const { address, isConnected } = useAccount();

  const [amount, setAmount] = useState("");

  const qrValue =
    address && amount
      ? createPaymentUri({
          wallet: address,
          amount,
        })
      : "";

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-2 text-2xl font-bold text-white">
        Merchant POS
      </h2>

      <p className="mb-6 text-slate-400">
        Connect your wallet, enter the payment amount and let the customer scan the QR code.
      </p>

      <div className="rounded-xl bg-slate-950 p-4">
        <p className="text-xs text-slate-500">
          Merchant Wallet
        </p>

        <p className="mt-2 break-all text-sm text-white">
          {address ?? "Wallet not connected"}
        </p>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm text-slate-300">
          Amount (USDC)
        </label>

        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      {!isConnected && (
        <div className="mt-6 rounded-xl border border-amber-700 bg-amber-950 p-4 text-center text-amber-300">
          Connect your wallet to generate a payment QR.
        </div>
      )}

      {isConnected && amount && (
        <div className="mt-8">
          <div className="flex justify-center rounded-2xl bg-white p-6">
            <QRCodeSVG value={qrValue} size={240} />
          </div>

          <p className="mt-4 text-center text-sm text-slate-400">
            Customer scans this QR code to pay with USDC.
          </p>

          <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950 p-4">
            <p className="text-xs text-slate-500">
              Generated QR URL
            </p>

            <p className="mt-2 break-all text-xs text-white">
              {qrValue}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
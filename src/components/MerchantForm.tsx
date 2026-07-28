"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function MerchantForm() {
  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const qrValue = `paymint://pay?wallet=${encodeURIComponent(
  wallet
)}&amount=${encodeURIComponent(amount)}&description=${encodeURIComponent(
  description
)}`;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-2 text-2xl font-bold text-white">
        Merchant
      </h3>

      <p className="mb-6 text-slate-400">
        Create a USDC payment request.
      </p>

      <div className="space-y-4">

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Wallet Address
          </label>

          <input
            type="text"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            placeholder="0x..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Amount
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="10"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Description
          </label>

          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Coffee"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />
        </div>

        <div className="flex justify-center rounded-xl bg-white p-6">
          <QRCodeSVG value={qrValue} size={220} />
        </div>
        <p className="mt-4 break-all rounded-lg bg-slate-950 p-3 text-xs text-slate-400">
  {qrValue}
</p>

      </div>
    </div>
  );
}
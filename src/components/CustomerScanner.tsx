"use client";

import { useState } from "react";

export default function CustomerScanner() {
  const [paymentData] = useState("");

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-2 text-2xl font-bold text-white">
        Customer
      </h3>

      <p className="mb-6 text-slate-400">
        Scan the merchant QR code.
      </p>

      <div
  id="reader"
  className="h-64 overflow-hidden rounded-xl border border-slate-700"
/>

      <button className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-500">
        Start Scanner
      </button>

      <div className="mt-6 rounded-xl bg-slate-950 p-4">
        <p className="mb-2 text-sm text-slate-400">
          Scanned Data
        </p>

        <p className="break-all text-sm text-white">
          {paymentData || "Waiting for QR..."}
        </p>
      </div>
    </div>
  );
}
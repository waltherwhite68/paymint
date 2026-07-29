"use client";

import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef, useState } from "react";
import { parsePaymentUri } from "@/lib/qr";
import PaymentButton from "./PaymentButton";

export default function CustomerScanner() {
  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState("");

  const scannerRef = useRef<Html5Qrcode | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    scannerRef.current = new Html5Qrcode("reader");

    return () => {
      if (scannerRef.current && startedRef.current) {
        scannerRef.current
          .stop()
          .catch(() => {})
          .finally(() => {
            scannerRef.current?.clear();
          });
      }
    };
  }, []);

  const startScanner = async () => {
    if (!scannerRef.current || startedRef.current) return;

    await scannerRef.current.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
        },
      },
      (decodedText) => {
        const payment = parsePaymentUri(decodedText);

        if (!payment) return;

        setWallet(payment.wallet);
        setAmount(payment.amount);

        scannerRef.current?.stop().catch(() => {});
      },
      () => {}
    );

    startedRef.current = true;
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-2 text-2xl font-bold text-white">
        Customer
      </h2>

      <div
        id="reader"
        className="h-64 overflow-hidden rounded-xl border border-slate-700"
      />

      {!wallet && (
        <button
          onClick={startScanner}
          className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white"
        >
          Scan QR
        </button>
      )}

      {wallet && (
        <div className="mt-6 rounded-xl bg-slate-950 p-4">
          <p className="text-slate-400">Merchant</p>

          <p className="break-all text-sm text-white">
            {wallet}
          </p>

          <p className="mt-4 text-slate-400">
            Amount
          </p>

          <p className="text-2xl font-bold text-white">
            {amount} USDC
          </p>

          <PaymentButton
            wallet={wallet}
            amount={amount}
          />
        </div>
      )}
    </div>
  );
}
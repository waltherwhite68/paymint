"use client";

import { useState } from "react";

export function usePayment() {
  const [paid, setPaid] = useState(false);
  const [txHash, setTxHash] = useState("");

  const completePayment = (hash: string) => {
    setTxHash(hash);
    setPaid(true);
  };

  const resetPayment = () => {
    setPaid(false);
    setTxHash("");
  };

  return {
    paid,
    txHash,
    completePayment,
    resetPayment,
  };
}
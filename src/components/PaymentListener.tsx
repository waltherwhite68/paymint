"use client";

import { useRef } from "react";
import { useAccount, useWatchContractEvent } from "wagmi";
import { formatUnits } from "viem";

import { USDC, usdcAbi } from "@/constants/usdc";
import { usePaymentContext } from "@/providers/PaymentProvider";

export default function PaymentListener() {
  const { address } = useAccount();
  const { setPayment } = usePaymentContext();

  const lastTx = useRef<string>();

  useWatchContractEvent({
    address: USDC.address,
    abi: usdcAbi,
    eventName: "Transfer",
    onLogs(logs) {
      if (!address) return;

      for (const log of logs) {
        if (!log.args) continue;

        const to = log.args.to as string;
        const from = log.args.from as string;
        const value = log.args.value as bigint;

        if (to.toLowerCase() !== address.toLowerCase()) {
          continue;
        }

        if (lastTx.current === log.transactionHash) {
          continue;
        }

        lastTx.current = log.transactionHash;

        setPayment({
          paid: true,
          wallet: from,
          amount: formatUnits(value, USDC.decimals),
          txHash: log.transactionHash ?? "",
        });
      }
    },
  });

  return null;
}
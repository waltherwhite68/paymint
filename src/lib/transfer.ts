import { encodeFunctionData, parseUnits } from "viem";
import { USDC } from "@/constants/usdc";

export interface NativePaymentParams {
  to: `0x${string}`;
  amount: string;
}

export function createPaymentTransaction({
  to,
  amount,
}: NativePaymentParams) {
  return {
    to: USDC.address as `0x${string}`,
    data: encodeFunctionData({
      abi: [
        {
          type: "function",
          name: "transfer",
          stateMutability: "nonpayable",
          inputs: [
            {
              name: "to",
              type: "address",
            },
            {
              name: "amount",
              type: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
            },
          ],
        },
      ],
      functionName: "transfer",
      args: [to, parseUnits(amount, USDC.decimals)],
    }),
    value: 0n,
  };
}
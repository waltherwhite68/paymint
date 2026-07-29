import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";

const arcTestnet = {
  id: 193939,
  name: "Arc Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ARC",
    symbol: "ARC",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.arc.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Arc Explorer",
      url: "https://explorer.testnet.arc.network",
    },
  },
  testnet: true,
} as const;

export const config = getDefaultConfig({
  appName: "PayMint",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [arcTestnet],
  ssr: true,
  transports: {
    [arcTestnet.id]: http(),
  },
});
"use client";

import ConnectWallet from "./ConnectWallet";

export default function AppHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <h1 className="text-2xl font-bold text-white">
            PayMint
          </h1>

          <p className="text-sm text-slate-400">
            Instant USDC QR Payments on Arc
          </p>
        </div>

        <ConnectWallet />
      </div>
    </header>
  );
}
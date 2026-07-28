import ConnectWallet from "./ConnectWallet";

export default function AppHeader() {
  return (
    <header className="border-b border-slate-800">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            PayMint
          </h1>

          <p className="text-sm text-slate-400">
            Instant USDC payments with QR codes
          </p>
        </div>

        <ConnectWallet />
      </div>
    </header>
  );
}
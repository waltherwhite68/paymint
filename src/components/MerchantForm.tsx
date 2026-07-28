export default function MerchantForm() {
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
            placeholder="0x..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Amount (USDC)
          </label>

          <input
            type="number"
            placeholder="10"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Description
          </label>

          <input
            type="text"
            placeholder="Coffee"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none"
          />
        </div>

        <button className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-500">
          Generate QR
        </button>

      </div>
    </div>
  );
}
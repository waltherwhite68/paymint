export default function CustomerScanner() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-2 text-2xl font-bold text-white">
        Customer
      </h3>

      <p className="mb-6 text-slate-400">
        Scan the QR code and complete the payment.
      </p>

      <div className="flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-slate-700">
        <span className="text-slate-500">
          QR Scanner Area
        </span>
      </div>

      <button className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-500">
        Scan QR
      </button>
    </div>
  );
}
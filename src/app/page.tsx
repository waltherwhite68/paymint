import AppHeader from "@/components/AppHeader";
import MerchantForm from "@/components/MerchantForm";
import CustomerScanner from "@/components/CustomerScanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AppHeader />

      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <h2 className="mb-6 text-5xl font-bold text-white">
          Receive USDC Payments Instantly
        </h2>

        <p className="max-w-2xl text-lg text-slate-400">
          Generate a QR code, let customers scan it and receive USDC on Arc instantly.
        </p>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 md:grid-cols-2">
  <MerchantForm />
  <CustomerScanner />
</section>
    </main>
  );
}
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import {
  PaymentState,
  initialPaymentState,
} from "@/types/payment";

interface PaymentContextType {
  payment: PaymentState;
  setPayment: React.Dispatch<React.SetStateAction<PaymentState>>;
}

const PaymentContext = createContext<PaymentContextType | null>(null);

export function PaymentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [payment, setPayment] =
    useState<PaymentState>(initialPaymentState);

  return (
    <PaymentContext.Provider
      value={{
        payment,
        setPayment,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

export function usePaymentContext() {
  const context = useContext(PaymentContext);

  if (!context) {
    throw new Error(
      "usePaymentContext must be used inside PaymentProvider"
    );
  }

  return context;
}
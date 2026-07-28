"use client";

type Props = {
  children: React.ReactNode;
};

export default function Web3Provider({ children }: Props) {
  return <>{children}</>;
}
"use client";

import { RouteProvider } from "@/utils/RouteContext";
import { SessionProvider } from "next-auth/react";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <RouteProvider>{children}</RouteProvider>
    </SessionProvider>
  );
}

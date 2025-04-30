"use client";

import { RouteProvider } from "@/utils/RouteContext";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouteProvider>{children}</RouteProvider>
      </Suspense>
    </SessionProvider>
  );
}

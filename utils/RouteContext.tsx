"use client";
import { createContext, useContext, ReactNode } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

// Define the type for the context value
interface RouteContextType {
  pathname: string;
  push: (url: string) => void;
  replace: (url: string) => void;
  back: () => void;
  forward: () => void;
  query: Record<string, string>;
}

// Create the context with a default value
const RouteContext = createContext<RouteContextType | undefined>(undefined);

// Props for the RouteProvider component
interface RouteProviderProps {
  children: ReactNode;
}

// Provider component that wraps your app and makes route objects available
export const RouteProvider = ({ children }: RouteProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Convert URLSearchParams to a plain object
  const query: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    query[key] = value;
  });

  // Create a value object with methods from the router
  const value: RouteContextType = {
    pathname,
    push: router.push,
    replace: router.replace,
    back: router.back,
    forward: router.forward,
    query,
  };

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

// Custom hook to use the route context
export const useRouteContext = (): RouteContextType => {
  const context = useContext(RouteContext);
  if (context === undefined) {
    throw new Error("useRouteContext must be used within a RouteProvider");
  }
  return context;
};

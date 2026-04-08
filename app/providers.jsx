"use client";

import { MobileMenuProvider } from "./components/client/MobileMenuContext";

export function Providers({ children }) {
  return <MobileMenuProvider>{children}</MobileMenuProvider>;
}

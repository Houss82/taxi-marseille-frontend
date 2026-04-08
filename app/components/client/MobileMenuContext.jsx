"use client";

import { createContext, useContext, useMemo, useState } from "react";

const MobileMenuContext = createContext({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
});

export function MobileMenuProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const value = useMemo(
    () => ({ isMobileMenuOpen, setIsMobileMenuOpen }),
    [isMobileMenuOpen]
  );
  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu() {
  return useContext(MobileMenuContext);
}

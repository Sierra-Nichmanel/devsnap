import { createContext, useContext, useState } from "react";

type UIContextType = {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (v: boolean) => void;
};

const UIContext = createContext<UIContextType | null>(null);

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <UIContext.Provider value={{ mobileSidebarOpen, setMobileSidebarOpen }}>
      {children}
    </UIContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used inside UIProvider");
  return ctx;
};

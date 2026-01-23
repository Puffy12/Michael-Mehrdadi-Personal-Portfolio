"use client";

import { usePathname } from "next/navigation";
import ConditionalHeader from "@/components/conditional-header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isResumePage = pathname === "/resume";

  return (
    <>
      {!isResumePage && <ConditionalHeader />}
      {children}
      {!isResumePage && <Footer />}
      {!isResumePage && <Toaster position="top-right" />}
      {!isResumePage && <ThemeSwitch />}
    </>
  );
}

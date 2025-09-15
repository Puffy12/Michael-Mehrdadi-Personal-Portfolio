"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Hide main header on CARB page since it has its own header
  if (pathname === "/carb") {
    return null;
  }
  
  return <Header />;
}

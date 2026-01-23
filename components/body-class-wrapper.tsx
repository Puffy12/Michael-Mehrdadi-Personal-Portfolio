"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyClassWrapper() {
  const pathname = usePathname();
  const isSpecialPage = pathname === "/resume";

  useEffect(() => {
    if (isSpecialPage) {
      document.body.classList.remove('bg-gray-50', 'pt-28', 'sm:pt-36', 'dark:bg-gray-900');
      document.body.classList.add('bg-transparent', 'pt-0');
    } else {
      document.body.classList.add('bg-gray-50', 'pt-28', 'sm:pt-36', 'dark:bg-gray-900');
      document.body.classList.remove('bg-transparent', 'pt-0');
    }
  }, [isSpecialPage]);

  return null;
}

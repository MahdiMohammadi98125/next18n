"use client";
import { i18n } from "@/i18n.config";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center gap-2">
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathName(locale)}
          className="px-2 py-1 text-white transition-colors rounded-md bg-black/80 hover:bg-black/50"
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function Button({ children, href, className }) {
  return (
    <Link
      className={`px-4 py-2 text-white transition-colors rounded-md  bg-black/90 hover:bg-black/50 ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}

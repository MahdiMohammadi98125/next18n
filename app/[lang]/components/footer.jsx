import { getDictionary } from "@/lib/dictionary";
import React from "react";

export default async function Footer({ lang }) {
  const {
    footer: { text },
  } = await getDictionary(lang);

  return (
    <footer className="p-8 border mt-[56vh]">
      <p className="text-center">{text}</p>
    </footer>
  );
}

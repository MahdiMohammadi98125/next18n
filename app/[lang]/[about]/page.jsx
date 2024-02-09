import { getDictionary } from "@/lib/dictionary";
import React from "react";

export default async function About({ params }) {
  const {
    page: {
      about: { title, description },
    },
  } = await getDictionary(params.lang);
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

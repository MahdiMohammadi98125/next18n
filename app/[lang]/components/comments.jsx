import { getDictionary } from "@/lib/dictionary";
import React from "react";
import CommentItems from "./comment-items";
import Link from "next/link";

export default async function Comments({ params }) {
  const {
    page: {
      home: { title, description },
    },
    posts,
  } = await getDictionary(params.lang);

  return (
    <div className="my-20">
      <h1 className="mb-4 text-4xl font-bold">{title}</h1>
      <p className="mb-8">{description}</p>
      <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <CommentItems key={post.id} {...post} params={params} />
        ))}
      </div>
    </div>
  );
}

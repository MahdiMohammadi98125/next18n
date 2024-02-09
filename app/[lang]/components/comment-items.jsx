import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "./button";
import Card from "./card";

export default function CommentItems({ id, title, body, image, params }) {
  return (
    <Card
      className="flex flex-col gap-3 overflow-hidden text-center rounded-lg shadow-lg"
      key={id}
    >
      <Image
        src={image}
        alt="image"
        width="200"
        height="200"
        className="w-full"
      />
      <div className="flex flex-col gap-3 p-8">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{body}</p>
        <Button href={`/${params.lang}/comments/${id}`} className="self-center">
          {params.lang == "en" ? "Go To Comment" : "برو به جزییات"}
        </Button>
      </div>
    </Card>
  );
}

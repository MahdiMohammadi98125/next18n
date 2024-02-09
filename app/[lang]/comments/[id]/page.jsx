import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import Button from "../../components/button";
import Card from "../../components/card";

export default async function CommentPage({ params }) {
  const id = params.id;
  const { posts } = await getDictionary(params.lang);
  const filteredPost = posts.filter((post) => post.id == id);
  const [comment] = filteredPost;
  const { title, body, image } = comment;
  return (
    <Card className="flex flex-col gap-3 overflow-hidden text-center rounded-lg shadow-lg max-w-[30rem] mx-auto">
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
        <Button href={`/${params.lang}/`} className={"self-center"}>
          {params.lang == "en" ? "Go Back" : "بازگشت"}
        </Button>
      </div>
    </Card>
  );
}

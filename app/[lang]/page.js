import Image from "next/image";
import Comments from "./components/comments";

export default function Home({ params }) {
  return (
    <div className="max-w-[80rem] px-4 mx-auto my-20 ">
      <Comments params={params} />
    </div>
  );
}

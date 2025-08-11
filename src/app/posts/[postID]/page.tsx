import { fetchData } from "@/lib/api/ fetchData";
import { Post } from "@/types/post";
import Link from "next/link";

export async function generateMetadata({
  params: { postID },
}: {
  params: { postID: string };
  searchParams: string;
}) {
  const post = await fetchData<Post>(`posts/${postID}`);

  return {
    title: `Статья: ${post.title}`,
    description: post.body,
  };
}

export default async function PostID({
  params: { postID },
}: {
  params: {
    postID: string;
  };
}) {
  const post = await fetchData<Post>(`posts/${postID}`);

  return (
    <article>
      <strong>Пост:</strong>
      <div className="">{post.title}</div>
      <br />
      <strong>Текст:</strong>
      <div className="">{post.body}</div>
      <br />
      <strong>Автор:</strong>
      <div className="">{post.userId}</div>
      <Link href={"/posts"}>На страницу с постами</Link>
    </article>
  );
}

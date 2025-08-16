import { Post as PostType } from "@/types/post";
import s from "./Post.module.css";
import { Post } from "@/components/Post";
import { fetchData } from "@/lib/api/ fetchData";

export const metadata = {
  title: "Посты",
};

export default async function Posts() {
  const posts = await fetchData<PostType[]>("/posts");

  return (
    <div className={s.root}>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

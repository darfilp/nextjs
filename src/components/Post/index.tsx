import Link from "next/link";
import s from "./Post.module.css";
import { Post as PostType } from "@/types/post";

export const Post = ({ title, id, body }: PostType) => {
  return (
    <article className={s.root}>
      <div className={s.title}>
        <strong>Название:</strong>
        {title}
      </div>
      <div className={s.body}>
        <strong>Текст:</strong>
        {body}
      </div>
      <Link href={`posts/${id}`}>Полная статья</Link>
    </article>
  );
};

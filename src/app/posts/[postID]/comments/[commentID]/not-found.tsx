"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  const postsID = pathname.split("posts")[1].split("/")[1];
  const commentsID = pathname.split("comments")[1].split("/")[1];

  return (
    <>
      уникальная 404 страница для комментария {postsID} и поста {commentsID}
    </>
  );
}

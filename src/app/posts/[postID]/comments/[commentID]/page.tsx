import { notFound } from "next/navigation";

export default async function Comment({
  params: { postID, commentID },
}: {
  params: {
    postID: string;
    commentID: string;
  };
}) {
  if (Number(postID) > 5) {
    notFound();
  }

  return (
    <div>
      Это комметрий {commentID} для поста {postID}
    </div>
  );
}

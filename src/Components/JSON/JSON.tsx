import React from "react";
import { useParams } from "react-router-dom";

interface Props {
  rows: {}[];
}
export default function JSON({ rows }: Props) {
  console.log(rows, "rows");
  const { postId } = useParams();
  console.log(postId, "title");

  const obj = rows.filter((item: any) => item.title === postId);

  return (
    <div>
      <pre>{window.JSON.stringify(obj, null, 2)}</pre>
    </div>
  );
}

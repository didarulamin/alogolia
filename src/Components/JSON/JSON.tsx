import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Props {
  rows: {}[];
}
export default function JSON({ rows }: Props) {
  const { postId } = useParams();
  const navigate = useNavigate();
  /* console.log(postId, "title"); */

  const obj = rows.filter((item: any) => item.title === postId);

  return (
    <div>
      <h1>row json page</h1>

      <button onClick={() => navigate(-1)}>Go back</button>
      <pre data-testid="json-data">{window.JSON.stringify(obj, null, 2)}</pre>
    </div>
  );
}

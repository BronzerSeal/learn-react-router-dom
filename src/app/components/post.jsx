import React from "react";
import { useNavigate } from "react-router-dom";

export default function Post({ id, posts }) {
  const history = useNavigate();
  function getPostbyId(id) {
    return posts.find((post) => post.id.toString() === id);
  }
  function handleSave() {
    history("/posts");
  }
  const post = getPostbyId(id);
  return (
    <>
      <h2>{post ? post.label : `Post with id:${id} not found`}</h2>
      <button
        onClick={() => {
          handleSave();
        }}
      >
        Сохранить
      </button>
    </>
  );
}

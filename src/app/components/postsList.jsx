import React from "react";
import { Link } from "react-router-dom";

export default function PostsList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} to={`${post.id}`}>
          <h3>{post.label}</h3>
        </Link>
      ))}
    </>
  );
}

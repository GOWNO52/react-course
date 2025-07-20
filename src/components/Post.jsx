// import { useState } from "react";
// import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
// import { posts } from "../mock-data/posts";

// const Post = () => {
//   const {id} = useParams();
//   const navigate = useNavigate()

// const onClickBack=()=>{
//   navigate(`/`)
// }

// const foundPost = posts.find((post)=>post.id === parseInt(id))

//   console.log(`params`, params)
//   return (

//     <div>
//       {foundPost.title}
//       hello
//       <button onClick={onClickBack}>Back</button>
//     </div>
//   )
// }

// export default Post



import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../mock-data/posts";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/");
  };

  const foundPost = posts.find((post) => post.id === parseInt(id));

  if (!foundPost) {
    return (
      <div>
        <h2>Пост не найден</h2>
        <button onClick={onClickBack}>Назад</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{foundPost.title}</h1>
      <p>{foundPost.body}</p>
      <button onClick={onClickBack}>Назад</button>
    </div>
  );
};

export default Post;

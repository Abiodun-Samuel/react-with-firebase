import React, { useState, useEffect } from "react";
import { addDoc } from "firebase/firestore";
import { auth, colRef } from "../firebase.config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  let navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const createPost = async () => {
    await addDoc(colRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  return (
    <div>
      <input
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setPost(e.target.value)}
      ></textarea>
      <button onClick={createPost}>Post</button>
    </div>
  );
}

export default CreatePost;

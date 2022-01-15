import { deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, colRef, db } from "../firebase.config";

function Home({ isAuth }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(colRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  console.log(posts);

  const deletePost = async (id) => {
    const postRef = doc(db, "posts", id);
    await deleteDoc(postRef);
  };

  return (
    <div className="post">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <div className="header">
              <h3>{post.title}</h3>
              {isAuth && post.author.id === auth.currentUser.uid && (
                <button onClick={() => deletePost(post.id)}>&#128465;</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/post')
    .then((res)=>{
         setPosts(res.data.posts)
    })
  },[])

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt="post"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No posts yet</p>
      )}
    </div>
  );
};

export default Feed;

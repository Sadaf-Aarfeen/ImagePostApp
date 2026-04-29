import React from "react";
import axios from "axios";
import Feed from './Feed';
import { useNavigate } from "react-router-dom";

const Create = () => {

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        axios.post("http://localhost:3000/post", formData)
        .then((res)=> {
            navigate('/Feed')
        })
        .catch ((err)=> {
          console.log(err);
        })
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[350]">
        <h1 className="text-2xl font-semibold text-center mb-6">Create Post</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          
            <label className="text-sm font-medium text-gray-600">
              Upload Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className="border border-gray-300 rounded-md p-2 bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 cursor-pointer"
            />
          

          <input
            type="text"
            placeholder="Enter Caption"
            required
            className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;

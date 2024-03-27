import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { fetchproduct } from '../redux/productSlice';
import '../components/createProduct.css'
import { toast } from "react-toastify";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!title || !description) {
        return; // Exit the function without making the API call
      }
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body: description,
      });
      if (response.status === 201) {
        alert("Post created successfully!")
        toast.success("Post created successfully!");
        setSuccessMessage('Post created successfully!');
        setTimeout(() => {
          setSuccessMessage('');
          toast.success("Post created successfully!");
          dispatch(fetchproduct()); // Dispatch action to fetch updated product list
          history('/'); // Redirect to the home page
        }, 2000); // Redirect after 2 seconds
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className='main_contain'>
         <h1>Create New Post</h1>
         <form style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} onSubmit={handleSubmit}>
                  <div className="input-box">
            <input
              type="text"
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="alert_message">
            {submitted && !title && (
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ marginLeft: "4px" }}>The title Field is required</p>
              </label>
            )}
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={1000}
            />
          </div>
          <div className="alert_message">
            {submitted && !description && (
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ marginLeft: "4px" }}>
                  The description Field is required
                </p>
              </label>
            )}
          </div>
          <button className="submit_button" type="submit" >
            Submit
          </button>
          </form>
    </div>
  );
};

export default CreatePost;


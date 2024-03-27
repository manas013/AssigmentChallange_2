import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, CardActions, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${(currentPage - 1) * 10}&_limit=10`);
      setPosts(response.data);
    };
    fetchPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
    <Link to={'/CreateProduct'}><Button> Create New Post</Button></Link> 
      {posts.map((number) =>
        <div key={number.id}>
          <Box sx={{ minWidth: 275 }}>
            <React.Fragment>
              <CardContent variant="outlined">
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  ID:{number.id}
                </Typography>
                <Typography  sx={{ fontSize: 14, textTransform:'capitalize' }} color="text.secondary" gutterBottom>
                  <h2>{number.title}</h2>
                </Typography>
                <Typography sx={{ textTransform:'capitalize' }} variant="body2">
                  {number.body}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
              <Link to={`/ProductDetails/${number.id}`} key={number.id} style={{ textDecoration: 'none' }}>
                <Button size="small"> More Details</Button>
                </Link>
              </CardActions>
            </React.Fragment>
          </Box>
        </div>
      )}
      <div>
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</Button>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
    </div>
  );
};

export default ProductList;

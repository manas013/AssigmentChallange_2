import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, CardActions, CardContent, Typography } from '@mui/material';


const ProductDetails=()=> {
    const params=useParams()
    console.log(params.id)
    const [pageDetals,setpageDetails]=useState()
      useEffect(() => {
        const fetchPosts = async () => {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        //   console.log(response?.data)
          setpageDetails(response.data);
        };
        fetchPosts();
      }, []);

  return (
    <div>
      <div>
        <Box sx={{ minWidth: 275 }}>
          <React.Fragment>
            <CardContent variant="outlined">
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                ID:{pageDetals?.id}
              </Typography>
              <Typography  sx={{ fontSize: 14, textTransform:'capitalize' }} color="text.secondary" gutterBottom>
               <h2>{pageDetals?.title}</h2>
              </Typography>
              <Typography sx={{ textTransform:'capitalize' }} variant="body2">
              {pageDetals?.body}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </React.Fragment>
        </Box>
      </div>    
  </div>
  )
}

export default ProductDetails
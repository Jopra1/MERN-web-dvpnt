
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const Addprod = () => {
  const [form, setForm] = useState({
    title: '',
    image: '',
    price: '',
    category: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product added:', form);
 
    setForm({
      title: '',
      image: '',
      price: '',
      category: ''
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <TextField
        label="Product Name"
        name="title"
        value={form.title}
        onChange={handleChange}
        required
        sx={{ mb: 2, width: '300px' }}
      />
      <TextField
        label="Image URL"
        name="image"
        value={form.image}
        onChange={handleChange}
        required
        sx={{ mb: 2, width: '300px' }}
      />
      <TextField
        label="Price"
        name="price"
        value={form.price}
        onChange={handleChange}
        required
        sx={{ mb: 2, width: '300px' }}
      />
      <TextField
        label="Category"
        name="category"
        value={form.category}
        onChange={handleChange}
        required
        sx={{ mb: 2, width: '300px' }}
      />
      <Button type="submit" variant="contained">Add Product</Button>
    </Box>
  );
};

export default Addprod;

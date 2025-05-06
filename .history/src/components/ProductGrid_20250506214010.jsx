import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import Product from "./Product"; // Import Product component
import productsData from "../data/productsData.json"; // Import the JSON file

const ProductGrid = () => {
  const [sortBy, setSortBy] = useState("featured");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Header with product count and sorting */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          mb: 3,
          gap: 2,
        }}
      >
        <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
          {productsData.products.length} Products Found
        </Typography>

        <FormControl size="small" sx={{ minWidth: { xs: "100%", sm: 200 } }}>
          <InputLabel id="sort-select-label">Sort By</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={sortBy}
            label="Sort By"
            onChange={handleSortChange}
          >
            <MenuItem value="featured">Featured</MenuItem>
            <MenuItem value="price-low">Price: Low to High</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="rating">Best Rating</MenuItem>
            <MenuItem value="newest">Newest First</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Responsive Product Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: { xs: 2, sm: 2, md: 3, lg: 4 },
        }}
      >
        {productsData.products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
            totalReviews={product.totalReviews}
            isHot={product.isHot}
            discount={product.discount}
          />
        ))}
      </Box>

      {/* Pagination could be added here */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        {/* Pagination component would go here */}
      </Box>
    </Box>
  );
};

export default ProductGrid;

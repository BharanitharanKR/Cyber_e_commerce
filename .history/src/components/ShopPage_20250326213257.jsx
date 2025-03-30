import React from "react";
import { Grid, Box, Container } from "@mui/material";
import Sidebar from "../components/Slidebar";
import Product from "../components/ProductGrid"; // Ensure correct path

const ShopPage = () => {
  // Example product data (Replace with API data if needed)
  const products = [
    { id: 1, name: "OnePlus 9", price: "$700", image: "oneplus.jpg" },
    { id: 2, name: "Samsung S21", price: "$800", image: "samsung.jpg" },
    { id: 3, name: "iPhone 13", price: "$900", image: "iphone.jpg" },
    { id: 4, name: "Google Pixel 6", price: "$750", image: "pixel.jpg" },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", height: "100vh", padding: 3 }}>
        {/* Sidebar (Full Height & Fixed Width) */}
        <Box sx={{ width: "300px", height: "100%", flexShrink: 0 }}>
          <Sidebar />
        </Box>

        {/* Product Grid (Takes Remaining Space) */}
        <Box sx={{ flexGrow: 1, overflow: "hidden", paddingLeft: 2 }}>
          <Grid container spacing={2} columns={12}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ShopPage;

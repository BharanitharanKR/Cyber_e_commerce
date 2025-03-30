import React from "react";
import { Grid, Box, Container } from "@mui/material";
import Sidebar from "../components/Slidebar";
import Product from "../components/ProductGrid"; // Ensure correct path

const ShopPage = () => {
  // Generate 28 product items
  const products = new Array(28).fill(0);

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
            {products.map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Product />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ShopPage;

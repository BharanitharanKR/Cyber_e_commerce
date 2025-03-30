import React from "react";
import { Grid, Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Product from "./Product"; // Ensure correct path

const ShopPage = () => {
  // Generate 28 product items
  const products = new Array(28).fill(0);

  return (
    <Box sx={{ display: "flex", gap: 2, padding: 3 }}>
      {/* Sidebar (Fixed Width) */}
      <Box sx={{ width: "300px", flexShrink: 0 }}>
        <Sidebar />
      </Box>

      {/* Product Grid (Takes Remaining Space) */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {products.map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Product />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ShopPage;

import React from "react";
import { Box, Container } from "@mui/material";
import Slidebar from "../components/Slidebar"; // Ensure correct import
import ProductGrid from "../components/ProductGrid"; // Ensure correct import

const ShopPage = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", height: "100vh", padding: 3 }}>
        {/* Sidebar (Fixed Width & Full Height) */}
        <Box
          sx={{
            flexShrink: 0, // Prevent shrinking
            width: "20%", // Set Sidebar width
            mt: 4, // Extra margin on top
          }}
        >
          <Slid/>
        </Box>

        {/* Product Grid (Takes Remaining Space) */}
        <Box sx={{ flexGrow: 1, ml: 3 }}>
          <ProductGrid />
        </Box>
      </Box>
    </Container>
  );
};

export default ShopPage;

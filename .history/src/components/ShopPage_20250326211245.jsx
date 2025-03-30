import React from "react";
import { Grid, Box } from "@mui/material";
import Sidebar from "../Sidebar";
import ProductGrid from "../ProductGrid"; // Ensure correct path

const ShopPage = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, padding: 3 }}>
      {/* Sidebar (Fixed Width) */}
      <Box sx={{ width: "300px" }}>
        <Sidebar />
      </Box>

      {/* Product Grid (Takes Remaining Space) */}
      <Box sx={{ flexGrow: 1 }}>
        <ProductGrid />
      </Box>
    </Box>
  );
};

export default ShopPage;

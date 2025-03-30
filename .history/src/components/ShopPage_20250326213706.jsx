import React from "react";
import { Grid, Box, Container } from "@mui/material";
import Sidebar from "../components/Slidebar"; // Ensure correct import

const ShopPage = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", height: "100vh", padding: 3 }}>
        {/* Sidebar (Fixed Width) */}
        <Box sx={{ flex: "0 0 300px", height: "100%", overflow: "auto" }}>
          <Sidebar />
        </Box>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, paddingLeft: 3 }}>
          {/* Product Grid or Other Components */}
        </Box>
      </Box>
    </Container>
  );
};

export default ShopPage;

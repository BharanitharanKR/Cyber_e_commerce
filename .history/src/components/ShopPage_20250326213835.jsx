import React from "react";
import { Box, Container } from "@mui/material";
import Sidebar from "../components/Slidebar"; // Ensure correct import

const ShopPage = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", height: "100vh", padding: 3 }}>
        {/* Sidebar (Full Height & Always on Left) */}
        <Box sx={{ position: "fixed", left: 0, top: 0, bottom: 0 }}>
          <Sidebar />
        </Box>
      </Box>
    </Container>
  );
};

export default ShopPage;

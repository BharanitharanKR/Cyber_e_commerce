import React from "react";
import { Box, Container } from "@mui/material";
import Sidebar from "../components/Slidebar"; // Ensure correct import

const ShopPage = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", height: "100vh", padding: 3 }}>
        {/* Sidebar (Full Height & Always on Left) */}
        <Box
          sx={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            mt: 4, // Adds margin at the top
            p: 2, // Adds padding inside the sidebar
            backgroundColor: "white", // Ensures visibility if needed
            boxShadow: 2, // Adds a slight shadow for separation
          }}
        >
          <Sidebar />
        </Box>
      </Box>
    </Container>
  );
};

export default ShopPage;

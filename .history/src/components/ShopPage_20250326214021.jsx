import React from "react";
import { Box, Container } from "@mui/material";
import Sidebar from "../components/Slidebar"; // Ensure correct import

const ShopPage = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", height: "100vh", padding: 3 }}>
        {/* Sidebar (Full Height & Takes its Actual Size) */}
        <Box
          sx={{
            flexGrow: 0, // Prevents shrinking
            flexShrink: 0, // Prevents shrinking further
            display: "flex",
            flexDirection: "column",
            mt: 4, // Extra margin on top
          }}
        >
          <Sidebar />
        </Box>

        {/* Dummy Box to take remaining space */}
        <Box sx={{ flexGrow: 1 }} />
      </Box>
    </Container>
  );
};

export default ShopPage;

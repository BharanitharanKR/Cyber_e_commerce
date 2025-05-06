import React, { useState } from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Slidebar from "./Slidebar";
import ProductGrid from "./ProductGrid";

const ShopPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 3 },
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: { xs: "100%", md: "280px", lg: "320px" },
            flexShrink: 0,
            order: { xs: 1, md: 0 }, // On mobile, filters appear after filter button but before products
          }}
        >
          <Slidebar
            isMobileOpen={isMobileFilterOpen}
            setIsMobileOpen={setIsMobileFilterOpen}
          />
        </Box>

        {/* Product Grid (Takes Remaining Space) */}
        <Box
          sx={{
            flexGrow: 1,
            width: {
              xs: "100%",
              md: "calc(100% - 300px)",
              lg: "calc(100% - 340px)",
            },
            order: { xs: 2, md: 1 },
          }}
        >
          <ProductGrid />
        </Box>
      </Box>
    </Container>
  );
};

export default ShopPage;

import React, { useState } from "react";
import {
  Box,
  Slider,
  FormControlLabel,
  Checkbox,
  Collapse,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

function valuetext(value) {
  return `$${value}`;
}

const Sidebar = () => {
  const [expanded, setExpanded] = useState(null);
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const [brands, setBrands] = useState({
    Samsung: false,
    Apple: false,
    Sony: false,
    LG: false,
    HP: false,
    Dell: false,
  });

  const handleExpand = (item) => {
    setExpanded(expanded === item ? null : item);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleBrandChange = (event) => {
    setBrands({ ...brands, [event.target.name]: event.target.checked });
  };

  return (
    <Box
      sx={{
        width: "20%",
        minHeight: "100vh",
        p: 3,
        bgcolor: "#f8f8f8", // Light gray background for sidebar
      }}
    >
      <List>
        {/* Price Filter */}
        <ListItemButton onClick={() => handleExpand("price")} sx={{ mb: 1 }}>
          <Box
            sx={{
              bgcolor: "#ffffff",
              px: 2,
              py: 1,
              borderRadius: 1,
              width: "100%",
            }}
          >
            <ListItemText primary="Price" />
          </Box>
        </ListItemButton>
        <Collapse in={expanded === "price"} timeout="auto" unmountOnExit>
          <Box sx={{ px: 3, py: 2 }}>
            <Typography
              sx={{ bgcolor: "#ffffff", px: 2, py: 1, borderRadius: 1 }}
            >
              Set Price Range
            </Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={5000}
            />
          </Box>
        </Collapse>

        {/* Separator Line */}
        <Divider sx={{ my: 2, bgcolor: "#ffffff" }} />

        {/* Brand Filter */}
        <ListItemButton onClick={() => handleExpand("brand")} sx={{ mb: 1 }}>
          <Box
            sx={{
              bgcolor: "#ffffff",
              px: 2,
              py: 1,
              borderRadius: 1,
              width: "100%",
            }}
          >
            <ListItemText primary="Brand" />
          </Box>
        </ListItemButton>
        <Collapse in={expanded === "brand"} timeout="auto" unmountOnExit>
          <Box sx={{ px: 3, py: 2 }}>
            <Typography
              sx={{ bgcolor: "#ffffff", px: 2, py: 1, borderRadius: 1 }}
            >
              Choose a Brand
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {Object.keys(brands).map((brand) => (
                <FormControlLabel
                  key={brand}
                  control={
                    <Checkbox
                      checked={brands[brand]}
                      onChange={handleBrandChange}
                      name={brand}
                    />
                  }
                  label={brand}
                />
              ))}
            </Box>
          </Box>
        </Collapse>

        {/* Separator Line */}
        <Divider sx={{ my: 2, bgcolor: "#be6363" }} />

        {/* Other Filters */}
        {["Category", "Ratings", "Availability"].map((item) => (
          <Box key={item}>
            <ListItemButton onClick={() => handleExpand(item)} sx={{ mb: 1 }}>
              <Box
                sx={{
                  bgcolor: "#e0e0e0",
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  width: "100%",
                }}
              >
                <ListItemText primary={item} />
              </Box>
            </ListItemButton>
            <Divider sx={{ my: 2, bgcolor: "#d0d0d0" }} />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

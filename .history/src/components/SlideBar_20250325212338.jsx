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
        pr: 2,
        minHeight: "100vh",
        p: 3,
        bgcolor: "#f0f0f0", // Dull background
      }}
    >
      <List>
        {/* Price Filter */}
        <ListItemButton
          onClick={() => handleExpand("price")}
          sx={{
            bgcolor: "#e0e0e0",
            borderRadius: 1,
            py: 1.5,
            px: 2,
            mb: 2,
            "&:hover": { bgcolor: "#d6d6d6" },
          }}
        >
          <ListItemText primary="Price" />
        </ListItemButton>
        <Collapse in={expanded === "price"} timeout="auto" unmountOnExit>
          <Box sx={{ px: 3, py: 2 }}>
            <Typography gutterBottom>Set Price Range</Typography>
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
        <Divider sx={{ my: 3, bgcolor: "#d0d0d0" }} />

        {/* Brand Filter */}
        <ListItemButton
          onClick={() => handleExpand("brand")}
          sx={{
            bgcolor: "#e0e0e0",
            borderRadius: 1,
            py: 1.5,
            px: 2,
            mb: 2,
            "&:hover": { bgcolor: "#d6d6d6" },
          }}
        >
          <ListItemText primary="Brand" />
        </ListItemButton>
        <Collapse in={expanded === "brand"} timeout="auto" unmountOnExit>
          <Box
            sx={{
              px: 3,
              py: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
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
                sx={{
                  bgcolor: "#f5f5f5",
                  borderRadius: 1,
                  p: 1.5,
                  width: "100%",
                }}
              />
            ))}
          </Box>
        </Collapse>

        {/* Separator Line */}
        <Divider sx={{ my: 3, bgcolor: "#d0d0d0" }} />

        {/* Other Filters */}
        {["Category", "Ratings", "Availability"].map((item) => (
          <Box key={item}>
            <ListItemButton
              onClick={() => handleExpand(item)}
              sx={{
                bgcolor: "#e0e0e0",
                borderRadius: 1,
                py: 1.5,
                px: 2,
                mb: 2,
                "&:hover": { bgcolor: "#d6d6d6" },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
            <Divider sx={{ my: 2, bgcolor: "#d0d0d0" }} />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

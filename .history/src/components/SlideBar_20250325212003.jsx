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
        borderRight: "1px solid #ddd",
        minHeight: "100vh",
        p: 2,
        bgcolor: "#f8f9fa",
      }}
    >
      <List>
        {/* Price Filter */}
        <ListItemButton
          onClick={() => handleExpand("price")}
          sx={{
            bgcolor: "#e3e4e6",
            borderRadius: 1,
            mb: 1,
            "&:hover": { bgcolor: "#d6d8da" },
          }}
        >
          <ListItemText primary="Price" />
        </ListItemButton>
        <Collapse in={expanded === "price"} timeout="auto" unmountOnExit>
          <Box sx={{ px: 2, py: 1 }}>
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

        {/* Brand Filter */}
        <ListItemButton
          onClick={() => handleExpand("brand")}
          sx={{
            bgcolor: "#e3e4e6",
            borderRadius: 1,
            mb: 1,
            "&:hover": { bgcolor: "#d6d8da" },
          }}
        >
          <ListItemText primary="Brand" />
        </ListItemButton>
        <Collapse in={expanded === "brand"} timeout="auto" unmountOnExit>
          <Box
            sx={{
              px: 2,
              py: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
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
                  bgcolor: "#f1f3f5",
                  borderRadius: 1,
                  p: 1,
                  width: "100%",
                }}
              />
            ))}
          </Box>
        </Collapse>

        {/* Other Filters */}
        {["Category", "Ratings", "Availability"].map((item) => (
          <ListItemButton
            key={item}
            onClick={() => handleExpand(item)}
            sx={{
              bgcolor: "#e3e4e6",
              borderRadius: 1,
              mb: 1,
              "&:hover": { bgcolor: "#d6d8da" },
            }}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

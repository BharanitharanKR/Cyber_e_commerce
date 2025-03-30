import React, { useState } from "react";
import {
  Box,
  Slider,
  FormControl,
  FormControlLabel,
  Checkbox,
  Collapse,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

// Range slider function
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

  // Toggle list items
  const handleExpand = (item) => {
    setExpanded(expanded === item ? null : item);
  };

  // Handle slider change
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Handle brand selection
  const handleBrandChange = (event) => {
    setBrands({ ...brands, [event.target.name]: event.target.checked });
  };

  return (
    <Box
      sx={{
        width: "20%",
        pr: 2,
        borderRight: "1px solid #cdcdcd",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <List>
        {/* Price Section */}
        <ListItemButton onClick={() => handleExpand("price")}>
          <ListItemText primary="Price" />
        </ListItemButton>
        <Collapse in={expanded === "price"} timeout="auto" unmountOnExit>
          <Box sx={{ px: 2 }}>
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

        {/* Brand Section */}
        <ListItemButton onClick={() => handleExpand("brand")}>
          <ListItemText primary="Brand" />
        </ListItemButton>
        <Collapse in={expanded === "brand"} timeout="auto" unmountOnExit>
          <Box sx={{ px: 2 }}>
            {Object.keys(brands).map((brand) => (
              <FormControlLabel
                key={brand}
                control={
                  <Checkbox
                    className="flex-col"
                    checked={brands[brand]}
                    onChange={handleBrandChange}
                    name={brand}
                  />
                }
                label={brand}
              />
            ))}
          </Box>
        </Collapse>

        {/* Additional Sections */}
        {["Category", "Ratings", "Availability"].map((item) => (
          <ListItemButton key={item} onClick={() => handleExpand(item)}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

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
import {
  ExpandLess,
  ExpandMore,
  AttachMoney,
  Business,
  Category,
  Star,
  CheckCircle,
} from "@mui/icons-material";

function valuetext(value) {
  return `${value}`;
}

const Sidebar = () => {
  const [expanded, setExpanded] = useState(null);
  const [range, setRange] = useState([10, 90]); // Default range
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

  const handleRangeChange = (event, newValue) => {
    setRange(newValue);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleBrandChange = (event) => {
    setBrands({ ...brands, [event.target.name]: event.target.checked });
  };

  return (
    <Box className="mt-28"
      sx={{
        width: "20%",
        minHeight: "100vh",
        p: 3,
      }}
    >
      <List>
        {/* Range Filter */}
        <ListItemButton onClick={() => handleExpand("range")} sx={{ mb: 1 }}>
          <CheckCircle sx={{ mr: 1 }} />
          <ListItemText
            primary={<Typography fontWeight="bold">Range</Typography>}
          />
          {expanded === "range" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={expanded === "range"} timeout="auto" unmountOnExit>
          <Box sx={{ px: 3, py: 2 }}>
            <Typography fontWeight="bold">Select Range</Typography>
            <Slider
              value={range}
              onChange={handleRangeChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={100}
            />
          </Box>
        </Collapse>

        {/* Separator Line */}
        <Divider sx={{ my: 2 }} />

        {/* Price Filter */}
        <ListItemButton onClick={() => handleExpand("price")} sx={{ mb: 1 }}>
          <AttachMoney sx={{ mr: 1 }} />
          <ListItemText
            primary={<Typography fontWeight="bold">Price</Typography>}
          />
          {expanded === "price" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={expanded === "price"} timeout="auto" unmountOnExit>
          <Box sx={{ px: 3, py: 2 }}>
            <Typography fontWeight="bold">Set Price Range</Typography>
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
        <Divider sx={{ my: 2 }} />

        {/* Brand Filter */}
        <ListItemButton onClick={() => handleExpand("brand")} sx={{ mb: 1 }}>
          <Business sx={{ mr: 1 }} />
          <ListItemText
            primary={<Typography fontWeight="bold">Brand</Typography>}
          />
          {expanded === "brand" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={expanded === "brand"} timeout="auto" unmountOnExit>
          <Box sx={{ px: 3, py: 2 }}>
            <Typography fontWeight="bold">Choose a Brand</Typography>
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
        <Divider sx={{ my: 2 }} />

        {/* Other Filters */}
        {[
          { name: "Category", icon: <Category sx={{ mr: 1 }} /> },
          { name: "Ratings", icon: <Star sx={{ mr: 1 }} /> },
          { name: "Availability", icon: <CheckCircle sx={{ mr: 1 }} /> },
        ].map((item) => (
          <Box key={item.name}>
            <ListItemButton
              onClick={() => handleExpand(item.name)}
              sx={{ mb: 1 }}
            >
              {item.icon}
              <ListItemText
                primary={<Typography fontWeight="bold">{item.name}</Typography>}
              />
              {expanded === item.name ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Divider sx={{ my: 2 }} />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

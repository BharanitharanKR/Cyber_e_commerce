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

const Slidebar = () => {
  const [expanded, setExpanded] = useState(null);
  const [range, setRange] = useState([10, 90]);
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const [brands, setBrands] = useState({
    Samsung: false,
    Apple: false,
    Sony: false,
    LG: false,
    HP: false,
    Dell: false,
  });

  const filters = [
    { name: "Category", icon: <Category sx={{ mr: 1 }} /> },
    { name: "Ratings", icon: <Star sx={{ mr: 1 }} /> },
    { name: "Availability", icon: <CheckCircle sx={{ mr: 1 }} /> },
  ];

  return (
    <Box
      sx={{
        minWidth: "250px", // Prevents shrinking
        maxWidth: "20%",
        minHeight: "100vh",
        p: 3,
        bgcolor: "#f9f9f9",
      }}
    >
      <List>
        {/* Range Filter */}
        <ListItemButton
          onClick={() => setExpanded(expanded === "range" ? null : "range")}
          sx={{ mb: 1 }}
        >
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
              onChange={(e, newValue) => setRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={100}
            />
          </Box>
        </Collapse>
        <Divider sx={{ my: 2 }} />

        {/* Price Filter */}
        <ListItemButton
          onClick={() => setExpanded(expanded === "price" ? null : "price")}
          sx={{ mb: 1 }}
        >
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
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={5000}
            />
          </Box>
        </Collapse>
        <Divider sx={{ my: 2 }} />

        {/* Brand Filter */}
        <ListItemButton
          onClick={() => setExpanded(expanded === "brand" ? null : "brand")}
          sx={{ mb: 1 }}
        >
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
                      onChange={(e) =>
                        setBrands({
                          ...brands,
                          [e.target.name]: e.target.checked,
                        })
                      }
                      name={brand}
                    />
                  }
                  label={brand}
                />
              ))}
            </Box>
          </Box>
        </Collapse>
        <Divider sx={{ my: 2 }} />

        
        {filters.map((item) => (
          <Box key={item.name}>
            <ListItemButton
              onClick={() =>
                setExpanded(expanded === item.name ? null : item.name)
              }
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

export default Slidebar;


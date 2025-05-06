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
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  AttachMoney,
  Business,
  Category,
  Star,
  CheckCircle,
  Close,
  FilterList,
} from "@mui/icons-material";

const Slidebar = ({ isMobileOpen, setIsMobileOpen }) => {
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

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const filters = [
    { name: "Category", icon: <Category sx={{ mr: 1 }} /> },
    { name: "Ratings", icon: <Star sx={{ mr: 1 }} /> },
    { name: "Availability", icon: <CheckCircle sx={{ mr: 1 }} /> },
  ];

  const toggleDrawer = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const filterContent = (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          display: { xs: "flex", md: "none" },
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Filters
        </Typography>
        <IconButton onClick={toggleDrawer}>
          <Close />
        </IconButton>
      </Box>

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
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography variant="body2">${priceRange[0]}</Typography>
              <Typography variant="body2">${priceRange[1]}</Typography>
            </Box>
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

      {isSmallScreen && (
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" sx={{ width: "48%" }}>
            Reset
          </Button>
          <Button variant="contained" sx={{ width: "48%" }}>
            Apply Filters
          </Button>
        </Box>
      )}
    </Box>
  );

  // For desktop screens
  if (!isSmallScreen) {
    return (
      <Box
        sx={{
          width: "100%",
          p: 3,
          bgcolor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        {filterContent}
      </Box>
    );
  }

  // For mobile screens
  return (
    <>
      <Button
        variant="contained"
        startIcon={<FilterList />}
        fullWidth
        onClick={toggleDrawer}
        sx={{ mb: 2 }}
      >
        Filters
      </Button>
      <Drawer
        anchor="left"
        open={isMobileOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "85%", sm: "350px" },
            p: 2,
            boxSizing: "border-box",
            overflow: "auto",
          },
        }}
      >
        {filterContent}
      </Drawer>
    </>
  );
};

export default Slidebar;

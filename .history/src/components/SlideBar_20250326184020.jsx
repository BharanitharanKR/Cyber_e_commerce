import React, { useState } from "react";
import {
  Box,
  Grid,
  Slider,
  FormControlLabel,
  Checkbox,
  Collapse,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Card,
  CardContent,
  CardMedia,
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
} from "@mui/icons-material";

function valuetext(value) {
  return `${value}`;
}

const products = [
  {
    title: "Samsung Galaxy S21",
    price: "$799",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Apple iPhone 13",
    price: "$999",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Sony Headphones",
    price: "$299",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "LG OLED TV",
    price: "$1499",
    image: "https://via.placeholder.com/150",
  },
];

const SidebarWithCards = () => {
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
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: "20%", p: 3, bgcolor: "#f4f4f4" }}>
        <List>
          <ListItemButton onClick={() => handleExpand("range")}>
            <CheckCircle sx={{ mr: 1 }} />
            <ListItemText
              primary={<Typography fontWeight="bold">Range</Typography>}
            />
            {expanded === "range" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={expanded === "range"} timeout="auto" unmountOnExit>
            <Box sx={{ px: 3, py: 2 }}>
              <Slider
                value={range}
                onChange={handleRangeChange}
                valueLabelDisplay="auto"
                min={0}
                max={100}
              />
            </Box>
          </Collapse>
          <Divider sx={{ my: 2 }} />
          <ListItemButton onClick={() => handleExpand("price")}>
            <AttachMoney sx={{ mr: 1 }} />
            <ListItemText
              primary={<Typography fontWeight="bold">Price</Typography>}
            />
            {expanded === "price" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={expanded === "price"} timeout="auto" unmountOnExit>
            <Box sx={{ px: 3, py: 2 }}>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={5000}
              />
            </Box>
          </Collapse>
        </List>
      </Box>

      {/* Product Cards Grid */}
      <Box sx={{ width: "80%", p: 3 }}>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.price}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Sidebar;

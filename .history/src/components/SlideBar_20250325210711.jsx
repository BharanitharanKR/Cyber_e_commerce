import React, { useState } from "react";
import {
  Box,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

// Sample products data
const products = [
  { id: 1, name: "Samsung Galaxy S21", price: "$2300", image: "/phone.jpg" },
  {
    id: 2,
    name: "Wireless Headphones",
    price: "$70",
    image: "/headphones.jpg",
  },
  { id: 3, name: "Gaming Mouse", price: "$50", image: "/mouse.jpg" },
  { id: 4, name: "Smart TV", price: "$1200", image: "/tv.jpg" },
  { id: 5, name: "Laptop", price: "$1500", image: "/laptop.jpg" },
];

// Range slider function
function valuetext(value) {
  return `$${value}`;
}

const SlideBar = () => {
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const [category, setCategory] = useState("");

  // Handle slider change
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ display: "flex", mt: 4 }}>
      {/* Sidebar (25%) */}
      <Box sx={{ width: "25%", pr: 2 }}>
        {/* Dropdown Menu */}
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="fashion">Fashion</MenuItem>
            <MenuItem value="home">Home Appliances</MenuItem>
          </Select>
        </FormControl>

        {/* Range Slider */}
        <Box sx={{ mt: 4 }}>
          <Typography gutterBottom>Price Range</Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={3000}
          />
        </Box>
      </Box>

      {/* Product Grid (75%) */}
      <Box sx={{ width: "75%" }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2">{product.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SlideBar;

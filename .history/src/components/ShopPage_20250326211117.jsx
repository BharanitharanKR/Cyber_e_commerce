import React from "react";
import {
  Drawer,
  List,
  ListItem,
  FormControlLabel,
  Checkbox,
  Divider,
  Typography,
} from "@mui/material";
import ProductGrid from "./ProductGridjsxjsx"; // Import your product data
import "./ShopPage.css"; // Custom CSS file

const Sidebar = () => {
  return (
    <Drawer variant="permanent" className="sidebar">
      <List>
        <Typography variant="h6" className="sidebar-title">
          Filters
        </Typography>
        <Divider />
        <ListItem>
          <Typography>Price Range</Typography>
        </ListItem>
        <ListItem>
          <FormControlLabel control={<Checkbox />} label="$0 - $500" />
        </ListItem>
        <ListItem>
          <FormControlLabel control={<Checkbox />} label="$500 - $1000" />
        </ListItem>
        <Divider />
        <ListItem>
          <Typography>Brand</Typography>
        </ListItem>
        <ListItem>
          <FormControlLabel control={<Checkbox />} label="Apple" />
        </ListItem>
        <ListItem>
          <FormControlLabel control={<Checkbox />} label="Samsung" />
        </ListItem>
      </List>
    </Drawer>
  );
};

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="body2">${product.price}</Typography>
        </div>
      ))}
    </div>
  );
};

const ShopPage = () => {
  return (
    <div className="shop-container">
      <Sidebar />
      <ProductGrid />
    </div>
  );
};

export default ShopPage;

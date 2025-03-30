import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import oneplus from "../assets/oneplus";

const products = Array.from({ length: 28 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: `$${(Math.random() * 500 + 50).toFixed(2)}`,
  image: `https://via.placeholder.com/150?text=Product+${index + 1}`,
}));

const ProductGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="textSecondary">{product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;

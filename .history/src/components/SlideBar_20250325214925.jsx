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
  CheckCircle,
  Star,
} from "@mui/icons-material";
import Image from "next/image";

function valuetext(value) {
  return `${value}`;
}

const Sidebar = ({
  expanded,
  setExpanded,
  range,
  setRange,
  priceRange,
  setPriceRange,
  brands,
  setBrands,
}) => {
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
    <Box sx={{ width: "20%", minHeight: "100vh", p: 3 }}>
      <List>
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

        <Divider sx={{ my: 2 }} />

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

        <Divider sx={{ my: 2 }} />

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
        </Collapse>
      </List>
    </Box>
  );
};

const ProductCard = () => (
  <div className="max-w-[240px] border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm">
    <div className="relative">
      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">
        HOT
      </div>
      <div className="relative h-[180px] bg-[#f0f9f9]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Product-fVcYzHpbrCAblH3c3Eei8jtukCuO0w.png"
          alt="Product"
          layout="fill"
          className="object-contain p-2"
        />
      </div>
    </div>
    <div className="p-3">
      <div className="flex items-center mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#d32f2f] text-[#d32f2f]" />
        ))}
        <span className="text-gray-500 text-xs ml-1">(738)</span>
      </div>
      <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
        TOZO T6 True Wireless Earbuds Bluetooth Headphones
      </h3>
      <div className="text-[#d32f2f] font-bold">$70</div>
    </div>
  </div>
);

const ProductsGrid = () => {
  const products = new Array(28).fill(0);
  return (
    <div className="w-4/5 p-5 grid grid-cols-4 gap-6">
      {products.map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
};

const MainPage = () => {
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

  return (
    <div className="flex">
      <Sidebar
        expanded={expanded}
        setExpanded={setExpanded}
        range={range}
        setRange={setRange}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        brands={brands}
        setBrands={setBrands}
      />
      <ProductsGrid />
    </div>
  );
};

export default MainPage;

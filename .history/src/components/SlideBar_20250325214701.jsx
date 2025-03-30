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

  return (
    <Box className="mt-1" sx={{ width: "20%", minHeight: "100vh", p: 3 }}>
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
              onChange={(e, newValue) => setRange(newValue)}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={100}
            />
          </Box>
        </Collapse>

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
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={5000}
            />
          </Box>
        </Collapse>

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
          fill
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
    <div className="w-4/5 p-5">
      <div className="grid grid-cols-4 gap-6">
        {products.map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
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

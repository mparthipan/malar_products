import React, { useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

// ✅ Products Data
const products = [
  {
    name: "Hair Oil",
    image: require("../Assets/products/hair-oil.png"),
    benefits: [
      { label: "Deep Nourishment", image: require("../Assets/benefits/benefit1.png") },
      { label: "Strengthens Roots", image: require("../Assets/benefits/benefit2.png") },
      { label: "Controls Hair Fall", image: require("../Assets/benefits/benefit3.png") },
      { label: "Adds Shine", image: require("../Assets/benefits/benefit4.png") },
    ],
    ingredients: "Amla, Coconut Oil, Neem, Aloe Vera",
  },
  {
    name: "Kumkumadhi Serum",
    image: require("../Assets/products/kumkumadhi.png"),
    benefits: [
      { label: "Improves Skin Glow", image: require("../Assets/benefits/benefit1.png") },
      { label: "Reduces Pigmentation", image: require("../Assets/benefits/benefit2.png") },
      { label: "Anti-aging", image: require("../Assets/benefits/benefit3.png") },
      { label: "Even Skin Tone", image: require("../Assets/benefits/benefit4.png") },
    ],
    ingredients: "Saffron, Sandalwood, Aloe Vera",
  },
  {
    name: "Rosemary Hair Serum",
    image: require("../Assets/products/rosemary.png"),
    benefits: [
      { label: "Promotes Hair Growth", image: require("../Assets/benefits/benefit1.png") },
      { label: "Reduces Hair Fall", image: require("../Assets/benefits/benefit2.png") },
      { label: "Improves Scalp Health", image: require("../Assets/benefits/benefit3.png") },
      { label: "Adds Thickness", image: require("../Assets/benefits/benefit4.png") },
    ],
    ingredients: "Rosemary, Castor Oil, Vitamin E",
  },
  {
    name: "Dandruff Hair Oil",
    image: require("../Assets/products/dandruff.png"),
    benefits: [
      { label: "Removes Dandruff", image: require("../Assets/benefits/benefit1.png") },
      { label: "Soothes Scalp", image: require("../Assets/benefits/benefit2.png") },
      { label: "Prevents Itching", image: require("../Assets/benefits/benefit3.png") },
      { label: "Hydrates Hair", image: require("../Assets/benefits/benefit4.png") },
    ],
    ingredients: "Neem, Tea Tree Oil, Coconut Oil",
  },
  {
    name: "Face Pack Powder",
    image: require("../Assets/products/facepack.png"),
    benefits: [
      { label: "Brightens Skin", image: require("../Assets/benefits/benefit1.png") },
      { label: "Removes Tan", image: require("../Assets/benefits/benefit2.png") },
      { label: "Cleanses Pores", image: require("../Assets/benefits/benefit3.png") },
      { label: "Natural Glow", image: require("../Assets/benefits/benefit4.png") },
    ],
    ingredients: "Multani Mitti, Turmeric, Rose Petals",
  },
  {
    name: "Arappu Hair Pack",
    image: require("../Assets/products/arappu.png"),
    benefits: [
      { label: "Natural Hair Cleanser", image: require("../Assets/benefits/benefit1.png") },
      { label: "Adds Smoothness", image: require("../Assets/benefits/benefit2.png") },
      { label: "Prevents Hair Fall", image: require("../Assets/benefits/benefit3.png") },
      { label: "Cooling Effect", image: require("../Assets/benefits/benefit4.png") },
    ],
    ingredients: "Arappu Leaves, Hibiscus",
  },
  {
    name: "Shikakai Powder",
    image: require("../Assets/products/shikakai.png"),
    benefits: [
      { label: "Natural Shampoo", image: require("../Assets/benefits/benefit1.png") },
      { label: "Strengthens Hair", image: require("../Assets/benefits/benefit2.png") },
      { label: "Adds Shine", image: require("../Assets/benefits/benefit3.png") },
      { label: "Prevents Split Ends", image: require("../Assets/benefits/benefit4.png") },
    ],
    ingredients: "Shikakai, Reetha, Amla",
  },
  {
    name: "Curry Leaf Idly Podi",
    image: require("../Assets/products/idlypodi.png"),
    benefits: [
      { label: "Rich in Iron", image: require("../Assets/benefits/benefit1.png") },
      { label: "Improves Digestion", image: require("../Assets/benefits/benefit2.png") },
      { label: "Boosts Immunity", image: require("../Assets/benefits/benefit3.png") },
      { label: "Healthy Nutrition", image: require("../Assets/benefits/benefit4.png") },
    ],
    ingredients: "Curry Leaves, Dal, Spices",
  },
];

const BenefitsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // ✅ Slider Settings
  const settings = {
    centerMode: true,
    centerPadding: isMobile ? "20px" : "80px",
    slidesToShow: isMobile ? 1 : 3,
    infinite: true,
    autoplay: true, autoplaySpeed: 2500,
    arrows: false,
    dots: true,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: 600, mb: 4, marginBottom: "60px", backgroundColor: "rgba(42, 107, 55, 0.1)", padding: "12px" }}
      >
        Product Benefits
      </Typography>
      <Slider {...settings}>
        {products.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <Box key={index} sx={{ px: 2 }}>
              {/* 🔥 Scale Wrapper */}
              <Box
                sx={{
                  transform: isActive
                    ? isMobile
                      ? "scale(1)"
                      : "scale(1.2)"
                    : "scale(0.85)",
                  transformOrigin: "center center",
                  opacity: isActive ? 1 : 0.5,
                  transition: "all 0.4s ease",
                  display: "flex",
                  justifyContent: "center",
                  py: 6, // 🔥 prevents cut
                }}
              >
                {/* 🔥 Card */}
                <Box
                  sx={{
                    width: isMobile ? 240 : 360,
                    minHeight: isMobile ? 280 : 420,
                    background: "#fff",
                    borderRadius: "24px",
                    border: isActive
                      ? "2px solid #e0e0e0"
                      : "1px solid #eee",
                    boxShadow: isActive
                      ? "0px 20px 40px rgba(0,0,0,0.15)"
                      : "0px 5px 15px rgba(0,0,0,0.05)",
                    p: 3,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      background: "#f5f5f5",
                      borderRadius: "16px",
                      height: isMobile ? 160 : 360,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        height:"320px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  {/* Name */}
                  <Typography
                    mt={3}
                    fontWeight={600}
                    fontSize={isMobile ? "14px" : "18px"}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Slider>
      <Box sx={{ mt: { xs: 4, md: 6 }, p: { xs: 2, md: 4 }, borderRadius: 4, background: "#eef2ef", textAlign: "center", }}>
        <Typography variant="h6" mb={3}> Benefits </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)", }, gap: { xs: 2, md: 4 }, }}> {products[activeIndex].benefits.map((benefit, i) => (
          <Box key={i}>
            <Box sx={{ width: 190, height: 190, borderRadius: "50%", background: "#dfe6e2", mx: "auto", mb: 1, display: "flex", alignItems: "center", justifyContent: "center" }} >
              <Box
                component="img"
                src={benefit.image}
                alt={benefit.label}
                sx={{ width: 133, height: 127, }}
              />
            </Box>

            <Typography variant="body2" sx={{
              fontSize: "24px", fontWeight: 400, color: "#2A6B37", marginTop: "16px"
            }}>{benefit.label}</Typography>
          </Box>))} </Box>
        <Typography mt={4} fontWeight={600} sx={{ fontSize: "32px" }}> Ingredients </Typography>
        <Typography variant="body2" mt={1} sx={{ fontSize: "24px" }} > {products[activeIndex].ingredients} </Typography>
      </Box>
    </Box>
  );
};

export default BenefitsPage;
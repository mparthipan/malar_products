import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

const products = [
    {
        name: "Hair Oil",
        image: require("../Assets/products/hair-oil.png"),
    },
    {
        name: "Kumkumadhi Serum",
        image: require("../Assets/products/kumkumadhi.png"),
    },
    {
        name: "Rosemary Hair Serum",
        image: require("../Assets/products/rosemary.png"),
    },
    {
        name: "Dandruff Hair Oil",
        image: require("../Assets/products/dandruff.png"),
    },
    {
        name: "Face Pack Powder",
        image: require("../Assets/products/facepack.png"),
    },
    {
        name: "Arappu Hair Pack",
        image: require("../Assets/products/arappu.png"),
    },
    {
        name: "Shikakai Powder",
        image: require("../Assets/products/shikakai.png"),
    },
    {
        name: "Curry Leaf Idly Podi",
        image: require("../Assets/products/idlypodi.png"),
    },
];

const ProductSection = () => {
    return (
        <>
            <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>

                {/* Title */}
                <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: 600, mb: 4, backgroundColor: "rgba(42, 107, 55, 0.1)", padding: "12px" }}
                >
                    Ours Product
                </Typography>

                {/* Grid */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "24px",
                        justifyContent: "center", // center row
                    }}
                >
                    {products.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: "335px",
                                height: "fit-content",
                                flex: "0 0 calc(25% - 24px)", // 4 per row
                                display: "flex",

                                // Responsive
                                "@media (max-width: 1200px)": {
                                    flex: "0 0 calc(33.33% - 24px)", // 3 per row
                                },
                                "@media (max-width: 900px)": {
                                    flex: "0 0 calc(50% - 24px)", // 2 per row
                                },
                                "@media (max-width: 500px)": {
                                    flex: "0 0 100%", // 1 per row
                                },
                            }}
                        >
                            <Card
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "24px",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    textAlign: "center",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                                    },
                                }}
                            >
                                {/* Image */}
                                <Box
                                    sx={{
                                        height: "250px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: "#f5f5f5",
                                        borderRadius: "70px",
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
                                            objectFit: "contain",
                                        }}
                                    />
                                </Box>

                                {/* Title */}
                                <Typography variant="body1" sx={{ fontWeight: 500, paddingTop: "24px", fontSize:"22px" }}>
                                    {item.name}
                                </Typography>
                            </Card>
                        </Box>
                    ))}
                </Box>




            </Box>
            <Box>
                <Grid sx={{display:"flex", alignItems:"center", justifyContent:"center", gap:"12px"}}>
                    <img src={require("../Assets/Images/Layer_2.png")} alt="layer2" style={{width:"15%", objectFit:"contain", height:"15x", paddingBottom:"12px"}} />
                    <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 600, mb: 4, mt: 2 }}
                    >
                        Ours Benefits
                    </Typography>
                    <img src={require("../Assets/Images/Layer_3.png")} alt="layer2" style={{width:"15%", objectFit:"contain", height:"15x", paddingBottom:"12px"}}/>
                </Grid>
                <Box
                    sx={{
                        backgroundColor: "rgba(42, 107, 55, 0.05)",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                        // width: "98%"
                    }}
                >
                    <Box
                        component="img"
                        src={require("../Assets/Images/benefit1.png")}
                        alt="hero banner"
                        sx={{
                              width: "70%",
                              padding: "30px",
                            height: "30%",   // maintain aspect ratio
                            display: "block",
                        }}
                    />
                </Box>
            </Box>
        </>
    );
};

export default ProductSection;
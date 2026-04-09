import React from "react";
import { Box, Grid, Typography, Divider, useTheme, useMediaQuery } from "@mui/material";

import WhatsAppIcon from "../Assets/Images/WhatsApp.png";
import InstagramIcon from "../Assets/Images/Instagram.png";
import FacebookIcon from "../Assets/Images/Facebook.png";
import YouTubeIcon from "../Assets/Images/YouTube.png";
import Malar_Logo_White from "../Assets/Images/logo_white.png";

const Footer = () => {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box
            sx={{
                background: "#2f6b3c",
                color: "#fff",
                px: { xs: 2, md: 6 },
                py: { xs: 4, md: 6 },
            }}
        >
            {/* TOP 4 COLUMNS */}
            <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* SHOP */}
                <Grid >
                    <Typography fontWeight="bold" mb={2} sx={{ textDecoration: "underline" }}>
                        Shop
                    </Typography>
                    {[
                        "Hair Oil",
                        "Kumkumadhi Serum",
                        "Rosemary Hair Serum",
                        "Dandruff Hair Oil",
                        "Face Pack Powder",
                        "Arappu Hair Pack",
                        "Shikakai Powder",
                        "Curry Leaf Idly Podi",
                    ].map((item, i) => (
                        <Typography key={i} variant="body2" mb={1}>
                            {item}
                        </Typography>
                    ))}
                </Grid>

                <Grid sx={{
                    width: isMobile ? "100%": "70%",
                    marginTop: isMobile? "16px" : "0px"
                }}>


                    <Grid sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: isMobile ? "column" : "row",
                        gap: isMobile ? "12px" : "0px"
                    }}>

                        {/* INFORMATION */}

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography fontWeight="bold" mb={2} sx={{ textDecoration: "underline" }}>
                                Information
                            </Typography>
                            {["About Us", "FAQ", "Reviews", "Contact Us"].map((item, i) => (
                                <Typography key={i} variant="body2" mb={1}>
                                    {item}
                                </Typography>
                            ))}
                        </Grid>

                        {/* POLICIES */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography fontWeight="bold" mb={2} sx={{ textDecoration: "underline" }}>
                                Policies
                            </Typography>
                            {["Privacy Policy", "Terms & Condition"].map((item, i) => (
                                <Typography key={i} variant="body2" mb={1}>
                                    {item}
                                </Typography>
                            ))}
                        </Grid>

                        {/* CONTACT */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography fontWeight="bold" mb={2} sx={{ textDecoration: "underline" }}>
                                Contact Us
                            </Typography>
                            <Typography variant="body2" mb={1}>📞 9384150379</Typography>
                            <Typography variant="body2">✉️ malaroil1002@gmail.com</Typography>
                        </Grid>
                    </Grid>

                    <Grid>
                        <Divider sx={{ my: 4, background: "rgba(255,255,255,0.3)" }} />
                        <Grid container alignItems="center" sx={{
                            display:"flex", justifyContent: isMobile ? "center" : "space-between" 
                        }}>
                            {/* EMPTY SPACE (LEFT) */}
                            <Grid item md={3} display={{ xs: "none", md: "block" }} />

                            {/* FOLLOW US CENTER */}
                            <Grid item xs={12} md={6} textAlign="center" >
                                <Typography fontWeight="bold" mb={2} sx={{ textDecoration: "underline" }}>
                                    Follow Us
                                </Typography>

                                <Box display="flex" justifyContent="center" gap={2}>
                                    {[WhatsAppIcon, InstagramIcon, FacebookIcon, YouTubeIcon].map(
                                        (icon, i) => (
                                            <Box
                                                key={i}
                                                sx={{
                                                    background: "#fff",
                                                    borderRadius: "8px",
                                                    width: 55,
                                                    height: 45,
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    cursor: "pointer",
                                                    transition: "0.3s",
                                                    "&:hover": { transform: "scale(1.1)" },
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={icon}
                                                    alt="social"
                                                    sx={{ width: 25, height: 25 }}
                                                />
                                            </Box>
                                        )
                                    )}
                                </Box>
                            </Grid>

                            {/* LOGO RIGHT */}
                            <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "right" }} mt={{ xs: 3, md: 0 }}>
                                <Box
                                    component="img"
                                    src={Malar_Logo_White}
                                    alt="logo"
                                    sx={{ height: { xs: 50, md: 70 } }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
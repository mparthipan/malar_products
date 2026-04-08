import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "../Assets/Images/WhatsApp.png";
import InstagramIcon from "../Assets/Images/Instagram.png";
import FacebookIcon from "../Assets/Images/Facebook.png";
import YouTubeIcon from "../Assets/Images/YouTube.png";

import Malar_Logo from "../Assets/Images/Group 80.png"

const menuItems = ["Home", "Product", "About us", "Contact"];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      {/* TOP HEADER */}
      <AppBar
        position="static"
        elevation={0}
        sx={{ background: "#f5f5f5", padding: "10px 0" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* LOGO */}
          <Box display="flex" alignItems="center">
            <img
              src={Malar_Logo} // replace with your logo
              alt="logo"
              style={{ height: 50, marginRight: 10 }}
            />
          </Box>

          {/* SEARCH BAR - HIDE ON SMALL MOBILE */}
          {!isMobile && (
            <TextField
              placeholder="Search"
              size="small"
              sx={{
                width: "40%",
                background: "#fff",
                borderRadius: "8px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}

          {/* SOCIAL ICONS */}
          {!isMobile ? (
            <Box display="flex" gap={4}>
              <Box component="img" src={WhatsAppIcon}/>
              <Box component="img" src={InstagramIcon}/>
              <Box component="img" src={FacebookIcon}/>
              <Box component="img" src={YouTubeIcon}/>
            </Box>
          ) : (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MENU BAR (DESKTOP) */}
      {!isMobile && (
        <Box
          sx={{
            background: "#2f6b3c",
            display: "flex",
            justifyContent: "center",
            gap: 4,
            padding: "10px",
            borderRadius: "8px",
            margin: "10px",
          }}
        >
          {menuItems.map((item, index) => (
            <Button
              key={index}
              sx={{
                color: "#fff",
                background: item === "Home" ? "#5c8d63" : "transparent",
                borderRadius: "6px",
                padding: "6px 16px",
                "&:hover": {
                  background: "#5c8d63",
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      )}

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box width={250} role="presentation">
          {/* SEARCH IN DRAWER */}
          <Box p={2}>
            <TextField
              fullWidth
              placeholder="Search"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          {/* SOCIAL ICONS */}
          <Box display="flex" justifyContent="center" gap={2} mt={2}>
           <Box component="img" src={WhatsAppIcon}/>
              <Box component="img" src={InstagramIcon}/>
              <Box component="img" src={FacebookIcon}/>
              <Box component="img" src={YouTubeIcon}/>
          </Box>
        </Box>
      </Drawer>

      <Box
      sx={{
        width: "98%",
        maxWidth: "1401px", // match your design width
        mx: "auto",         // center
      }}
    >
      <Box
        component="img"
        src={require("../Assets/Images/intro_card.png")}
        alt="hero banner"
        sx={{
          width: "100%",
          height: "auto",   // maintain aspect ratio
          display: "block",
        }}
      />
    </Box>

    </>
  );
};

export default Header;
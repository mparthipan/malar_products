import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// FAQ Data
const faqData = [
  {
    question: "How do I use the Hair Oil ?",
    answer:
      "Apply a small amount of oil to your scalp and gently massage. Leave it for 30 minutes or overnight before washing.",
  },
  {
    question: "Is this oil suitable for all hair types?",
    answer:
      "Yes, it is suitable for all hair types including dry, oily, and normal hair.",
  },
  {
    question: "Does it help reduce hair fall?",
    answer:
      "Yes, regular use strengthens roots and helps reduce hair fall.",
  },
  {
    question: "Can both men and women use this oil?",
    answer: "Absolutely, it is suitable for both men and women.",
  },
  {
    question: "How long should I leave the oil in my hair?",
    answer:
      "You can leave it for at least 30 minutes or overnight for best results.",
  },
];

const data = [
  {
    before: require("../Assets/customers/before1.png"),
    after: require("../Assets/customers/after1.png"),
  },
  {
    before: require("../Assets/customers/before2.png"),
    after: require("../Assets/customers/after2.png"),
  },
  {
    before: require("../Assets/customers/before3.png"),
    after: require("../Assets/customers/after3.png"),
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, mx: { xs: 2, md: 3 } }}>

      {/* ✅ FAQ SECTION (FIXED USING FLEX BOX) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // 🔥 KEY FIX
        }}
      >
        
        {/* LEFT IMAGE */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box
            component="img"
            src={require("../Assets/Images/faq_img.png")}
            alt="FAQ"
            sx={{
              width: "100%",
              height: { xs: "auto", md: "100%" },
              objectFit: "cover",
            }}
          />
        </Box>

        {/* RIGHT CONTENT */}
        <Box
          sx={{
            width: {md: "50%" },
            background: "#f5f5f5",
            px: { xs: 2, md: 6 },
            py: { xs: 3, md: 6 },
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            fontWeight={700}
            mb={3}
            sx={{ letterSpacing: "1px", fontSize: { xs: 22, md: 32 } }}
          >
            FAQ
          </Typography>

          {/* Divider */}
          <Box sx={{ height: "1px", background: "#ddd", mb: 3 }} />

          {/* Accordions */}
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              disableGutters
              elevation={0}
              sx={{
                background: "transparent",
                borderBottom: "1px solid #ddd",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ px: 0, py: 1 }}
              >
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: 16, md: 24 }}
                >
                  {String(index + 1).padStart(2, "0")}. {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 0, pb: 2 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    fontSize: { xs: 14, md: 16 },
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>

      {/* ✅ HAPPY CLIENTS */}
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 600,
          mt: 6,
          mb: 3,
          backgroundColor: "rgba(42, 107, 55, 0.1)",
          p: 2,
          fontSize: { xs: 18, md: 22 },
        }}
      >
        Our Happy Clients
      </Typography>

      <Box sx={{ py: { xs: 2, md: 2 } }}>
        <Grid container spacing={2} justifyContent="center">
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  p: 2,
                  textAlign: "center",
                  background: "#fff",
                }}
              >
                {/* Labels */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mb: 2,
                  }}
                >
                  <Typography fontWeight={500}>Before</Typography>
                  <Typography fontWeight={500}>After</Typography>
                </Box>

                {/* Images */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", sm: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={item.before}
                    alt="before"
                    sx={{
                      width: { xs: "100%", sm: 180 },
                      height: { xs: 250, sm: 320 },
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <Box
                    component="img"
                    src={item.after}
                    alt="after"
                    sx={{
                      width: { xs: "100%", sm: 180 },
                      height: { xs: 250, sm: 320 },
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FAQSection;
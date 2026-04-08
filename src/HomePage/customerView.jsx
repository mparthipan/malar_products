import React, { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// ✅ FAQ Data
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
        answer:
            "Absolutely, it is suitable for both men and women.",
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

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ py: { xs: 4, md: 8 }, margin: "0px 24px" }}>
            <Grid container sx={{ display: "flex", justifyContent: "center", flexWrap: "nowrap" }}>
                {/* ✅ LEFT IMAGE */}
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={require("../Assets/Images/faq_img.png")} // 🔥 replace with your image
                        alt="FAQ"
                        sx={{
                            width: "100%",
                            height: { xs: 300, md: "100%" },
                            objectFit: "cover",
                        }}
                    />
                </Grid>

                {/* ✅ RIGHT CONTENT */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        background: "#f5f5f5",
                        px: { xs: 2, md: 6 },
                        py: { xs: 4, md: 6 },
                        width: "70%"
                    }}
                >
                    {/* Title */}
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        mb={3}
                        sx={{ letterSpacing: "1px" }}
                    >
                        FAQ
                    </Typography>

                    {/* Divider */}
                    <Box
                        sx={{
                            height: "1px",
                            background: "#ddd",
                            mb: 3,
                        }}
                    />

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
                                sx={{
                                    px: 0,
                                    py: 1,
                                }}
                            >
                                <Typography fontWeight={700} fontSize={24}>
                                    {String(index + 1).padStart(2, "0")}. {item.question}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails sx={{ px: 0, pb: 2 }}>
                                <Typography variant="body2" color="text.secondary" sx={{
                                    whiteSpace: "normal",     // ✅ allows wrapping
                                    wordBreak: "break-word",  // ✅ breaks long words if needed
                                    fontSize: "16px"
                                }}>
                                    {item.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Grid>
            </Grid>

            <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: 600, mb: 4, mt:6, marginBottom: "24px", backgroundColor: "rgba(42, 107, 55, 0.1)", padding: "12px" }}
                  >
                    Our Happy Clients
                  </Typography>
                  <Box sx={{ py: { xs: 4, md: 2 } }}>
      <Grid container spacing={2} justifyContent="center" sx={{flexWrap:"nowrap"}}>
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
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                {/* Before */}
                <Box
                  component="img"
                  src={item.before}
                  alt="before"
                  sx={{
                    width: 180,
                    height: 320,
                    objectFit: "cover", // 🔥 important
                    borderRadius: "8px",
                  }}
                />

                {/* After */}
                <Box
                  component="img"
                  src={item.after}
                  alt="after"
                  sx={{
                    width: 180,
                    height: 320,
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
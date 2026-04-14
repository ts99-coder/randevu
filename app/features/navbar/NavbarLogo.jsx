"use client";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function NavbarLogo({ colors }) {
  return (
    <Link
      href="/"
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "10px",
          background: colors.navbar.logoBackground,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          boxShadow: colors.navbar.boxShadow,
        }}
      >
        💎
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "17px",
            color: colors.navbar.text,
            lineHeight: 1,
          }}
        >
          BeautyBasket
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",
            color: colors.navbar.text,
            lineHeight: 1,
            marginTop: "2px",
          }}
        >
          Dijital Merkezi
        </Typography>
      </Box>
    </Link>
  );
}

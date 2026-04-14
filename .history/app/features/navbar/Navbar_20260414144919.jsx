"use client"

import { colors } from "@/app/config/colors";
import {
  AppBar,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileNavbarMenu from "./MobileNavbarMenu";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import BaseIconButton from "../../components/BaseIconButton";

export default function Navbar() {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Salonlar", href: "/salonlar" },
    { label: "Inanilmaz Donusumler", href: "/inanilmaz-donusumler" },
    { label: "Stil Deneyin", href: "/stil-deneyin" },
    { label: "Hakkımızda", href: "/hakkimizda" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: colors.navbar.background,
        boxShadow: colors.navbar.boxShadow,
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${colors.navbar.borderColor}`,
        top: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            minHeight: "64px",
            gap: 4,
          }}
        >
          <NavbarLogo colors={colors} />
          {!isMobile && (
            <NavbarMenu
              menuItems={menuItems}
              pathname={pathname}
              colors={colors}
            />
          )}
          {isMobile && (
            <BaseIconButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{ color: colors.navbar.text }}
              icon={mobileMenuOpen ? "close" : "bars"}
            />
          )}
        </Toolbar>
        <MobileNavbarMenu
          isMobile={isMobile}
          mobileMenuOpen={mobileMenuOpen}
          menuItems={menuItems}
          pathname={pathname}
          colors={colors}
        />
      </Container>
    </AppBar>
  );
}

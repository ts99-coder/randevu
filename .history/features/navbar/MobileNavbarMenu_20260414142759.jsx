import BaseButton from "@/app/components/BaseButton";
import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";

export default function MobileNavbarMenu({
  isMobile,
  mobileMenuOpen,
  menuItems,
  pathname,
  colors,
}) {
  return (
    <>
      {isMobile && mobileMenuOpen && (
        <Box
          sx={{
            borderTop: `1px solid ${colors.navbar.borderColor}`,
            py: 2,
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            animation: "slideDown 0.3s ease",
            "@keyframes slideDown": {
              from: {
                opacity: 0,
                transform: "translateY(-10px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    py: 1.2,
                    px: 2,
                    fontSize: "14px",
                    fontWeight: isActive ? 700 : 500,
                    color: colors.navbar.text,
                    cursor: "pointer",
                    borderLeft: isActive
                      ? "4px solid white"
                      : "4px solid transparent",
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.08)"
                      : "transparent",
                    transition: "all 0.3s ease",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                    position: "relative",
                    animation: `slideInItem 0.3s ease ${index * 0.08}s backwards`,
                    "@keyframes slideInItem": {
                      from: {
                        opacity: 0,
                        transform: "translateX(-10px)",
                      },
                      to: {
                        opacity: 1,
                        transform: "translateX(0)",
                      },
                    },
                    "&:hover": {
                      backgroundColor: colors.navbar.hoverBackground,
                      paddingLeft: "24px",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            );
          })}
          <Divider sx={{ borderColor: colors.navbar.borderColor, my: 1 }} />
          <>
            <BaseButton
              fullWidth
              component={Link}
              href="/giris"
              variant="text"
              hoverBackground={colors.navbar.activeBackground}
              backgroundColor={colors.navbar.hoverBackground}
              color={colors.navbar.text}
              sx={{
                border: `1px solid ${colors.navbar.borderColor}`,
              }}
            >
              Giriş Yap
            </BaseButton>
            <BaseButton
              fullWidth
              component={Link}
              href="/kayit"
              variant="contained"
              hoverBackground="rgba(255, 255, 255, 0.9)"
              backgroundColor={colors.background.white}
              color={colors.primary.main}
              sx={{
                fontWeight: 600,
              }}
            >
              Üye Ol
            </BaseButton>
          </>
        </Box>
      )}
    </>
  );
}

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import BaseButton from "../../components/BaseButton";

export default function NavbarMenu({ menuItems, pathname, colors }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 6,
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
      }}
    >
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href}>
            <Box
              sx={{
                position: "relative",
                pb: 1.2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14.5px",
                  fontWeight: 700,
                  underline: "none",
                  color: colors.navbar.text,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "capitalize",
                  letterSpacing: "0.3px",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {item.label}
              </Typography>
              {isActive && (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "4px",
                    backgroundColor: colors.navbar.text,
                    boxShadow: `0 2px 8px ${colors.navbar.activeBackground}`,
                    animation: "slideIn 0.4s ease",
                    "@keyframes slideIn": {
                      from: {
                        width: 0,
                        opacity: 0,
                      },
                      to: {
                        width: "100%",
                        opacity: 1,
                      },
                    },
                  }}
                />
              )}
            </Box>
          </Link>
        );
      })}
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <>
          <BaseButton
            component={Link}
            href="/giris"
            variant="text"
            fullWidth={false}
            hoverBackground={colors.navbar.hoverBackground}
            color={colors.navbar.text}
            backgroundColor={colors.navbar.hoverBackground}
          >
            Giriş Yap
          </BaseButton>
          <BaseButton
            component={Link}
            href="/kayit"
            fullWidth={false}
            hoverBackground={colors.navbar.hoverBackground}
            color={colors.button.secondaryHover}
            backgroundColor={colors.background.white}
          >
            Üye Ol
          </BaseButton>
        </>
      </Box>
    </Box>
  );
}

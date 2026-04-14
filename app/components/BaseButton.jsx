// BaseButton.jsx
import { Button } from "@mui/material";
import BaseIcon from "./BaseIcon";

function BaseButton({
  children,
  icon = null,
  onClick,
  disabled = false,
  onSubmit,
  href,
  id,
  name,
  size = "medium",
  fullWidth = true,
  buttonType = "primary",
  type = "button",
  title,
  component,
  sx,
  variant,
  color,
  startIcon,
  endIcon,
  hoverBackground,
  backgroundColor,
  ...rest
}) {
  const isPrimary = buttonType === "primary";
  const baseSx = {
    textTransform: "none",
    whiteSpace: "nowrap",
    paddingX: 2,
    fontSize: "13px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: 1,
  };
  return (
    <Button
      size={size}
      id={id}
      name={name}
      type={type}
      href={href}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      onSubmit={onSubmit}
      title={title}
      component={component}
      startIcon={startIcon || (icon && <BaseIcon icon={icon} />)}
      endIcon={endIcon}
      variant={variant || (isPrimary ? "contained" : "outlined")}
      sx={{
        color:
          color ||
          (isPrimary ? "primary.contrastText" : "secondary.contrastText"),
        backgroundColor:
          backgroundColor || (isPrimary ? "primary.main" : "transparent"),
        ...baseSx,
        ...(hoverBackground
          ? { "&:hover": { backgroundColor: hoverBackground } }
          : {}),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default BaseButton;

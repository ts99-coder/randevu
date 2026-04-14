import { IconButton, Tooltip } from "@mui/material";
import BaseIcon from "./BaseIcon";

/**
 * @param {string} icon - İkon ismi (örneğin: 'plus')
 * @param {function} onClick
 * @param {string} tooltip - Tooltip metni (opsiyonel)
 * @param {string} size - İkon boyutu: 'small' | 'medium' | 'large'
 * @param {string} bgColor - Arka plan rengi
 * @param {string} hoverColor - Hover rengi
 * @param {string} iconColor - İkon rengi
 */
const BaseIconButton = ({
  icon,
  onClick,
  tooltip = "",
  size = "medium",
  color = "default",
  bgColor,
  hoverColor,
  iconColor,
  square = false,
  disabled,
  sx = {
    backgroundColor: bgColor,
    "&:hover": { backgroundColor: hoverColor },
    color: iconColor,
    borderRadius: square ? 0 : "50%",
  },
}) => {
  const button = (
    <IconButton
      disabled={disabled}
      size={size}
      onClick={onClick}
      color={color}
      sx={sx}
    >
      <BaseIcon icon={icon} sx={{ color: iconColor }} />
    </IconButton>
  );

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
};

export default BaseIconButton;

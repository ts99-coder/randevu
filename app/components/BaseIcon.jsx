// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import clsx from "clsx";

// // Varsayılan stil 'fas' (solid)
// export default function BaseIcon({
//   icon,
//   prefix = "fas",
//   size = "1x",
//   className,
//   sx,
//   ...rest
// }) {
//   // ["fab", "google"] olarak geliyorsa, direkt onu kullan.
//   const iconProp = Array.isArray(icon) ? icon : prefix ? [prefix, icon] : icon;
//   console.log("iconProp: ", iconProp);

//   return (
//     <FontAwesomeIcon
//       icon={iconProp}
//       size={size}
//       className={clsx("align-middle", className)}
//       {...rest}
//       sx={sx}
//       color="inherit"
//     />
//   );
// }

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
// Pick a fallback icon you are sure is in your build. Adjust package/style as needed:
// import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

/**
 * Safe Font Awesome Icon component with fallback handling.
 *
 * Accepted icon prop forms:
 *  - IconDefinition (imported faX variable)
 *  - string (e.g. "user") -> resolved with provided prefix (default 'fas')
 *  - [prefix, name] tuple (e.g. ['fab', 'google'])
 *  - { prefix, iconName } object (will attempt lookup)
 *
 * If resolution fails, falls back to `fallback` prop (defaults to faCircleQuestion).
 */
export default function BaseIcon({
  icon,
  prefix = "fas",
  size = "1x",
  className,
  sx, // (Note: FontAwesomeIcon doesn't use sx natively; you might be mixing with MUI)
  fallback = faCircleQuestion,
  suppressWarning = false,
  ...rest
}) {
  /**
   * Attempt to resolve icon-like input to a real IconDefinition.
   */
  const resolve = (input) => {
    if (!input) return null;

    // If it looks like an IconDefinition (has an `icon` array), assume it's valid.
    if (typeof input === "object" && input.icon && Array.isArray(input.icon)) {
      return input;
    }

    try {
      // Tuple form: [prefix, name]
      if (Array.isArray(input) && input.length === 2) {
        const [pfx, name] = input;
        return findIconDefinition({ prefix: pfx, iconName: name });
      }

      // String form: use provided or default prefix
      if (typeof input === "string") {
        return findIconDefinition({ prefix: prefix || "fas", iconName: input });
      }

      // Object form: { prefix, iconName }
      if (
        typeof input === "object" &&
        "prefix" in input &&
        "iconName" in input
      ) {
        return findIconDefinition({
          prefix: input.prefix,
          iconName: input.iconName,
        });
      }
    } catch {
      return null;
    }

    return null;
  };

  // Normalize the incoming icon to a canonical "iconProp" form first (your original logic):
  const normalized = Array.isArray(icon)
    ? icon
    : prefix && typeof icon === "string"
    ? [prefix, icon]
    : icon;

  const resolved = resolve(normalized);
  const resolvedFallback = resolve(fallback) || faCircleQuestion;

  const finalIcon = resolved || resolvedFallback;

  if (!resolved && !suppressWarning) {
    // Only warn if the requested icon was non-null
    if (icon) {
      console.warn(
        `[BaseIcon] Could not resolve icon "${JSON.stringify(
          normalized
        )}". Falling back to "${resolvedFallback.iconName || "fallback"}".`
      );
    }
  }

  return (
    <FontAwesomeIcon
      icon={finalIcon}
      size={size}
      className={clsx("align-middle", className)}
      color="inherit"
      // FontAwesomeIcon doesn't natively accept 'sx'; keep it only if you have a wrapper that reads it.
      data-sx={sx ? JSON.stringify(sx) : undefined}
      {...rest}
    />
  );
}

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc); // enable UTC mode

// -------------------------------
// 🚀 Backend <-> Frontend Conversions
// -------------------------------

/**
 * Convert a JS Date or Dayjs to ISO string (UTC).
 * Use this when sending datetime to backend.
 */
export const toIsoDateTime = (value) => {
  if (!value) return null;
  return dayjs(value).utc().toISOString(); // "2025-08-20T11:15:00Z"
};

/**
 * Convert a JS Date or Dayjs to ISO date-only string.
 * Use this for LocalDate fields in backend.
 */
export const toIsoDate = (value) => {
  if (!value) return null;
  return dayjs(value).format("YYYY-MM-DD"); // "2025-08-20"
};

/**
 * Parse a backend ISO datetime string into a Dayjs object.
 */
export const fromIsoDateTime = (value) => {
  return value ? dayjs(value) : null;
};

/**
 * Parse a backend ISO date string into a Dayjs object.
 */
export const fromIsoDate = (value) => {
  return value ? dayjs(value, "YYYY-MM-DD") : null;
};

// -------------------------------
// 🚀 Display Helpers (UI)
// -------------------------------

/**
 * Format a datetime string (ISO) for showing in UI.
 * Example: "20/08/2025 14:30"
 */
export const formatDateTime = (value) => {
  if (!value) return "";
  return dayjs(value).format("DD/MM/YYYY HH:mm");
};

/**
 * Format a date-only string (ISO) for showing in UI.
 * Example: "20/08/2025"
 */
export const formatDate = (value) => {
  if (!value) return "";
  return dayjs(value).format("DD/MM/YYYY");
};

export function yupMaxDate(maxDate) {
  const max = dayjs(maxDate); // can be string, Date, or Dayjs
  return function (value) {
    if (!value) return true; // let .required() handle empty
    const date = fromIsoDate(value); // parse "YYYY-MM-DD" to Dayjs
    if (!date || !date.isValid()) return false; // invalid date
    return date.isSame(max, "day") || date.isBefore(max, "day");
  };
}

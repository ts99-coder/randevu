/**
 * Bir double (veya number) para miktarını Türk Lirası formatında stringe çevirir.
 * @param {number} value - Formatlanacak sayı
 * @param {number} [precision=2] - Ondalık basamak sayısı (varsayılan: 2)
 * @returns {string} - Örn: 1.234,56
 */
export function formatTL(value, precision = 2) {
  if (typeof value !== "number" || isNaN(value)) return "0,00";
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });
}

const idNumber = new Intl.NumberFormat("id-ID", {
  maximumFractionDigits: 0,
});

/** 12500 -> "Rp 12.500". Rounds to whole rupiah; negatives -> "-Rp 1.000". */
export function formatIDR(amount: number): string {
  if (!Number.isFinite(amount)) return "Rp -";
  const rounded = Math.round(amount);
  const body = idNumber.format(Math.abs(rounded));
  return `${rounded < 0 ? "-" : ""}Rp ${body}`;
}

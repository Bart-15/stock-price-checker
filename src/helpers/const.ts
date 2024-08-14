/**
 * Helper function to format number with currency
 * @param number - accepts number
 * @param currency - accepts string, optional
 * @param locale - accepts string, optional
 * @returns
 */
export function formatCurrency(
  number: number,
  currency = 'USD',
  locale = 'en-US',
) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(number);
}

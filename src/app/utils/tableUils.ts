/**
 * Determines the appropriate text color class based on the value.
 *
 * @param value - The numerical value to evaluate.
 * @returns A string representing the Tailwind CSS class for text color.
 */
export const getTextColorClass = (value: number): string => {
  if (value > 0) {
    return 'text-pricePositive';
  } else if (value < 0) {
    return 'text-priceNegative';
  } else {
    return 'text-priceText';
  }
};

/**
 * Formats a number as a price string with comma separators.
 *
 * @param price - The price string to format.
 * @returns The formatted price string.
 */
export const formatPrice = (price: string): string => {
  // Remove the dollar sign and commas from the input price
  const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ''));

  // Format the number with comma separators
  return numericPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
